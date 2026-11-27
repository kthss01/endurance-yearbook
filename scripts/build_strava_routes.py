"""Strava 일괄 내보내기(zip)에서 대회·여정 경로와 연도별 자전거 지도 데이터를 만든다.

사용법:
    python scripts/build_strava_routes.py <export_XXXX.zip>

생성 파일:
    data/routes.json        대회·여정별 경로(encoded polyline)와 활동 통계
    data/<year>/rides.json  연도별 자전거 거리 합계와 지도용 라이딩 경로

개인정보 보호:
    - 여정과 연간 지도 경로는 각 활동의 시작·끝 1km를 잘라 내 숙소·집 위치가 드러나지 않게 한다.
    - 연간 지도에는 E-Bike Ride(출퇴근 위주), Virtual Ride(Zwift 가상 좌표), 10km 미만 라이딩을 그리지 않는다.
      거리 합계에는 모든 자전거 활동을 포함한다.
    - 활동 이름·설명·장비 이름은 내보내지 않는다.
"""
from __future__ import annotations

import csv
import datetime as dt
import gzip
import io
import json
import math
import re
import sys
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

import fitdecode

ROOT = Path(__file__).resolve().parents[1]
YEARS = ("2025", "2026")
TRIM_M = 1000          # 여정·연간 지도에서 잘라 낼 시작·끝 거리
MAP_MIN_KM = 10        # 연간 지도에 그릴 최소 거리
RIDE_TYPES = {"Ride", "E-Bike Ride", "Virtual Ride", "Gravel Ride", "Mountain Bike Ride", "E-Mountain Bike Ride", "Velomobile", "Handcycle"}
MAP_TYPES = {"Ride", "Gravel Ride", "Mountain Bike Ride"}


# ---------- 좌표 처리 ----------
def hav(a, b) -> float:
    """두 좌표 사이 거리(m)."""
    la1, lo1, la2, lo2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * 6371000 * math.asin(math.sqrt(h))


def trim(points, meters):
    """시작·끝에서 meters만큼 잘라 낸다. 너무 짧으면 빈 목록."""
    if meters <= 0 or len(points) < 2:
        return points
    def cut(pts):
        acc = 0.0
        for i in range(1, len(pts)):
            acc += hav(pts[i - 1], pts[i])
            if acc >= meters:
                return pts[i:]
        return []
    head = cut(points)
    return cut(head[::-1])[::-1] if head else []


def rdp(points, eps_m):
    """Ramer-Douglas-Peucker 단순화(평면 근사, eps는 m)."""
    if len(points) < 3:
        return points
    lat0 = math.radians(points[0][0])
    xy = [(p[1] * 111320 * math.cos(lat0), p[0] * 110540) for p in points]
    keep = [False] * len(points); keep[0] = keep[-1] = True
    stack = [(0, len(points) - 1)]
    while stack:
        s, e = stack.pop()
        (x1, y1), (x2, y2) = xy[s], xy[e]
        dx, dy = x2 - x1, y2 - y1; norm = math.hypot(dx, dy) or 1e-9
        best, idx = 0.0, -1
        for i in range(s + 1, e):
            d = abs(dy * (xy[i][0] - x1) - dx * (xy[i][1] - y1)) / norm
            if d > best:
                best, idx = d, i
        if best > eps_m and idx > 0:
            keep[idx] = True; stack += [(s, idx), (idx, e)]
    return [p for p, k in zip(points, keep) if k]


def simplify(points, eps, cap):
    out = rdp(points, eps)
    while len(out) > cap:
        eps *= 1.6; out = rdp(points, eps)
    return out


def encode(points) -> str:
    """Google encoded polyline(정밀도 5)."""
    res, plat, plon = [], 0, 0
    for lat, lon in points:
        ilat, ilon = round(lat * 1e5), round(lon * 1e5)
        for v in (ilat - plat, ilon - plon):
            v = ~(v << 1) if v < 0 else v << 1
            while v >= 0x20:
                res.append(chr((0x20 | (v & 0x1F)) + 63)); v >>= 5
            res.append(chr(v + 63))
        plat, plon = ilat, ilon
    return "".join(res)


