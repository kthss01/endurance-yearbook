from __future__ import annotations

import gzip
import json
import math
from pathlib import Path

import fitdecode

ROOT = Path(__file__).resolve().parents[2]
OUTPUT = Path(__file__).resolve().parents[1] / "data" / "routes.json"

EVENT_FILES = {
    "2025-seorak-granfondo": ["activities/15476633271.fit.gz"],
    "2025-mungyeong-granfondo": ["activities/16783438099.fit.gz"],
    "2025-chuncheon-10k": ["activities/17341583389.fit.gz"],
    "2025-mbn-half": ["activities/17557612361.fit.gz"],
    "2026-gumi-full-marathon": ["activities/18657481651.fit.gz"],
    "2026-mungyeong-granfondo": ["activities/21183268680.fit.gz"],
    "2026-bbang-trail-30k": ["activities/21286496926.fit.gz"],
    "2026-daecheongho-full-marathon": ["activities/21776672381.fit.gz"],
    "2026-incheon-full-marathon": ["activities/22247643382.fit.gz"],
}


def decode(path: Path) -> list[list[float]]:
    points: list[list[float]] = []
    with gzip.open(path, "rb") as source:
        with fitdecode.FitReader(source) as fit:
            for frame in fit:
                if not isinstance(frame, fitdecode.FitDataMessage) or frame.name != "record":
                    continue
                fields = {field.name: field.value for field in frame.fields}
                lat, lon = fields.get("position_lat"), fields.get("position_long")
                if lat is None or lon is None:
                    continue
                points.append([round(lat * 180 / 2**31, 6), round(lon * 180 / 2**31, 6)])
    if len(points) <= 220:
        return points
    step = math.ceil(len(points) / 220)
    sampled = points[::step]
    if sampled[-1] != points[-1]:
        sampled.append(points[-1])
    return sampled


def main() -> None:
    routes = {}
    for event_id, filenames in EVENT_FILES.items():
        points = []
        for filename in filenames:
            path = ROOT / filename
            if path.exists():
                points.extend(decode(path))
        if points:
            routes[event_id] = points
    OUTPUT.write_text(json.dumps(routes, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"Wrote {len(routes)} event routes to {OUTPUT}")


if __name__ == "__main__":
    main()