def region(points) -> str:
    lat, lon = points[len(points) // 2]
    if lon < 20:
        return "EU"
    if (lon > 129.6 and lat < 34.3) or lon > 131.5:
        return "JP"
    return "KR"


# ---------- 파일 해석 ----------
def read_track(z: zipfile.ZipFile, name: str):
    raw = z.read(name)
    if name.endswith(".gz"):
        raw = gzip.decompress(raw)
    pts = []
    if ".fit" in name:
        with fitdecode.FitReader(io.BytesIO(raw)) as fit:
            for frame in fit:
                if isinstance(frame, fitdecode.FitDataMessage) and frame.name == "record":
                    try:
                        la, lo = frame.get_value("position_lat"), frame.get_value("position_long")
                    except KeyError:
                        continue
                    if la is not None and lo is not None:
                        pts.append((la * 180 / 2**31, lo * 180 / 2**31))
    elif ".gpx" in name:
        root = ET.fromstring(raw)
        for el in root.iter():
            if el.tag.endswith("trkpt"):
                pts.append((float(el.get("lat")), float(el.get("lon"))))
    # GPS 튐 제거: 직전 점과 2km 이상 떨어진 점은 버린다
    clean = []
    for p in pts:
        if abs(p[0]) < 1e-6 and abs(p[1]) < 1e-6:
            continue
        if clean and hav(clean[-1], p) > 2000:
            continue
        clean.append(p)
    return clean


def num(v):
    try:
        return float(v) if v not in ("", None) else None
    except ValueError:
        return None


def hms(sec):
    if sec is None:
        return None
    sec = int(round(sec)); return f"{sec // 3600:02d}:{sec % 3600 // 60:02d}:{sec % 60:02d}"


def load_csv(z):
    rows = list(csv.reader(io.TextIOWrapper(z.open("activities.csv"), encoding="utf-8")))
    acts = {}
    for x in rows[1:]:
        when = dt.datetime.strptime(x[1], "%b %d, %Y, %I:%M:%S %p") + dt.timedelta(hours=9)  # UTC → KST
        acts[x[0]] = {"type": x[3], "date": when.strftime("%Y-%m-%d"), "start": when.strftime("%H:%M"), "file": x[12],
                      "dist": num(x[17]) or (num(x[6]) or 0) * 1000, "moving": num(x[16]), "elapsed": num(x[15]),
                      "elev": num(x[20]), "maxSpeed": num(x[18]), "avgSpeed": num(x[19]), "avgHr": num(x[31]), "maxHr": num(x[30]),
                      "avgW": num(x[33]), "npW": num(x[46]), "cad": num(x[29]), "kcal": num(x[34]), "temp": num(x[36])}
    return acts


def stats(a):
    """화면에 보여 줄 활동 통계(이름·장비 등 개인 정보 제외)."""
    s = {"type": a["type"], "date": a["date"], "distanceKm": round(a["dist"] / 1000, 2),
         "movingTime": hms(a["moving"]), "elapsedTime": hms(a["elapsed"])}
    if a["elev"]: s["elevationGainM"] = round(a["elev"])
    if a["moving"] and a["dist"]: s["avgKmh"] = round(a["dist"] / a["moving"] * 3.6, 1)
    if a["maxSpeed"]: s["maxKmh"] = round(a["maxSpeed"] * 3.6, 1)
    if a["avgHr"]: s["avgHr"] = round(a["avgHr"])
    if a["maxHr"]: s["maxHr"] = round(a["maxHr"])
    if a["avgW"]: s["avgWatts"] = round(a["avgW"])
    if a["npW"]: s["npWatts"] = round(a["npW"])
    if a["cad"]: s["cadence"] = round(a["cad"])
    if a["kcal"]: s["kcal"] = round(a["kcal"])
    if a["temp"] is not None: s["tempC"] = round(a["temp"])
    return {k: v for k, v in s.items() if v is not None}


# ---------- 활동 ID 수집 ----------
def js_map(src, const):
    st = src.index(f"const {const} = {{"); en = src.index("\n};", st)
    return dict(re.findall(r'"([0-9]{4}-[a-z0-9-]+)":\s*"(\d+)"', src[st:en]))


START = {}
TYPE_LABEL = {"Swim": "수영", "Ride": "사이클", "Run": "러닝", "Workout": "전환", "Walk": "걷기"}
LABEL = {"swim": "수영", "bike": "사이클", "run": "러닝", "transition": "전환", "vertical-run": "수직 러닝"}


def targets():
    src = (ROOT / "assets/js/app.js").read_text(encoding="utf-8")
    links, jlinks = js_map(src, "STRAVA_LINKS"), js_map(src, "JOURNEY_STRAVA")
    out = {"events": {}, "journeys": {}}
    for y in YEARS:
        for e in json.loads((ROOT / f"data/{y}/events.json").read_text(encoding="utf-8")):
            s = e.get("strava") or {}
            if s.get("activities"):
                ids = [(a["activityId"], LABEL.get(a.get("discipline"), a.get("discipline"))) for a in s["activities"]]
            elif s.get("activityIds"):
                ids = [(i, "TYPE") for i in s["activityIds"]]
            elif s.get("activityId") or links.get(e["id"]):
                ids = [(s.get("activityId") or links[e["id"]], None)]
            else:
                ids = []
            if ids: out["events"][e["id"]] = ids
        for j in json.loads((ROOT / f"data/{y}/journeys.json").read_text(encoding="utf-8")):
            s = j.get("strava") or {}
            if s.get("activityIds"):
                ids = [(i, "DAY") for i in s["activityIds"]]  # 일차 라벨은 활동 날짜로 계산한다
            elif jlinks.get(j["id"]) or s.get("activityId"):
                ids = [(jlinks.get(j["id"]) or s["activityId"], None)]
            else:
                ids = []
            if ids: out["journeys"][j["id"]] = ids; START[j["id"]] = j["startDate"]
    return out


def main(zip_path):
    z = zipfile.ZipFile(zip_path)
    names = set(z.namelist())
    acts = load_csv(z)
    cache = {}

    def track(aid):
        if aid not in cache:
            f = acts.get(aid, {}).get("file")
            cache[aid] = read_track(z, f) if f and f in names else []
        return cache[aid]

    routes = {"events": {}, "journeys": {}, "activities": {}}
    missing = []
    for kind, items in targets().items():
        for oid, ids in items.items():
            entry, seen_files, day_count = [], set(), {}
            for aid, label in ids:
                a = acts.get(str(aid))
                if not a:
                    missing.append((oid, aid)); continue
                if label == "TYPE":
                    label = TYPE_LABEL.get(a["type"], a["type"])
                elif label == "DAY":
                    day = (dt.date.fromisoformat(a["date"]) - dt.date.fromisoformat(START[oid])).days + 1
                    day_count[day] = day_count.get(day, 0) + 1
                    label = f"{day}일차" + (f"-{day_count[day]}" if day_count[day] > 1 else "")
                routes["activities"][str(aid)] = stats(a)
                # 멀티스포츠 기록은 여러 활동이 같은 파일을 공유하므로 경로는 한 번만 넣는다
                dup = a["file"] in seen_files; seen_files.add(a["file"])
                pts = [] if a["type"].startswith("Virtual") or dup else track(str(aid))
                if kind == "journeys":
                    pts = trim(pts, TRIM_M)
                eps, cap = (8, 700) if kind == "events" else (25, 450)
                t = {"id": str(aid)}
                if label: t["label"] = label
                if len(pts) > 1:
                    poly = encode([(round(p[0], 5), round(p[1], 5)) for p in simplify(pts, eps, cap)])
                    # 멀티스포츠 기록은 하위 활동마다 같은 전체 경로가 들어 있어 첫 번째에만 남긴다
                    if poly not in seen_files: t["poly"] = poly; seen_files.add(poly)
                entry.append(t)
            routes[kind][oid] = entry
    (ROOT / "data/routes.json").write_text(json.dumps(routes, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print("routes:", len(routes["events"]), "events,", len(routes["journeys"]), "journeys, missing", missing)

    for y in YEARS:
        rides = [(aid, a) for aid, a in acts.items() if a["date"].startswith(y) and a["type"] in RIDE_TYPES]
        by_type, by_month = {}, [0.0] * 12
        for _, a in rides:
            km = a["dist"] / 1000
            by_type[a["type"]] = by_type.get(a["type"], 0) + km
            by_month[int(a["date"][5:7]) - 1] += km
        tracks, mapped_km = [], 0.0
        for aid, a in sorted(rides, key=lambda r: r[1]["date"]):
            if a["type"] not in MAP_TYPES or a["dist"] < MAP_MIN_KM * 1000:
                continue
            pts = trim(track(aid), TRIM_M)
            if len(pts) < 2:
                continue
            mapped_km += a["dist"] / 1000
            tracks.append({"d": a["date"], "km": round(a["dist"] / 1000, 1), "r": region(pts),
                           "p": encode([(round(p[0], 4), round(p[1], 4)) for p in simplify(pts, 60, 260)])})
        out = {"year": int(y), "totalKm": round(sum(by_type.values()), 1), "rides": len(rides),
               "byType": {k: round(v, 1) for k, v in sorted(by_type.items(), key=lambda kv: -kv[1])},
               "byMonthKm": [round(v, 1) for v in by_month],
               "longestKm": round(max((a["dist"] for _, a in rides), default=0) / 1000, 1),
               "elevationM": round(sum(a["elev"] or 0 for _, a in rides)),
               "mapped": {"rides": len(tracks), "km": round(mapped_km, 1)},
               "policy": "E-Bike·Virtual·10km 미만 라이딩은 지도에서 제외하고, 각 경로의 시작·끝 1km를 잘라 냈습니다.",
               "tracks": tracks}
        (ROOT / f"data/{y}/rides.json").write_text(json.dumps(out, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
        print(y, "rides", len(rides), "km", out["totalKm"], "mapped", out["mapped"])


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
