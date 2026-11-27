// 엔듀런스 연감 화면 렌더링
// 데이터 상수(COPY, LABEL, MEDIA, JOURNEY_MEDIA, STRAVA_LINKS, JOURNEY_STRAVA, AI_ANALYSIS)는 app.js에서 불러온다.
// 경로 지도는 Leaflet(index.html에서 로드)을 쓰고, 없으면 SVG로 대체한다.

/* ───────── 기본 도구 ───────── */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const num = (v, d = 1) => new Intl.NumberFormat("ko-KR", { maximumFractionDigits: d }).format(v);
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const YEARS = [2025, 2026];

const SPORT_ORDER = ["cycling", "running", "swimming", "walking", "mobility"];
const COLOR = {
  cycling: "#7c98e6", running: "#e8755f", swimming: "#5fb7cf", walking: "#a895dc",
  mobility: "#8a8d85", triathlon: "#c4dc66", aquathlon: "#5fb7cf", trail: "#66bf8f",
  journey: "#dfb262", randonneuring: "#dfb262", transition: "#6b6d66",
};
const METRICS = {
  distanceKm: { label: "거리", unit: "km", d: 1 },
  movingHours: { label: "이동 시간", unit: "h", d: 1 },
  elevationGainM: { label: "상승고도", unit: "m", d: 0 },
  activityCount: { label: "활동 수", unit: "회", d: 0 },
};
const LABEL2 = { ...LABEL, transition: "전환", journey: "여정", randonneuring: "브레베", "finished-with-dnf-stage": "완주 · 일부 구간 DNF", "partial-route": "일부 구간 주행", cancelled: "대회 취소" };
// 숫자 전용 글꼴(대문자만 있음)에서 단위가 대문자로 보이지 않도록 영문 단위를 <small>로 감싼다
const u = (str) => String(str).replace(/(\d["']?)\s?(\/?[a-zA-Z][a-zA-Z/]*)/g, "$1<small class=\"unit\">$2</small>");

// "hh:mm:ss(.xx)" → 초
function toSec(t) {
  if (!t || typeof t !== "string") return null;
  const p = t.split(":").map(Number);
  if (p.some(isNaN)) return null;
  return p.length === 3 ? p[0] * 3600 + p[1] * 60 + p[2] : p[0] * 60 + p[1];
}
// 초 → "h:mm:ss"
function fmtDur(sec, withSec = true) {
  if (sec == null) return "—";
  sec = Math.round(sec);
  const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
  return withSec ? `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}` : `${h}h ${String(m).padStart(2, "0")}m`;
}
const fmtPace = (secPerKm) => `${Math.floor(secPerKm / 60)}'${String(Math.round(secPerKm % 60)).padStart(2, "0")}"`;
const dateKo = (d) => d.replaceAll("-", ".");
// 초 → 영상 길이 표기 "m:ss" / "h:mm:ss"
function fmtClock(sec) {
  sec = Math.round(sec);
  const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = String(sec % 60).padStart(2, "0");
  return h ? `${h}:${String(m).padStart(2, "0")}:${s}` : `${m}:${s}`;
}
// 외부 데이터(영상 제목·설명)를 HTML에 넣을 때 쓰는 이스케이프
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

/* ───────── 사진·기록 판별 ───────── */
const DOC_IMAGE = /(official|result|certificate|ranking|strava|splits|pace|heart-rate|route-summary|course|chart)/;
const isDocImage = (p) => DOC_IMAGE.test(p.split("/").pop());
const coverPhoto = (pics = []) => pics.find((p) => !isDocImage(p));
// 인터넷에서 가져온 자유 라이선스 사진의 출처(app.js IMAGE_CREDITS)
const credit = (p) => (typeof IMAGE_CREDITS !== "undefined" && IMAGE_CREDITS[p]) || null;
const creditHtml = (c) => (c ? `${c.caption ? `${c.caption} · ` : ""}사진: ${c.source ? `<a href="${c.source}" target="_blank" rel="noreferrer">${c.author || "출처"}</a>` : c.author || ""}${c.license ? ` (${c.license})` : ""}` : "");
// 사진별 초점 위치(app.js COVER_FOCUS)를 style 속성으로
const focus = (p) => { const f = typeof COVER_FOCUS !== "undefined" && COVER_FOCUS[p]; return f ? ` style="object-position:${f}"` : ""; };

function splitDistances(s = {}) {
  return [["swimming", s.swimDistanceKm], ["cycling", s.bikeDistanceKm], ["running", s.runDistanceKm]].filter(([, d]) => d);
}
function eventDistance(e) {
  const s = e.strava || {};
  if (s.distanceKm) return s.distanceKm;
  if (s.segments) return s.segments.reduce((a, x) => a + (x.distanceKm || 0), 0);
  const parts = splitDistances(s);
  if (parts.length) return parts.reduce((a, [, d]) => a + d, 0);
  // Strava 기록이 없는 대회는 공식·게시물 기준 거리로 대신한다
  return e.official?.distanceKm || null;
}
const eventElevation = (e) => e.strava?.elevationGainM || e.official?.elevationGainM || null;
function result(e) {
  const o = e.official || {}, s = e.strava || {};
  if (o.time) return o.time;
  if (o.duathlonTime) return o.duathlonTime;
  if (o.result) return o.result;
  if (s.distanceKm) return `${num(s.distanceKm)} km`;
  if (s.verticalFinish) return `${s.verticalFinish} 완주`;
  const d = eventDistance(e);
  return d ? `${num(d)} km` : "기록 검토 중";
}
const officialSec = (e) => toSec(e.official?.time || e.official?.duathlonTime);

/* 종목 구간(수영·전환·사이클·러닝) 목록: 공식 구간 > 레그 기록 > Strava 구간 순 */
function legs(e) {
  const o = e.official || {}, s = e.strava || {};
  const dist = {};
  (s.segments || []).forEach((x) => (dist[x.sport] = (dist[x.sport] || 0) + (x.distanceKm || 0)));
  splitDistances(s).forEach(([k, d]) => (dist[k] = d));
  if (o.splits) {
    const out = [], keys = Object.keys(o.splits), tr = o.transitions || {};
    keys.forEach((k, i) => {
      out.push({ sport: k, sec: toSec(o.splits[k]), dist: dist[k], src: "공식" });
      const t = i === 0 ? tr.t1 : i === 1 ? tr.t2 : null;
      if (t) out.push({ sport: "transition", name: i === 0 ? "T1" : "T2", sec: toSec(t), src: "공식" });
    });
    return out;
  }
  if (o.legTimes) {
    const map = { run5k: ["running", "러닝 5K"], bike40k: ["cycling", "사이클 40K"], run10k: ["running", "러닝 10K"] };
    return Object.entries(o.legTimes).map(([k, v]) => ({ sport: map[k]?.[0] || k, name: map[k]?.[1], sec: toSec(v), src: "공식" }));
  }
  if (o.swimTime) {
    const out = [{ sport: "swimming", sec: toSec(o.swimTime), dist: dist.swimming, src: "공식" }];
    if (o.transitionTime) out.push({ sport: "transition", name: "전환", sec: toSec(o.transitionTime), src: "공식" });
    if (o.bikeTime) out.push({ sport: "cycling", sec: toSec(o.bikeTime), dist: dist.cycling, src: "공식" });
    if (o.runTime) out.push({ sport: "running", sec: toSec(o.runTime), dist: dist.running, src: "공식" });
    if (o.verticalRunTime) out.push({ sport: "running", name: "수직 러닝", sec: toSec(o.verticalRunTime), src: "공식" });
    return out;
  }
  if (s.segments?.length > 1 && s.segments.every((x) => x.movingTime))
    return s.segments.map((x) => ({ sport: x.sport, sec: toSec(x.movingTime), dist: x.distanceKm, src: "Strava" }));
  return [];
}

/* 러닝 거리 구분 */
function runBucket(e) {
  if (e.category !== "running") return null;
  const d = eventDistance(e) || 0;
  if (d >= 38) return "FULL";
  if (d >= 19) return "HALF";
  if (d >= 9) return "10K";
  return null;
}
const BUCKET_LABEL = { FULL: "풀코스", HALF: "하프", "10K": "10K" };

/* ───────── 상태 ───────── */
const state = { year: 2026, filter: "all", metric: "distanceKm", summaries: {}, events: {}, journeys: {}, videos: {}, detailList: [], detailIndex: 0, lb: { list: [], i: 0 }, routes: null, rides: {}, rideRegion: "KR", rideMap: null };
const allEvents = () => YEARS.flatMap((y) => state.events[y] || []);

/* 유튜브 영상 목록(data/videos.json)을 "type:targetId"별로 묶는다.
   대회와 여정이 같은 id를 쓰는 경우가 있어 type까지 키에 넣는다.
   파일이 없거나 형식이 잘못돼도 사이트는 영상 없이 그대로 보여준다. */
async function loadVideos() {
  try {
    const r = await fetch("data/videos.json");
    if (!r.ok) return {};
    const list = await r.json();
    const map = {};
    (Array.isArray(list) ? list : []).forEach((v) => {
      if (!v?.videoId || !v.targetId) return;
      (map[`${v.type || "event"}:${v.targetId}`] ||= []).push(v);
    });
    Object.values(map).forEach((arr) => arr.sort((a, b) => String(a.publishedAt || "").localeCompare(String(b.publishedAt || ""))));
    return map;
  } catch (err) {
    console.warn("영상 목록을 불러오지 못했습니다.", err);
    return {};
  }
}
const videosOf = (type, id) => state.videos[`${type}:${id}`] || [];

// 경로·라이딩 데이터는 없어도 사이트가 동작하도록 실패를 무시한다
const optionalJson = (url) => fetch(url).then((r) => (r.ok ? r.json() : null)).catch(() => null);

async function load() {
  const videos = loadVideos();
  const routes = optionalJson("data/routes.json");
  const rides = Promise.all(YEARS.map((y) => optionalJson(`data/${y}/rides.json`)));
  for (const y of YEARS) {
    const [s, e, j] = await Promise.all(
      ["summary", "events", "journeys"].map((n) => fetch(`data/${y}/${n}.json`).then((r) => r.json())),
    );
    state.summaries[y] = s;
    state.events[y] = e;
    state.journeys[y] = j;
  }
  state.videos = await videos;
  state.routes = await routes;
  (await rides).forEach((r, i) => r && (state.rides[YEARS[i]] = r));
  render();
}

function render() {
  const y = state.year, s = state.summaries[y], c = COPY[y];
  $$("[data-year-button]").forEach((b) => b.classList.toggle("active", +b.dataset.yearButton === y));
  $(".year-switch").dataset.active = y;
  $("#hero-year").textContent = y;
  $("#hero-year-bg").textContent = y;
  $("#hero-summary").textContent = c.summary;
  renderKpis(s);
  renderMetricTabs();
  renderCharts();
  renderSports(s);
  renderRecords(s);
  renderRaceSummary();
  renderTimeline();
  renderPBs();
  renderEvents();
  renderJourneys();
  renderRideMap();
  $("#review-quote").textContent = c.quote;
  $("#review-points").innerHTML = c.points
    .map(([a, b], i) => `<article class="review-point reveal" style="--d:${i * 90}ms"><span>${String(i + 1).padStart(2, "0")}</span><strong>${a}</strong><p>${b}</p></article>`)
    .join("");
  observe();
  redraw();
}

/* ───────── 히어로 KPI ───────── */
function renderKpis(s) {
  const prev = state.summaries[state.year - 1];
  const rows = [
    ["총 거리", s.distanceKm, "km", 1, "distanceKm"],
    ["활동", s.activityCount, "회", 0, "activityCount"],
    ["활동한 날", s.activeDays, "일", 0, "activeDays"],
    ["이동 시간", s.movingHours, "h", 1, "movingHours"],
    ["누적 상승", s.elevationGainM, "m", 0, "elevationGainM"],
  ];
  $("#hero-kpis").innerHTML = rows
    .map(([l, v, u, d, k], i) => {
      let delta = "";
      if (prev && prev[k]) {
        const pct = ((v - prev[k]) / prev[k]) * 100;
        delta = `<em class="${pct >= 0 ? "up" : "down"}">${pct >= 0 ? "▲" : "▼"} ${num(Math.abs(pct), 1)}% <small>vs ${state.year - 1}</small></em>`;
      }
      return `<div class="kpi reveal" style="--d:${i * 70}ms"><span>${l}</span><strong><b data-count="${v}" data-dec="${d}">0</b><small>${u}</small></strong>${delta}</div>`;
    })
    .join("");
}

/* ───────── 지표 탭 ───────── */
function renderMetricTabs() {
  $("#metric-tabs").innerHTML = Object.entries(METRICS)
    .map(([k, m]) => `<button role="tab" class="${state.metric === k ? "active" : ""}" data-metric="${k}">${m.label}</button>`)
    .join("");
  $$("#metric-tabs button").forEach((b) => (b.onclick = () => {
    state.metric = b.dataset.metric;
    renderMetricTabs();
    renderCharts();
    redraw();
  }));
}
function renderCharts() {
  const s = state.summaries[state.year];
  renderMonthly(s);
  renderShare(s);
  renderCumulative();
  renderConsistency(s);
}

/* 월별 종목 누적 막대 */
function renderMonthly(s) {
  const m = state.metric, M = METRICS[m];
  const sports = SPORT_ORDER.filter((k) => s.sports[k]?.[m] > 0);
  const totals = s.months.map((mo) => sports.reduce((a, k) => a + (mo.sports[k]?.[m] || 0), 0));
  const max = Math.max(...totals) || 1;
  const W = 760, H = 300, pad = { l: 44, r: 8, t: 22, b: 28 }, cw = (W - pad.l - pad.r) / 12, bw = cw * 0.62;
  const ticks = niceTicks(max, 4);
  const top = ticks[ticks.length - 1];
  const yy = (v) => pad.t + (H - pad.t - pad.b) * (1 - v / top);
  let svg = ticks.map((t) => `<g class="grid"><line x1="${pad.l}" x2="${W - pad.r}" y1="${yy(t)}" y2="${yy(t)}"/><text x="${pad.l - 8}" y="${yy(t) + 4}" text-anchor="end">${num(t, 0)}</text></g>`).join("");
  s.months.forEach((mo, i) => {
    const x = pad.l + i * cw + (cw - bw) / 2;
    let acc = 0;
    const segs = sports.map((k) => {
      const v = mo.sports[k]?.[m] || 0;
      if (!v) return "";
      const y1 = yy(acc + v), y0 = yy(acc);
      acc += v;
      return `<rect class="seg" x="${x}" y="${y1}" width="${bw}" height="${Math.max(0, y0 - y1)}" fill="${COLOR[k]}" style="--d:${i * 40}ms"/>`;
    }).join("");
    svg += `<g class="month" data-i="${i}"><rect class="hit" x="${pad.l + i * cw}" y="${pad.t}" width="${cw}" height="${H - pad.t - pad.b}"/>${segs}<text class="tot" x="${x + bw / 2}" y="${yy(totals[i]) - 6}" text-anchor="middle">${totals[i] ? num(totals[i], m === "distanceKm" ? 0 : M.d) : ""}</text><text class="xl" x="${x + bw / 2}" y="${H - 8}" text-anchor="middle">${mo.month}월</text></g>`;
  });
  $("#monthly-chart").innerHTML = `<svg viewBox="0 0 ${W} ${H}" class="bars">${svg}</svg>`;
  $("#monthly-title").textContent = `월별 ${M.label} · 종목 구성`;
  $("#monthly-legend").innerHTML = sports.map((k) => `<span><i style="background:${COLOR[k]}"></i>${LABEL2[k]}</span>`).join("");
  $$("#monthly-chart .month").forEach((g) => {
    const mo = s.months[+g.dataset.i];
    g.onmousemove = (ev) => tip(ev, `<b>${mo.month}월 · ${num(totals[+g.dataset.i], M.d)} ${M.unit}</b>${sports.filter((k) => mo.sports[k]?.[m]).map((k) => `<span><i style="background:${COLOR[k]}"></i>${LABEL2[k]} <em>${num(mo.sports[k][m], M.d)} ${M.unit}</em></span>`).join("")}<small>활동한 날 ${mo.activeDays}일</small>`);
    g.onmouseleave = hideTip;
  });
}
function niceTicks(max, n) {
  const raw = max / n, mag = 10 ** Math.floor(Math.log10(raw)), step = [1, 2, 2.5, 5, 10].map((x) => x * mag).find((x) => x >= raw);
  return Array.from({ length: Math.ceil(max / step) + 1 }, (_, i) => i * step);
}

/* 종목 비중 도넛 */
function renderShare(s) {
  const m = state.metric, M = METRICS[m];
  const items = SPORT_ORDER.map((k) => [k, s.sports[k]?.[m] || 0]).filter(([, v]) => v > 0);
  const total = items.reduce((a, [, v]) => a + v, 0);
  const R = 70, C = 2 * Math.PI * R;
  let off = 0;
  const arcs = items.map(([k, v], i) => {
    const len = (v / total) * C, a = `<circle class="arc" r="${R}" cx="90" cy="90" stroke="${COLOR[k]}" stroke-dashoffset="${-off}" style="--d:${i * 120}ms;--da:${len} ${C - len}" data-k="${k}"><title>${LABEL2[k]} ${num((v / total) * 100, 1)}%</title></circle>`;
    off += len;
    return a;
  }).join("");
  $("#share-chart").innerHTML = `<svg viewBox="0 0 180 180" class="donut"><circle r="${R}" cx="90" cy="90" class="track"/>${arcs}<text x="90" y="86" text-anchor="middle" class="d-val">${num(total, M.d)}</text><text x="90" y="106" text-anchor="middle" class="d-unit">${M.unit} · ${M.label}</text></svg><ul class="share-list">${items.map(([k, v]) => `<li><i style="background:${COLOR[k]}"></i><span>${LABEL2[k]}</span><b>${num((v / total) * 100, 1)}%</b><em>${num(v, M.d)} ${M.unit}</em></li>`).join("")}</ul>`;
}

/* 2025 vs 2026 누적 선 */
function renderCumulative() {
  const m = state.metric, M = METRICS[m];
  // 집계 기간이 끝난 달까지만 그린다(진행 중인 해의 미래 달 제외)
  const lastMonth = (s) => (s.period?.end ? +s.period.end.slice(5, 7) : 12);
  const series = YEARS.map((y) => {
    let acc = 0;
    const s = state.summaries[y];
    return { y, pts: s.months.slice(0, lastMonth(s)).map((mo) => (acc += mo[m] || 0)) };
  });
  const max = Math.max(...series.flatMap((x) => x.pts)) || 1;
  const W = 760, H = 280, pad = { l: 52, r: 70, t: 20, b: 28 };
  const ticks = niceTicks(max, 4), top = ticks[ticks.length - 1];
  const xx = (i) => pad.l + ((W - pad.l - pad.r) * i) / 11, yy = (v) => pad.t + (H - pad.t - pad.b) * (1 - v / top);
  let svg = `<defs>${series.map((sr) => `<linearGradient id="cg${sr.y}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="${sr.y === state.year ? "#c4dc66" : "#8a8d85"}" stop-opacity=".2"/><stop offset="1" stop-color="${sr.y === state.year ? "#c4dc66" : "#8a8d85"}" stop-opacity="0"/></linearGradient>`).join("")}</defs>`;
  svg += ticks.map((t) => `<g class="grid"><line x1="${pad.l}" x2="${W - pad.r}" y1="${yy(t)}" y2="${yy(t)}"/><text x="${pad.l - 8}" y="${yy(t) + 4}" text-anchor="end">${num(t, 0)}</text></g>`).join("");
  svg += Array.from({ length: 12 }, (_, i) => `<text class="xl" x="${xx(i)}" y="${H - 8}" text-anchor="middle">${i + 1}</text>`).join("");
  // 현재 연도를 위에 그린다
  [...series].sort((a) => (a.y === state.year ? 1 : -1)).forEach((sr) => {
    const on = sr.y === state.year, line = sr.pts.map((v, i) => `${i ? "L" : "M"}${xx(i)},${yy(v)}`).join(" ");
    const last = sr.pts.length - 1;
    svg += `<path class="area" d="${line} L${xx(last)},${yy(0)} L${xx(0)},${yy(0)} Z" fill="url(#cg${sr.y})"/><path class="line ${on ? "on" : ""}" d="${line}" pathLength="1"/>${sr.pts.map((v, i) => `<circle class="pt ${on ? "on" : ""}" cx="${xx(i)}" cy="${yy(v)}" r="${on ? 4 : 3}" data-y="${sr.y}" data-i="${i}"/>`).join("")}<text class="end ${on ? "on" : ""}" x="${xx(last) + 8}" y="${yy(sr.pts[last]) + 4}">${sr.y} · ${num(sr.pts[last], 0)}</text>`;
  });
  $("#cumulative-chart").innerHTML = `<svg viewBox="0 0 ${W} ${H}" class="lines">${svg}</svg>`;
  $("#cumulative-title").textContent = `누적 ${M.label} 비교`;
  $("#cumulative-legend").innerHTML = YEARS.map((y) => `<span class="${y === state.year ? "on" : ""}"><i></i>${y}</span>`).join("");
  $$("#cumulative-chart .pt").forEach((c) => {
    c.onmousemove = (ev) => {
      const i = +c.dataset.i, rows = series.filter((sr) => sr.pts[i] != null).map((sr) => `<span><i style="background:${sr.y === state.year ? "#c4dc66" : "#8a8d85"}"></i>${sr.y} <em>${num(sr.pts[i], M.d)} ${M.unit}</em></span>`).join("");
      tip(ev, `<b>${i + 1}월까지 누적</b>${rows}`);
    };
    c.onmouseleave = hideTip;
  });
}

/* 월별 꾸준함 히트맵 */
function renderConsistency(s) {
  const y = state.year;
  const days = s.months.map((mo) => new Date(y, mo.month, 0).getDate());
  const endM = s.period?.end ? +s.period.end.slice(5, 7) : 12;
  const cells = s.months.map((mo, i) => {
    if (mo.month > endM) return `<div class="heat future"><span>${mo.month}월</span><b>—</b><small>집계 전</small></div>`;
    const r = mo.activeDays / days[i];
    return `<div class="heat" style="--r:${r.toFixed(3)}" title="${mo.month}월 ${mo.activeDays}/${days[i]}일"><span>${mo.month}월</span><b>${mo.activeDays}</b><small>/${days[i]}</small><i style="height:${(r * 100).toFixed(0)}%"></i></div>`;
  }).join("");
  const periodDays = Math.round((new Date(s.period?.end || `${y}-12-31`) - new Date(`${y}-01-01`)) / 864e5) + 1;
  const pct = (s.activeDays / periodDays) * 100;
  $("#consistency-chart").innerHTML = `<div class="heat-grid">${cells}</div><div class="ring-stat"><svg viewBox="0 0 120 120"><circle r="50" cx="60" cy="60" class="track"/><circle r="50" cx="60" cy="60" class="ring" pathLength="100" stroke-dasharray="${pct.toFixed(1)} 100"/></svg><div><strong>${num(pct, 0)}%</strong><span>${s.activeDays}일 / ${periodDays}일 움직였습니다</span></div></div>`;
}

/* 종목 카드 */
function renderSports(s) {
  const sports = SPORT_ORDER.filter((k) => s.sports[k]?.activityCount);
  const maxD = Math.max(...sports.map((k) => s.sports[k].distanceKm));
  $("#sport-grid").innerHTML = sports
    .map((k, i) => {
      const v = s.sports[k], avg = v.distanceKm / v.activityCount;
      return `<article class="sport-card reveal" style="--c:${COLOR[k]};--d:${i * 60}ms"><header><span>${LABEL2[k]}</span><small>${v.activityCount}회</small></header><strong><b data-count="${v.distanceKm}" data-dec="1">0</b><small>km</small></strong><div class="meter"><i style="width:${Math.max(2, (v.distanceKm / maxD) * 100)}%"></i></div><dl><div><dt>시간</dt><dd>${num(v.movingHours)}h</dd></div><div><dt>상승</dt><dd>${num(v.elevationGainM, 0)}m</dd></div><div><dt>회당</dt><dd>${avg >= 0.1 ? `${num(avg)}km` : "—"}</dd></div></dl></article>`;
    })
    .join("");
}

/* 연간 최장·최고 기록 */
// 기록 날짜에 해당하는 대회·여정 찾기 (사진 재사용과 상세 화면 연결용)
function recordTarget(x) {
  const y = state.year;
  const ev = state.events[y].find((e) => e.date === x.date);
  if (ev) return { type: "event", id: ev.id, pics: MEDIA[ev.id] || [] };
  const jr = state.journeys[y].find((j) => j.startDate <= x.date && x.date <= j.endDate);
  if (jr) return { type: "journey", id: jr.id, pics: JOURNEY_MEDIA[jr.id] || [] };
  return null;
}
function renderRecords(s) {
  const r = s.records || {}, RM = typeof RECORD_MEDIA !== "undefined" ? RECORD_MEDIA : {};
  const card = (key, rk, label, big, unit, x) => {
    if (!x) return "";
    const t = recordTarget(x), own = RM[`${state.year}-${rk}`] || [];
    const pics = own.length ? own : (t?.pics || []).filter((p) => !isDocImage(p));
    const cover = coverPhoto(pics) || pics[0];
    const thumbs = pics.length > 1 ? `<div class="rec-thumbs">${pics.slice(0, 4).map((p, i) => `<button data-i="${i}" aria-label="기록 사진 ${i + 1} 크게 보기"><img src="${p}" alt="" loading="lazy"></button>`).join("")}${pics.length > 4 ? `<span>+${pics.length - 4}</span>` : ""}</div>` : "";
    return `<article class="record-card reveal ${key} ${cover ? "has-photo" : ""}" data-pics='${JSON.stringify(pics).replace(/'/g, "&#39;")}' ${t ? `data-type="${t.type}" data-target="${t.id}" tabindex="0"` : ""}>${cover ? `<img class="rec-bg" src="${cover}"${focus(cover)} alt="${x.title} 사진" loading="lazy">` : ""}<span class="eyebrow">${label}</span><strong><b data-count="${big}" data-dec="${unit === "km" ? 2 : 0}">0</b><small>${unit}</small></strong><h4>${x.title}</h4><p>${dateKo(x.date)} · ${num(x.distanceKm)} km · ↑ ${num(x.elevationGainM, 0)} m · ${num(x.movingHours)} h</p>${thumbs}${t ? `<span class="rec-open">${t.type === "event" ? "대회 기록 보기" : "여정 기록 보기"} →</span>` : ""}</article>`;
  };
  $("#record-grid").innerHTML =
    card("long", "longestDistance", "LONGEST RIDE · 한 번에 가장 멀리", r.longestDistance?.distanceKm, "km", r.longestDistance) +
    card("high", "highestElevation", "MOST CLIMBING · 가장 많이 오른 날", r.highestElevation?.elevationGainM, "m", r.highestElevation);
  $$("#record-grid .record-card").forEach((c) => {
    const pics = JSON.parse(c.dataset.pics || "[]");
    $$(".rec-thumbs button", c).forEach((b) => (b.onclick = (ev) => { ev.stopPropagation(); openLightbox(pics, +b.dataset.i); }));
    if (!c.dataset.target) return;
    const open = () => (c.dataset.type === "event" ? openEvent(c.dataset.target) : openJourney(c.dataset.target));
    c.onclick = open;
    c.onkeydown = (x) => { if (x.key === "Enter") open(); };
  });
}

/* ───────── 대회 ───────── */
function renderRaceSummary() {
  const ev = state.events[state.year];
  const fin = ev.filter((e) => e.status === "finished").length;
  const other = ev.length - fin;
  const cats = [...new Set(ev.map((e) => e.category))];
  const total = ev.reduce((a, e) => a + (eventDistance(e) || 0), 0);
  $("#race-summary").innerHTML = [
    ["대회·도전", ev.length, "개"],
    ["완주", fin, "개"],
    ["컷오프·변경", other, "개"],
    ["종목", cats.length, "가지"],
    ["대회 총 거리", total, "km"],
  ].map(([l, v, u]) => `<div><span>${l}</span><strong><b data-count="${v}" data-dec="${u === "km" ? 1 : 0}">0</b><small>${u}</small></strong></div>`).join("");
}

/* 시즌 타임라인: 대회는 점, 여정은 막대 */
function renderTimeline() {
  const y = state.year, start = new Date(`${y}-01-01`), span = 365;
  const pos = (d) => (((new Date(d) - start) / 864e5) / span) * 100;
  const months = Array.from({ length: 12 }, (_, i) => `<span style="left:${pos(`${y}-${String(i + 1).padStart(2, "0")}-01`)}%">${i + 1}월</span>`).join("");
  const ev = state.events[y].map((e, i) => `<button class="tl-dot ${e.status !== "finished" ? "warn" : ""}" style="left:${pos(e.date)}%;--c:${COLOR[e.category] || "#fff"};--d:${i * 50}ms" data-id="${e.id}" aria-label="${e.title}"><span>${e.title}<small>${dateKo(e.date)} · ${result(e)}</small></span></button>`).join("");
  const jr = state.journeys[y].map((j) => {
    const l = pos(j.startDate), w = Math.max(0.8, pos(j.endDate) - l + 0.3);
    return `<button class="tl-bar" style="left:${l}%;width:${w}%" data-jid="${j.id}" aria-label="${j.title}"><span>${j.title}<small>${dateKo(j.startDate)}${j.endDate !== j.startDate ? ` — ${dateKo(j.endDate)}` : ""}</small></span></button>`;
  }).join("");
  $("#timeline").innerHTML = `<div class="tl-head"><span class="eyebrow">SEASON TIMELINE</span><div class="legend">${[...new Set(state.events[y].map((e) => e.category))].map((k) => `<span><i style="background:${COLOR[k]}"></i>${LABEL2[k]}</span>`).join("")}<span><i class="bar"></i>여정</span></div></div><div class="tl-track"><div class="tl-months">${months}</div><div class="tl-lane races">${ev}</div><div class="tl-lane trips">${jr}</div></div>`;
  $$("#timeline .tl-dot").forEach((b) => (b.onclick = () => openEvent(b.dataset.id)));
  $$("#timeline .tl-bar").forEach((b) => (b.onclick = () => openJourney(b.dataset.jid)));
}

/* 러닝 개인 최고 기록과 변화 */
function renderPBs() {
  const runs = allEvents().filter((e) => runBucket(e) && officialSec(e)).sort((a, b) => a.date.localeCompare(b.date));
  const html = ["FULL", "HALF", "10K"].map((b) => {
    const list = runs.filter((e) => runBucket(e) === b);
    if (!list.length) return "";
    const best = list.reduce((a, e) => (officialSec(e) < officialSec(a) ? e : a));
    const dist = b === "FULL" ? 42.195 : b === "HALF" ? 21.0975 : 10;
    const secs = list.map(officialSec), mx = Math.max(...secs), mn = Math.min(...secs);
    const W = 260, H = 70, pad = 10;
    const xx = (i) => (list.length === 1 ? W / 2 : pad + ((W - 2 * pad) * i) / (list.length - 1));
    const yy = (v) => (mx === mn ? H / 2 : pad + ((H - 2 * pad) * (v - mn)) / (mx - mn)); // 빠를수록 위
    const line = secs.map((v, i) => `${i ? "L" : "M"}${xx(i)},${yy(v)}`).join(" ");
    const spark = `<svg viewBox="0 0 ${W} ${H}" class="spark"><path d="${line}" pathLength="1"/>${secs.map((v, i) => `<circle cx="${xx(i)}" cy="${yy(v)}" r="${list[i] === best ? 5 : 3.5}" class="${list[i] === best ? "best" : ""}"><title>${list[i].title} ${list[i].official.time}</title></circle>`).join("")}</svg>`;
    const first = list[0], gain = list.length > 1 ? officialSec(first) - officialSec(best) : 0;
    return `<article class="pb-card" data-id="${best.id}"><span class="eyebrow">PERSONAL BEST · ${BUCKET_LABEL[b]}</span><strong>${best.official.time.split(".")[0]}</strong><p>${best.title} · ${dateKo(best.date)}</p><div class="pb-meta"><em>평균 페이스 ${fmtPace(officialSec(best) / dist)}/km</em>${gain > 0 ? `<em class="up">첫 기록 대비 −${fmtDur(gain)}</em>` : ""}<em>${list.length}회 출전</em></div>${spark}</article>`;
  }).join("");
  $("#pb-grid").innerHTML = html ? `<div class="pb-title"><span class="eyebrow">RUNNING PB · 2025—2026</span><p>러닝 대회 기록의 최고치와 변화입니다. 점이 위에 있을수록 빠른 기록입니다.</p></div>${html}` : "";
  $$("#pb-grid .pb-card").forEach((c) => (c.onclick = () => openEvent(c.dataset.id)));
}

function recordFace(e) {
  const d = eventDistance(e), s = e.strava || {};
  const lg = legs(e);
  const bar = lg.length > 1 ? splitBar(lg, true) : "";
  const sub = [eventElevation(e) ? `↑ ${num(eventElevation(e), 0)} m` : "", s.verticalFinish || "", e.official?.course || ""].filter(Boolean).join(" · ");
  return `<div class="record-face"><span class="chip">${LABEL2[e.category] || e.category}</span><strong>${d ? `${num(d)}<small>km</small>` : "—"}</strong>${bar}<div class="rf-sub">${sub}</div></div>`;
}

function renderEvents() {
  const events = state.events[state.year], cats = ["all", ...new Set(events.map((e) => e.category))];
  $("#event-filters").innerHTML = cats
    .map((c) => `<button class="${state.filter === c ? "active" : ""}" data-filter="${c}" style="--c:${COLOR[c] || "#c4dc66"}">${c === "all" ? "전체" : LABEL2[c] || c}<small>${c === "all" ? events.length : events.filter((e) => e.category === c).length}</small></button>`)
    .join("");
  $$("#event-filters button").forEach((b) => (b.onclick = () => {
    state.filter = b.dataset.filter;
    renderEvents();
    observe();
  }));
  const shown = events.filter((e) => state.filter === "all" || e.category === state.filter);
  $("#event-grid").innerHTML = shown
    .map((e, i) => {
      const pics = MEDIA[e.id] || [], photo = coverPhoto(pics), o = e.official || {}, d = eventDistance(e);
      const rank = o.rankOverall ? `<span class="rank">#${o.rankOverall}<small>종합</small></span>` : "";
      return `<article class="race-card reveal ${photo ? "has-photo" : ""}" tabindex="0" data-id="${e.id}" style="--c:${COLOR[e.category] || "#c4dc66"};--d:${(i % 6) * 60}ms"><div class="rc-media">${photo ? `<img src="${photo}"${focus(photo)} alt="${e.title} 대표 사진" loading="lazy">` : recordFace(e)}<div class="rc-chips"><span class="chip">${LABEL2[e.category] || e.category}</span>${photo && credit(photo) ? `<span class="chip ghost" title="${credit(photo).caption || ""}">참고 사진</span>` : ""}${e.status !== "finished" ? `<span class="chip warn">${LABEL2[e.status] || e.status}</span>` : ""}${pics.length ? `<span class="chip ghost">${pics.length} PHOTOS</span>` : ""}${videoChip(videosOf("event", e.id).length)}</div></div><div class="rc-body"><div class="rc-meta"><span>${dateKo(e.date)}</span>${rank}</div><h3>${e.title}</h3><div class="rc-result">${u(result(e))}</div><div class="rc-stats">${d ? `<span>${num(d)} km</span>` : ""}${eventElevation(e) ? `<span>↑ ${num(eventElevation(e), 0)} m</span>` : ""}${o.course ? `<span>${o.course}</span>` : ""}</div></div><span class="rc-glow" aria-hidden="true"></span></article>`;
    })
    .join("");
  $$("#event-grid .race-card").forEach((card) => {
    const open = () => openEvent(card.dataset.id);
    card.onclick = open;
    card.onkeydown = (x) => { if (x.key === "Enter" || x.key === " ") { x.preventDefault(); open(); } };
    tilt(card);
  });
}

/* ───────── 여정 ───────── */
function renderJourneys() {
  const FEATURED = "2026-camino-frances";
  const list = [...state.journeys[state.year]].sort((a, b) => (b.id === FEATURED) - (a.id === FEATURED) || a.startDate.localeCompare(b.startDate));
  $("#journey-list").innerHTML = list
    .map((j, i) => {
      const photos = JOURNEY_MEDIA[j.id] || [], s = j.strava || {}, photo = coverPhoto(photos) || photos[0];
      const period = j.startDate === j.endDate ? dateKo(j.startDate) : `${dateKo(j.startDate)} — ${dateKo(j.endDate)}`;
      const vchip = videoChip(videosOf("journey", j.id).length), chips = vchip ? `<div class="jc-chips">${vchip}</div>` : "";
      return `<article class="journey-card reveal ${photo ? "has-photo" : ""} ${j.id === FEATURED ? "featured" : ""}" tabindex="0" data-jid="${j.id}" style="--d:${i * 70}ms">${photo ? `<div class="jc-media"><img src="${photo}"${focus(photo)} alt="${j.title} 대표 사진" loading="lazy">${chips}${photos.length > 1 ? `<span class="chip ghost">${photos.length} PHOTOS</span>` : ""}</div>` : `<div class="jc-media empty">${chips}<span>${s.distanceKm ? `${num(s.distanceKm, 0)}<small>km</small>` : "—"}</span></div>`}<div class="jc-copy"><span class="date">${period}</span><small>${j.category === "randonneuring" ? "RANDONNEURING" : j.category === "walking" ? "WALKING" : "JOURNEY"}${j.status && j.status !== "finished" ? ` · ${LABEL2[j.status] || j.status}` : ""}</small><h3>${j.title}</h3><p>${j.review || j.summary || ""}</p><div class="jc-stats">${s.distanceKm ? `<b>${num(s.distanceKm)} km</b>` : ""}${s.elapsedHours ? `<b>${num(s.elapsedHours)} h</b>` : ""}${s.elevationGainM ? `<b>↑ ${num(s.elevationGainM, 0)} m</b>` : ""}${s.activityCount > 1 ? `<b>${s.activityCount} stages</b>` : ""}</div><span class="jc-open">여정 자세히 보기 →</span></div></article>`;
    })
    .join("");
  $$("#journey-list .journey-card").forEach((c) => {
    c.onclick = () => openJourney(c.dataset.jid);
    c.onkeydown = (x) => { if (x.key === "Enter") openJourney(c.dataset.jid); };
  });
}

/* ───────── 경로 지도 ─────────
   data/routes.json(대회·여정 경로와 활동 통계)과 data/<year>/rides.json(연간 라이딩)을 그린다.
   Leaflet을 불러오지 못하면 배경 지도 없이 SVG로 경로만 그린다. */
const TILE_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png"; // 어두운 화면에 맞게 CSS 필터로 색을 뒤집는다
const TILE_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const TRACK_COLOR = { Swim: COLOR.swimming, Ride: COLOR.cycling, "Gravel Ride": COLOR.cycling, Run: COLOR.running, "Trail Run": COLOR.trail, Walk: COLOR.walking, Hike: COLOR.trail, Workout: COLOR.transition };
const DAY_COLORS = ["#c4dc66", "#7c98e6", "#e8755f", "#5fb7cf", "#dfb262", "#a895dc", "#66bf8f"];
const RIDE_TYPE_LABEL = { Ride: "로드·그래블", "E-Bike Ride": "전기자전거", "Virtual Ride": "실내(Zwift)", "Gravel Ride": "그래블", "Mountain Bike Ride": "MTB" };
const REGION_LABEL = { KR: "국내", JP: "일본", EU: "유럽" };
let detailMaps = [];

// Google encoded polyline → [[lat, lon], ...]
function decodePoly(str) {
  const pts = [];
  let i = 0, lat = 0, lon = 0;
  while (i < str.length) {
    for (const k of [0, 1]) {
      let shift = 0, res = 0, b;
      do { b = str.charCodeAt(i++) - 63; res |= (b & 0x1f) << shift; shift += 5; } while (b >= 0x20);
      const d = res & 1 ? ~(res >> 1) : res >> 1;
      if (k === 0) lat += d; else lon += d;
    }
    pts.push([lat / 1e5, lon / 1e5]);
  }
  return pts;
}

// lines: [{ pts, color, weight, opacity, tip }]
function drawMap(el, lines, { fit = true, interactive = true } = {}) {
  if (!lines.length) return null;
  if (window.L) {
    const map = L.map(el, { scrollWheelZoom: false, zoomSnap: 0.25, attributionControl: true, dragging: interactive, tap: false });
    L.tileLayer(TILE_URL, { attribution: TILE_ATTR, maxZoom: 18 }).addTo(map);
    const layer = L.featureGroup().addTo(map);
    lines.forEach((ln) => {
      const pl = L.polyline(ln.pts, { color: ln.color, weight: ln.weight || 3, opacity: ln.opacity ?? 0.9, lineJoin: "round" }).addTo(layer);
      if (ln.tip) {
        pl.bindTooltip(ln.tip, { sticky: true, className: "map-tip" });
        pl.on("mouseover", () => { pl.setStyle({ weight: (ln.weight || 3) + 3, opacity: 1 }); pl.bringToFront(); });
        pl.on("mouseout", () => pl.setStyle({ weight: ln.weight || 3, opacity: ln.opacity ?? 0.9 }));
      }
    });
    if (fit) map.fitBounds(layer.getBounds(), { padding: [18, 18] });
    map._tracks = layer;
    return map;
  }
  // 대체 SVG: 위도 보정한 평면 투영
  const all = lines.flatMap((l) => l.pts), lat0 = all.reduce((a, p) => a + p[0], 0) / all.length, k = Math.cos((lat0 * Math.PI) / 180);
  const xs = all.map((p) => p[1] * k), ys = all.map((p) => -p[0]);
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)], w = x1 - x0 || 1e-6, h = y1 - y0 || 1e-6;
  const pad = Math.max(w, h) * 0.06;
  el.innerHTML = `<svg class="map-fallback" viewBox="${x0 - pad} ${y0 - pad} ${w + pad * 2} ${h + pad * 2}" preserveAspectRatio="xMidYMid meet">${lines
    .map((l) => `<polyline points="${l.pts.map((p) => `${p[1] * k},${-p[0]}`).join(" ")}" fill="none" stroke="${l.color}" stroke-width="${(Math.max(w, h) / 300) * (l.weight || 3) / 2}" stroke-linejoin="round" stroke-linecap="round" opacity="${l.opacity ?? 0.9}">${l.tip ? `<title>${l.tip}</title>` : ""}</polyline>`)
    .join("")}</svg>`;
  return null;
}

const paceOf = (a) => {
  if (!a.distanceKm || !a.movingTime) return "";
  const sec = toSec(a.movingTime);
  if (a.type === "Swim") return `${fmtPace(sec / a.distanceKm / 10)}/100m`;
  if (/Run|Walk|Hike/.test(a.type)) return `${fmtPace(sec / a.distanceKm)}/km`;
  return `${num(a.avgKmh ?? a.distanceKm / (sec / 3600))} km/h`;
};

// 상세 화면의 경로·기록 블록
function routeBlock(kind, id) {
  const tracks = state.routes?.[kind]?.[id] || [], acts = state.routes?.activities || {};
  const rows = tracks.map((t) => ({ t, a: acts[t.id] })).filter((x) => x.a);
  if (!rows.length) return "";
  const has = (k) => rows.some((x) => x.a[k] != null);
  const multi = rows.length > 1;
  const cols = [
    multi && ["구간", (x) => x.t.label || LABEL2[x.a.type] || x.a.type],
    ["거리", (x) => `${num(x.a.distanceKm, 2)} km`],
    ["이동", (x) => x.a.movingTime || "—"],
    ["경과", (x) => x.a.elapsedTime || "—"],
    has("elevationGainM") && ["상승", (x) => (x.a.elevationGainM != null ? `${num(x.a.elevationGainM, 0)} m` : "—")],
    ["평균", (x) => paceOf(x.a) || "—"],
    has("avgHr") && ["심박", (x) => (x.a.avgHr ? `${x.a.avgHr}${x.a.maxHr ? ` / ${x.a.maxHr}` : ""} bpm` : "—")],
    has("avgWatts") && ["파워", (x) => (x.a.avgWatts ? `${x.a.avgWatts} W` : "—")],
    has("cadence") && ["케이던스", (x) => (x.a.cadence ? `${x.a.cadence}` : "—")],
  ].filter(Boolean);
  const dot = (x, i) => `<i style="background:${trackColor(x, i, multi, kind)}"></i>`;
  const hasMap = tracks.some((t) => t.poly);
  const note = kind === "journeys" ? "개인정보 보호를 위해 각 경로의 시작·끝 1km는 지도에서 생략했습니다." : "경로는 Strava GPS 기록을 단순화해 그렸습니다.";
  return `<section class="d-block route"><h3>ROUTE / 경로와 기록</h3>${hasMap ? `<div class="route-map" data-kind="${kind}" data-id="${id}" role="img" aria-label="${kind === "journeys" ? "여정" : "대회"} 이동 경로 지도"></div>` : ""}
    <div class="route-table-wrap"><table class="route-table"><thead><tr>${multi ? "<th></th>" : ""}${cols.map(([h]) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows
      .map((x, i) => `<tr>${multi ? `<td>${dot(x, i)}</td>` : ""}${cols.map(([, f]) => `<td>${u(f(x))}</td>`).join("")}</tr>`)
      .join("")}</tbody></table></div><small class="note">${hasMap ? note : "이 활동은 GPS 경로가 없어 기록만 표시합니다."} 출처: Strava 내보내기</small></section>`;
}
function trackColor(x, i, multi, kind) {
  if (kind === "journeys" && multi) return DAY_COLORS[i % DAY_COLORS.length];
  return TRACK_COLOR[x.a.type] || COLOR.journey;
}
function mountRouteMaps(box) {
  detailMaps.forEach((m) => m.remove());
  detailMaps = [];
  $$(".route-map", box).forEach((el) => {
    const kind = el.dataset.kind, tracks = state.routes[kind][el.dataset.id], acts = state.routes.activities;
    const multi = tracks.length > 1;
    // 멀티스포츠 기록처럼 경로 하나에 모든 종목이 담긴 경우는 중립색으로 '전체 경로'라고 표시한다
    const shared = multi && tracks.filter((t) => t.poly).length === 1;
    const total = tracks.reduce((a, t) => a + (acts[t.id]?.distanceKm || 0), 0);
    const lines = tracks
      .map((t, i) => ({ t, a: acts[t.id], i }))
      .filter((x) => x.t.poly)
      .map((x) => shared
        ? { pts: decodePoly(x.t.poly), color: COLOR.triathlon, weight: 4, tip: `전체 경로 · ${dateKo(x.a.date)} · ${num(total, 1)} km` }
        : { pts: decodePoly(x.t.poly), color: trackColor(x, x.i, multi, kind), weight: 4, tip: `${x.t.label ? `${x.t.label} · ` : ""}${dateKo(x.a.date)} · ${num(x.a.distanceKm, 1)} km` });
    const m = drawMap(el, lines);
    if (m) { detailMaps.push(m); setTimeout(() => { m.invalidateSize(); m.fitBounds(m._tracks.getBounds(), { padding: [18, 18] }); }, 450); }
  });
}

/* ───────── 연간 라이딩 지도 ───────── */
function renderRideMap() {
  const sec = $("#ridemap");
  const r = state.rides[state.year];
  if (!r) { sec.hidden = true; return; }
  sec.hidden = false;
  const prev = state.rides[state.year - 1];
  const delta = prev ? r.totalKm - prev.totalKm : null;
  $("#ride-policy").textContent = `거리 합계는 모든 자전거 활동을 더했습니다. ${r.policy}`;
  const kpis = [
    ["자전거 총 거리", r.totalKm, "km", 0, delta != null ? `${delta >= 0 ? "▲" : "▼"} ${num(Math.abs(delta), 0)} km · ${state.year - 1}년 대비` : `${r.rides}회 라이딩`],
    ["라이딩 횟수", r.rides, "회", 0, `평균 ${num(r.totalKm / r.rides, 1)} km`],
    ["최장 거리", r.longestKm, "km", 1, "한 번에 달린 거리"],
    ["누적 상승", r.elevationM, "m", 0, `에베레스트 ${num(r.elevationM / 8849, 1)}회`],
    ["지도에 그린 경로", r.mapped.km, "km", 0, `${r.mapped.rides}회 · 실외 10km 이상`],
  ];
  $("#ride-kpis").innerHTML = kpis
    .map(([a, v, unit, d, sub]) => `<div class="kpi"><span>${a}</span><strong><b data-count="${v}" data-dec="${d}">0</b><small class="unit">${unit}</small></strong><em>${sub}</em></div>`)
    .join("");
  const mx = Math.max(...r.byMonthKm, 1);
  $("#ride-months").innerHTML = `<div class="ride-bars">${r.byMonthKm
    .map((v, i) => `<div class="rb" data-tip="${i + 1}월 · ${num(v, 0)} km"><i style="height:${(v / mx) * 100}%"></i><span>${i + 1}</span></div>`)
    .join("")}</div>`;
  const tmax = Math.max(...Object.values(r.byType));
  $("#ride-types").innerHTML = Object.entries(r.byType)
    .map(([k, v]) => `<div class="rt"><span>${RIDE_TYPE_LABEL[k] || k}</span><div class="cmp-track"><i style="width:${(v / tmax) * 100}%"></i></div><b>${u(`${num(v, 0)} km`)}</b></div>`)
    .join("");
  $$("#ride-months .rb").forEach((b) => {
    b.onmouseenter = (ev) => tip(ev, b.dataset.tip);
    b.onmousemove = (ev) => tip(ev, b.dataset.tip);
    b.onmouseleave = hideTip;
  });
  // 지역 버튼: 경로가 있는 지역만, 기본은 국내
  const regions = [...new Set(r.tracks.map((t) => t.r))].sort((a, b) => Object.keys(REGION_LABEL).indexOf(a) - Object.keys(REGION_LABEL).indexOf(b));
  if (!regions.includes(state.rideRegion)) state.rideRegion = regions.includes("KR") ? "KR" : regions[0];
  $("#ride-regions").innerHTML = regions.length > 1
    ? regions.map((g) => `<button data-region="${g}" class="${g === state.rideRegion ? "active" : ""}">${REGION_LABEL[g] || g}<small>${r.tracks.filter((t) => t.r === g).length}</small></button>`).join("")
    : "";
  $$("#ride-regions button").forEach((b) => (b.onclick = () => { state.rideRegion = b.dataset.region; renderRideMap(); }));
  const lines = r.tracks
    .filter((t) => t.r === state.rideRegion)
    .map((t) => ({ pts: decodePoly(t.p), color: "#c4dc66", weight: 2.5, opacity: 0.55, tip: `${dateKo(t.d)} · ${num(t.km, 1)} km` }));
  const el = $("#ride-map");
  if (state.rideMap) { state.rideMap.remove(); state.rideMap = null; }
  el.innerHTML = "";
  state.rideMap = drawMap(el, lines);
  $("#ride-map-caption").textContent = `${REGION_LABEL[state.rideRegion] || ""} ${lines.length}개 경로 · 선 위에 올리면 날짜와 거리가 보입니다.`;
}

/* ───────── 상세 화면 ───────── */
function splitBar(lg, compact = false) {
  const total = lg.reduce((a, x) => a + (x.sec || 0), 0);
  if (!total) return "";
  return `<div class="split-bar ${compact ? "compact" : ""}">${lg.map((x, i) => `<div class="sb-seg ${x.sport}" style="flex:${x.sec};--c:${COLOR[x.sport] || "#888"};--d:${i * 120}ms">${compact ? "" : `<span>${x.name || LABEL2[x.sport]}</span><b>${fmtDur(x.sec)}</b>`}</div>`).join("")}</div>`;
}

function legTable(lg) {
  const total = lg.reduce((a, x) => a + (x.sec || 0), 0);
  return `<div class="leg-table">${lg.map((x) => {
    const pace = x.dist && x.sec && x.sport !== "transition"
      ? x.sport === "swimming" ? `${fmtPace((x.sec / x.dist) / 10)}/100m` : x.sport === "cycling" ? `${num(x.dist / (x.sec / 3600))} km/h` : `${fmtPace(x.sec / x.dist)}/km`
      : "";
    return `<div><i style="background:${COLOR[x.sport] || "#888"}"></i><span>${x.name || LABEL2[x.sport]}</span><b>${fmtDur(x.sec)}</b><em>${x.dist ? `${num(x.dist, 2)} km` : ""}</em><em>${pace}</em><em>${num((x.sec / total) * 100, 1)}%</em></div>`;
  }).join("")}<small>출처: ${lg[0].src} 구간 기록</small></div>`;
}

/* 같은 성격의 대회 기록 비교 */
function comparables(e) {
  const pool = allEvents();
  let list = [], fmt, better = "low", title;
  const rb = runBucket(e);
  if (rb) {
    list = pool.filter((x) => runBucket(x) === rb && officialSec(x)).map((x) => ({ e: x, v: officialSec(x) }));
    fmt = (v) => fmtDur(v); title = `${BUCKET_LABEL[rb]} 기록 비교`;
  } else if (e.category === "cycling") {
    list = pool.filter((x) => x.category === "cycling" && x.strava?.distanceKm && toSec(x.strava.movingTime)).map((x) => ({ e: x, v: x.strava.distanceKm / (toSec(x.strava.movingTime) / 3600) }));
    fmt = (v) => `${num(v)} km/h`; better = "high"; title = "그란폰도·장거리 이동 평균 속도 비교";
  } else if (e.category === "trail") {
    list = pool.filter((x) => x.category === "trail" && officialSec(x) && eventDistance(x)).map((x) => ({ e: x, v: officialSec(x) / eventDistance(x) }));
    fmt = (v) => `${fmtPace(v)}/km`; title = "트레일 평균 페이스 비교";
  } else if (e.category === "triathlon") {
    // 우천 단축 등 표준거리(약 51.5km)에 못 미치는 대회는 비교에서 제외
    list = pool.filter((x) => x.category === "triathlon" && officialSec(x) && (eventDistance(x) || 0) >= 40).map((x) => ({ e: x, v: officialSec(x) }));
    fmt = (v) => fmtDur(v); title = "철인3종 표준거리 공식 기록 비교";
  } else if (e.category === "aquathlon") {
    // 스프린트(수영 750m)처럼 수영 거리가 짧은 대회는 1.5km 기록과 섞지 않는다
    const swimKm = (x) => (x.strava?.segments || []).filter((s) => s.sport === "swimming").reduce((a, s) => a + (s.distanceKm || 0), 0) || x.strava?.swimDistanceKm || 0;
    list = pool.filter((x) => x.category === "aquathlon" && swimKm(x) >= 1.2).map((x) => ({ e: x, v: toSec(x.official?.splits?.swimming || x.official?.swimTime) })).filter((x) => x.v);
    fmt = (v) => fmtDur(v); title = "아쿠아슬론 수영 기록 비교";
  }
  if (list.length < 2) return "";
  list.sort((a, b) => a.e.date.localeCompare(b.e.date));
  const vals = list.map((x) => x.v), mx = Math.max(...vals), mn = Math.min(...vals);
  const bestV = better === "low" ? mn : mx;
  return `<section class="d-block"><h3>COMPARE / ${title}</h3><div class="cmp">${list.map((x, i) => `<button class="cmp-row ${x.e.id === e.id ? "me" : ""}" data-id="${x.e.id}" style="--d:${i * 80}ms"><span>${x.e.title}<small>${dateKo(x.e.date)}${x.e.official?.course ? ` · ${x.e.official.course}` : ""}</small></span><div class="cmp-track"><i style="width:${Math.max(8, (x.v / mx) * 100)}%"></i></div><b>${u(fmt(x.v))}${x.v === bestV ? " ★" : ""}</b></button>`).join("")}</div><small class="note">${better === "low" ? "막대가 짧을수록 빠른 기록입니다." : "막대가 길수록 빠른 속도입니다."} ★ 최고 기록</small></section>`;
}

function quickStats(e) {
  const o = e.official || {}, s = e.strava || {}, d = eventDistance(e), off = officialSec(e), mv = toSec(s.movingTime);
  const items = [];
  if (off) items.push(["공식 기록", o.time || o.duathlonTime, "⏱"]);
  else if (o.result) items.push(["결과", o.result, "◎"]);
  if (d) items.push(["거리", `${num(d, 2)} km`, "↔"]);
  if (eventElevation(e)) items.push(["상승고도", `${num(eventElevation(e), 0)} m`, "⛰"]);
  if (mv && d) {
    if (["running", "trail"].includes(e.category)) items.push(["평균 페이스", `${fmtPace((off || mv) / d)}/km`, "⚡"]);
    else if (e.category === "cycling") items.push(["이동 평균 속도", `${num(d / (mv / 3600))} km/h`, "⚡"]);
  } else if (off && d && ["running", "trail"].includes(e.category)) items.push(["평균 페이스", `${fmtPace(off / d)}/km`, "⚡"]);
  if (s.movingTime) items.push(["이동 시간", s.movingTime, "▶"]);
  return items.slice(0, 5);
}

// 시즌 안에서의 위치와 개인 최고 여부 (상세 상단 배지)
function highlights(e) {
  const list = [...(state.events[e.year] || [])].sort((a, b) => a.date.localeCompare(b.date));
  const i = list.findIndex((x) => x.id === e.id), out = [];
  if (i >= 0) out.push(["시즌", `${i + 1}번째 대회 / ${list.length}`]);
  if (i > 0) {
    const gap = Math.round((new Date(e.date) - new Date(list[i - 1].date)) / 864e5);
    out.push(["직전 대회 이후", gap === 0 ? "같은 날" : `${gap}일`]);
  }
  const rb = runBucket(e), sec = officialSec(e);
  if (rb && sec) {
    const best = Math.min(...allEvents().filter((x) => runBucket(x) === rb && officialSec(x)).map(officialSec));
    if (sec === best) out.push([BUCKET_LABEL[rb], "★ 개인 최고"]);
  }
  return out;
}
// AI 분석이 아직 없는 대회용: 저장된 기록에서 계산한 요약
function autoFacts(e) {
  const s = e.strava || {}, o = e.official || {}, d = eventDistance(e), off = officialSec(e), mv = toSec(s.movingTime), f = [];
  if (d) f.push(`거리 ${num(d, 2)} km${s.elevationGainM ? `, 누적 상승 ${num(s.elevationGainM, 0)} m (km당 ${num(s.elevationGainM / d, 1)} m)` : ""}입니다.`);
  const t = off || mv;
  if (t && d && ["running", "trail", "walking"].includes(e.category)) f.push(`평균 페이스는 ${fmtPace(t / d)}/km입니다.`);
  if (mv && d && e.category === "cycling") f.push(`이동 평균 속도는 ${num(d / (mv / 3600))} km/h입니다.`);
  if (off && mv && off - mv > 60) f.push(`공식 기록과 Strava 이동 시간의 차이는 약 ${Math.floor((off - mv) / 3600) ? `${Math.floor((off - mv) / 3600)}시간 ` : ""}${Math.round(((off - mv) % 3600) / 60)}분입니다.`);
  if (o.rankOverall) f.push(`종합 ${o.rankOverall}위${o.rankMen ? `, 남자부 ${o.rankMen}위` : ""}로 기록됐습니다.`);
  const lg = legs(e).filter((x) => x.sport !== "transition" && x.sec);
  if (lg.length > 1) {
    const tot = lg.reduce((a, x) => a + x.sec, 0), top = lg.reduce((a, x) => (x.sec > a.sec ? x : a));
    f.push(`가장 오래 걸린 구간은 ${top.name || LABEL2[top.sport]}(${num((top.sec / tot) * 100, 0)}%)입니다.`);
  }
  if (f.length < 2) return "";
  return `<section class="d-block ai"><h3>DATA / 기록 요약</h3><ul class="facts">${f.map((x) => `<li>${x}</li>`).join("")}</ul><small class="note">※ 저장된 기록에서 자동으로 계산한 요약입니다. 상세 분석은 아직 없습니다.</small></section>`;
}
function badges(e) {
  const o = e.official || {}, out = [...highlights(e)];
  if (o.rankOverall) out.push(["종합", `${o.rankOverall}위`]);
  if (o.rankMen) out.push(["남자부", `${o.rankMen}위`]);
  if (o.ageGroupRank) out.push(["연령별", o.ageGroupRank]);
  if (o.bib) out.push(["배번", o.bib]);
  if (o.course) out.push(["코스", o.course]);
  if (o.milestone) out.push(["이정표", o.milestone]);
  if (o.mediofondoTime) out.push(["메디오폰도 기록", o.mediofondoTime]);
  return out;
}

function timeCompare(e) {
  const off = officialSec(e), mv = toSec(e.strava?.movingTime);
  if (!off || !mv) return "";
  const diff = off - mv, mx = Math.max(off, mv);
  return `<section class="d-block"><h3>TIME / 공식 기록 vs 실제 움직인 시간</h3><div class="tc"><div><span>공식 기록</span><div class="tc-track"><i class="off" style="width:${(off / mx) * 100}%"></i></div><b>${fmtDur(off)}</b></div><div><span>Strava 이동</span><div class="tc-track"><i class="mv" style="width:${(mv / mx) * 100}%"></i></div><b>${fmtDur(mv)}</b></div></div><p class="note">${diff > 0 ? `보급·정차·대기 등으로 약 <b>${fmtDur(diff, false)}</b>를 멈춰 있었습니다. (${num((diff / off) * 100, 1)}%)` : "공식 기록과 이동 시간이 거의 같습니다. 멈춤 없이 달렸습니다."}</p></section>`;
}

function stravaLinks(e) {
  const s = e.strava || {}, links = [];
  if (s.activities?.length) s.activities.forEach((a) => links.push([a.url || `https://www.strava.com/activities/${a.activityId}`, { swim: "수영", bike: "사이클", run: "러닝", transition: "전환", "vertical-run": "수직 러닝" }[a.discipline] || a.discipline]));
  else if (s.activityIds?.length) s.activityIds.forEach((id, i) => links.push([`https://www.strava.com/activities/${id}`, `활동 ${i + 1}`]));
  else if (STRAVA_LINKS[e.id]) links.push([`https://www.strava.com/activities/${STRAVA_LINKS[e.id]}`, "활동 열기"]);
  return links;
}

function gallery(pics, title) {
  if (!pics.length) return "";
  const photos = pics.filter((p) => !isDocImage(p)), docs = pics.filter(isDocImage);
  const fig = (p, i, cls) => `<figure class="${cls}" data-i="${i}"><img src="${p}" alt="${credit(p)?.caption || `${title} 사진 ${i + 1}`}" loading="lazy">${credit(p) ? `<figcaption class="credit">${creditHtml(credit(p))}</figcaption>` : ""}</figure>`;
  const ordered = [...photos, ...docs];
  return `<section class="gallery-section"><div class="gallery-head"><span class="eyebrow">PHOTO ESSAY</span><h3>그날의 장면</h3><b>${photos.length} photos${docs.length ? ` · ${docs.length} records` : ""}</b></div>${photos.length ? `<div class="masonry">${photos.map((p, i) => fig(p, i, "")).join("")}</div>` : ""}${docs.length ? `<h4 class="docs-title">기록표 · 캡처</h4><div class="doc-strip">${docs.map((p, i) => fig(p, photos.length + i, "doc")).join("")}</div>` : ""}</section>`.replace("<section", `<section data-pics='${JSON.stringify(ordered).replace(/'/g, "&#39;")}'`);
}

/* ───────── 유튜브 영상 ───────── */
const videoChip = (n) => (n ? `<span class="chip video">▶ VIDEO${n > 1 ? ` ${n}` : ""}</span>` : "");

// 처음에는 썸네일만 두고, 클릭했을 때 그 자리에 iframe을 넣어 재생한다(playVideo)
function videoBlock(list) {
  if (!list.length) return "";
  const item = (v) => {
    const id = esc(v.videoId), short = v.kind === "short", dur = v.durationSec ? fmtClock(v.durationSec) : "";
    const kind = v.kind === "live" ? `<span class="chip warn vid-kind">LIVE</span>` : short ? `<span class="chip ghost vid-kind">SHORTS</span>` : "";
    const meta = [v.publishedAt ? `${dateKo(v.publishedAt)} 게시` : "", dur].filter(Boolean).join(" · ");
    return `<figure class="vid ${short ? "short" : ""}"><div class="vid-stage"><button type="button" class="vid-poster" data-vid="${id}" data-title="${esc(v.title)}" aria-label="${esc(v.title)} 영상 재생"><img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy"><span class="vid-play" aria-hidden="true"></span>${dur ? `<span class="vid-dur">${dur}</span>` : ""}${kind}</button></div><figcaption><strong>${esc(v.title)}</strong>${meta ? `<small>${meta}</small>` : ""}${v.note ? `<p>${esc(v.note)}</p>` : ""}<a class="vid-link" href="${esc(v.url || `https://www.youtube.com/watch?v=${v.videoId}`)}" target="_blank" rel="noreferrer">YouTube에서 열기 ↗</a></figcaption></figure>`;
  };
  return `<section class="d-block video"><h3>VIDEO / 영상</h3><div class="vid-list">${list.map(item).join("")}</div></section>`;
}

function playVideo(btn) {
  const stage = btn.closest(".vid-stage");
  stopVideos(btn.closest("#event-detail") || document); // 다른 영상은 멈춘다
  const f = document.createElement("iframe");
  f.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(btn.dataset.vid)}?autoplay=1&rel=0&playsinline=1`;
  f.title = btn.dataset.title || "YouTube 영상";
  f.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  f.allowFullscreen = true;
  f.referrerPolicy = "strict-origin-when-cross-origin";
  stage.append(f);
  stage.classList.add("playing");
}
// 재생 중인 iframe을 걷어내고 썸네일로 되돌린다(상세 창을 닫을 때 소리가 남지 않도록)
function stopVideos(root) {
  $$(".vid-stage.playing", root).forEach((s) => {
    $$("iframe", s).forEach((f) => f.remove());
    s.classList.remove("playing");
  });
}

function openEvent(id) {
  const list = [...state.events[state.year]].sort((a, b) => a.date.localeCompare(b.date));
  let idx = list.findIndex((e) => e.id === id);
  if (idx < 0) {
    // 다른 연도 대회(비교 목록에서 이동)
    const y = YEARS.find((yy) => state.events[yy].some((e) => e.id === id));
    if (!y) return;
    state.year = y; state.filter = "all"; render();
    return openEvent(id);
  }
  state.detailList = list.map((e) => ({ type: "event", id: e.id }));
  state.detailIndex = idx;
  showEvent(list[idx]);
}

function detailNav() {
  const L = state.detailList, i = state.detailIndex;
  const name = (x) => (x.type === "event" ? state.events[state.year].find((e) => e.id === x.id)?.title : state.journeys[state.year].find((j) => j.id === x.id)?.title) || "";
  return `<nav class="d-nav">${i > 0 ? `<button data-step="-1">← ${name(L[i - 1])}</button>` : "<span></span>"}<span>${i + 1} / ${L.length}</span>${i < L.length - 1 ? `<button data-step="1">${name(L[i + 1])} →</button>` : "<span></span>"}</nav>`;
}

function showEvent(e) {
  const pics = MEDIA[e.id] || [], cover = coverPhoto(pics), c = COLOR[e.category] || "#c4dc66";
  const an = AI_ANALYSIS[e.id], lg = legs(e), bd = badges(e), links = stravaLinks(e);
  const html = `
  <div class="d-hero ${cover ? "has-photo" : ""}" style="--c:${c}">${cover ? `<img class="kb" src="${cover}"${focus(cover)} alt="">${credit(cover) ? `<small class="hero-credit">${creditHtml(credit(cover))}</small>` : ""}` : `<div class="d-hero-pattern"></div>`}
    <div class="d-hero-copy"><div class="d-tags"><span>${dateKo(e.date)}</span><span style="--c:${c}" class="cat">${LABEL2[e.category] || e.category}</span><span class="${e.status !== "finished" ? "warn" : ""}">${LABEL2[e.status] || e.status}</span></div>
      <h2 id="detail-title">${e.title}</h2><p class="d-result">${u(result(e))}</p></div></div>
  <div class="d-quick">${quickStats(e).map(([a, b, ic], i) => `<div style="--d:${i * 70}ms"><i>${ic}</i><span>${a}</span><strong>${u(b)}</strong></div>`).join("")}</div>
  ${bd.length ? `<div class="d-badges">${bd.map(([a, b]) => `<span><small>${a}</small>${b}</span>`).join("")}</div>` : ""}
  <div class="d-body">
    <div class="d-main">
      ${videoBlock(videosOf("event", e.id))}
      ${lg.length > 1 ? `<section class="d-block"><h3>SPLITS / 종목별 구간</h3>${splitBar(lg)}${legTable(lg)}</section>` : ""}
      ${timeCompare(e)}
      <section class="d-block story"><h3>RECORD / 기록 요약</h3><p class="d-review">${e.review || ""}</p></section>
      ${routeBlock("events", e.id)}
      ${an ? `<section class="d-block ai"><h3>AI REVIEW / 기록 분석</h3><ul class="facts">${an.facts.map((x) => `<li>${x}</li>`).join("")}</ul><p class="assess">${an.assessment}</p><small class="note">※ 공식 기록과 Strava 수치를 토대로 정리했으며, 수치로 확인할 수 없는 해석은 추정입니다.</small></section>` : ""}
      ${an ? "" : autoFacts(e)}${comparables(e)}
    </div>
    <aside class="d-side">
      <section class="d-block strava"><h3>STRAVA / 원본 활동</h3><div class="strava-card"><div class="route-mark">S</div><p>고도 그래프·랩·구간 기록은 Strava 원본에서 확인하세요.</p>${links.length ? links.map(([u, l]) => `<a href="${u}" target="_blank" rel="noreferrer">${l} ↗</a>`).join("") : "<span>원본 활동 연결 준비 중</span>"}</div></section>
      ${an ? `<section class="d-block next"><h3>NEXT / 다음 도전</h3><ol>${an.next.map((x) => `<li>${x}</li>`).join("")}</ol></section>` : ""}
      <section class="d-block sources"><h3>SOURCES</h3><p>${(e.sources || []).join(" · ")}</p><p class="note">AI 분석과 기록 요약을 구분해 표시합니다.</p></section>
    </aside>
  </div>
  ${gallery(pics, e.title)}
  ${detailNav()}`;
  mountDetail(html);
}

function openJourney(id) {
  const list = [...state.journeys[state.year]].sort((a, b) => a.startDate.localeCompare(b.startDate));
  state.detailList = list.map((j) => ({ type: "journey", id: j.id }));
  state.detailIndex = list.findIndex((j) => j.id === id);
  showJourney(list[state.detailIndex]);
}

function showJourney(j) {
  const pics = JOURNEY_MEDIA[j.id] || [], cover = coverPhoto(pics) || pics[0], s = j.strava || {}, act = JOURNEY_STRAVA[j.id] || s.activityId;
  const period = j.startDate === j.endDate ? dateKo(j.startDate) : `${dateKo(j.startDate)} — ${dateKo(j.endDate)}`;
  const days = Math.round((new Date(j.endDate) - new Date(j.startDate)) / 864e5) + 1;
  const quick = [
    s.distanceKm && ["거리", `${num(s.distanceKm)} km`, "↔"],
    s.elevationGainM && ["상승고도", `${num(s.elevationGainM, 0)} m`, "⛰"],
    (s.movingTime || s.movingHours) && ["이동 시간", s.movingTime || `${num(s.movingHours)} h`, "▶"],
    (s.elapsedTime || s.elapsedHours) && ["전체 경과", s.elapsedTime || `${num(s.elapsedHours)} h`, "⏱"],
    days > 1 ? ["기간", `${days}일 · ${s.activityCount || "-"} stages`, "◷"] : s.distanceKm && s.movingHours ? ["이동 평균", `${num(s.distanceKm / s.movingHours)} km/h`, "⚡"] : null,
  ].filter(Boolean);
  const stages = j.stages?.length
    ? `<section class="d-block"><h3>STAGES / 구간별 기록</h3><div class="cmp">${(() => { const mx = Math.max(...j.stages.map((x) => x.distanceKm)); return j.stages.map((x, i) => `<div class="cmp-row ${x.status !== "finished" ? "dnf" : ""}" style="--d:${i * 80}ms"><span>${i + 1}. ${x.title}<small>${LABEL2[x.status] || x.status}</small></span><div class="cmp-track"><i style="width:${(x.distanceKm / mx) * 100}%"></i></div><b>${u(`${num(x.distanceKm)} km`)}</b></div>`).join(""); })()}</div></section>`
    : "";
  const html = `
  <div class="d-hero ${cover ? "has-photo" : ""}" style="--c:#dfb262">${cover ? `<img class="kb" src="${cover}"${focus(cover)} alt="">${credit(cover) ? `<small class="hero-credit">${creditHtml(credit(cover))}</small>` : ""}` : `<div class="d-hero-pattern"></div>`}
    <div class="d-hero-copy"><div class="d-tags"><span>${period}</span><span class="cat" style="--c:#dfb262">${j.category === "randonneuring" ? "브레베" : "여정"}</span>${j.status && j.status !== "finished" ? `<span class="warn">${LABEL2[j.status] || j.status}</span>` : ""}</div><h2 id="detail-title">${j.title}</h2><p class="d-result">${s.distanceKm ? u(`${num(s.distanceKm)} km`) : ""}</p></div></div>
  <div class="d-quick">${quick.map(([a, b, ic], i) => `<div style="--d:${i * 70}ms"><i>${ic}</i><span>${a}</span><strong>${u(b)}</strong></div>`).join("")}</div>
  <div class="d-body"><div class="d-main">
    ${videoBlock(videosOf("journey", j.id))}
    ${stages}
    <section class="d-block story"><h3>RECORD / 여정 기록</h3><p class="d-review">${j.review || j.summary || ""}</p></section>
    ${routeBlock("journeys", j.id)}
    ${j.analysis ? `<section class="d-block ai"><h3>AI REVIEW / 기록 분석</h3><p class="assess">${j.analysis}</p></section>` : ""}
  </div><aside class="d-side">
    <section class="d-block strava"><h3>STRAVA / 원본 활동</h3><div class="strava-card"><div class="route-mark">S</div><p>고도 그래프와 랩 기록은 Strava 원본에서 확인하세요.</p>${act ? `<a href="https://www.strava.com/activities/${act}" target="_blank" rel="noreferrer">활동 열기 ↗</a>` : "<span>원본 활동 연결 준비 중</span>"}</div></section>
    ${j.next?.length ? `<section class="d-block next"><h3>NEXT / 다음 도전</h3><ol>${j.next.map((x) => `<li>${x}</li>`).join("")}</ol></section>` : ""}
  </aside></div>
  ${gallery(pics, j.title)}
  ${detailNav()}`;
  mountDetail(html);
}

function mountDetail(html) {
  const dlg = $("#event-dialog"), box = $("#event-detail");
  box.classList.remove("in");
  box.innerHTML = html;
  if (!dlg.open) { dlg.showModal(); document.body.classList.add("locked"); }
  dlg.scrollTop = 0;
  void box.offsetHeight; // 리플로우 후 등장 애니메이션 시작
  requestAnimationFrame(() => box.classList.add("in"));
  $$(".d-nav button", box).forEach((b) => (b.onclick = () => stepDetail(+b.dataset.step)));
  $$(".cmp-row[data-id]", box).forEach((b) => (b.onclick = () => b.dataset.id && openEvent(b.dataset.id)));
  $$(".vid-poster", box).forEach((b) => (b.onclick = () => playVideo(b)));
  // 섹션 바로가기 탭
  const TAB = { SPLITS: "구간", STAGES: "구간", TIME: "시간 비교", RECORD: "기록", "AI REVIEW": "분석", DATA: "기록 요약", COMPARE: "비교", VIDEO: "영상", ROUTE: "경로", NEXT: "다음 도전" };
  const secs = [...$$(".d-block", box), ...$$(".gallery-section", box)]
    .map((el) => ({ el, label: el.matches(".gallery-section") ? "사진" : TAB[($("h3", el)?.textContent || "").split(" / ")[0].trim()] }))
    .filter((x) => x.label);
  if (secs.length > 2 && $(".d-body", box)) {
    const nav = document.createElement("nav");
    nav.className = "d-tabs";
    nav.setAttribute("aria-label", "상세 섹션 이동");
    nav.innerHTML = secs.map((x, i) => `<button data-i="${i}">${x.label}</button>`).join("");
    $(".d-body", box).before(nav);
    $$("button", nav).forEach((b) => (b.onclick = () => {
      const el = secs[+b.dataset.i].el;
      dlg.scrollTo({ top: el.getBoundingClientRect().top - dlg.getBoundingClientRect().top + dlg.scrollTop - 62, behavior: REDUCED ? "auto" : "smooth" });
    }));
  }
  // 사진이 많으면 9장만 먼저 보여 주고 나머지는 접는다
  const ms = $(".masonry", box);
  if (ms && ms.children.length > 9) {
    ms.classList.add("collapsed");
    const more = document.createElement("button");
    more.className = "more-btn";
    more.textContent = `사진 ${ms.children.length - 9}장 더 보기`;
    more.onclick = () => { ms.classList.remove("collapsed"); more.remove(); };
    ms.after(more);
  }
  const gs = $(".gallery-section", box);
  if (gs) {
    const list = JSON.parse(gs.dataset.pics);
    $$("figure", gs).forEach((f) => (f.onclick = () => openLightbox(list, +f.dataset.i)));
  }
  mountRouteMaps(box);
}
function stepDetail(step) {
  const L = state.detailList, i = state.detailIndex + step;
  if (i < 0 || i >= L.length) return;
  state.detailIndex = i;
  const x = L[i];
  if (x.type === "event") showEvent(state.events[state.year].find((e) => e.id === x.id));
  else showJourney(state.journeys[state.year].find((j) => j.id === x.id));
}

/* ───────── 라이트박스 ───────── */
function openLightbox(list, i) {
  state.lb = { list, i };
  showLb();
  $("#lightbox").showModal();
}
function showLb() {
  const { list, i } = state.lb;
  $("#lb-img").src = list[i];
  $("#lb-cap").innerHTML = `${i + 1} / ${list.length}${credit(list[i]) ? ` · ${creditHtml(credit(list[i]))}` : ""}`;
}
function stepLb(d) {
  const L = state.lb.list.length;
  state.lb.i = (state.lb.i + d + L) % L;
  showLb();
}

/* ───────── 효과: 등장·카운트업·기울기·툴팁 ───────── */
// .in: 처음 화면에 들어올 때 등장 / .drawn: 그래프 그리기 애니메이션(지표·연도 변경 시 다시 재생)
const DRAWN = ".panel, .timeline, .pb-grid";
let io;
function observe() {
  if (!io) {
    io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      if (en.target.matches(DRAWN)) en.target.classList.add("drawn");
      $$("[data-count]", en.target).forEach(countUp);
      if (en.target.matches("[data-count]")) countUp(en.target);
      io.unobserve(en.target);
    }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  }
  $$(`.reveal:not(.in), .race-summary:not(.in), ${DRAWN.split(", ").map((s) => `${s}:not(.in)`).join(", ")}`).forEach((el) => io.observe(el));
  // 이미 화면에 보이는 영역은 바로 숫자 갱신
  $$(".in [data-count]").forEach(countUp);
}
function redraw() {
  const els = $$(DRAWN).filter((el) => el.classList.contains("in"));
  els.forEach((el) => el.classList.remove("drawn"));
  requestAnimationFrame(() => requestAnimationFrame(() => els.forEach((el) => el.classList.add("drawn"))));
}
function countUp(el) {
  const to = +el.dataset.count, dec = +el.dataset.dec || 0;
  if (el.dataset.done === String(to)) return;
  el.dataset.done = String(to);
  if (REDUCED) { el.textContent = num(to, dec); return; }
  const t0 = performance.now(), dur = 1400;
  const step = (t) => {
    const p = Math.min(1, (t - t0) / dur), k = 1 - Math.pow(1 - p, 4);
    el.textContent = num(to * k, dec);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
function tilt(card) {
  if (REDUCED || matchMedia("(hover: none)").matches) return;
  card.onmousemove = (ev) => {
    const r = card.getBoundingClientRect(), x = (ev.clientX - r.left) / r.width, y = (ev.clientY - r.top) / r.height;
    card.style.setProperty("--rx", `${(0.5 - y) * 3}deg`);
    card.style.setProperty("--ry", `${(x - 0.5) * 4}deg`);
    card.style.setProperty("--mx", `${x * 100}%`);
    card.style.setProperty("--my", `${y * 100}%`);
  };
  card.onmouseleave = () => { card.style.setProperty("--rx", "0deg"); card.style.setProperty("--ry", "0deg"); };
}
function tip(ev, html) {
  const t = $("#tooltip");
  t.innerHTML = html;
  t.hidden = false;
  const w = t.offsetWidth, h = t.offsetHeight;
  let x = ev.clientX + 16, y = ev.clientY + 16;
  if (x + w > innerWidth - 8) x = ev.clientX - w - 16;
  if (y + h > innerHeight - 8) y = ev.clientY - h - 16;
  t.style.transform = `translate(${x}px, ${y}px)`;
}
const hideTip = () => ($("#tooltip").hidden = true);

/* ───────── 전역 이벤트 ───────── */
$$("[data-year-button]").forEach((b) => (b.onclick = () => {
  state.year = +b.dataset.yearButton;
  state.filter = "all";
  render();
}));
$(".dialog-close").onclick = () => $("#event-dialog").close();
$("#event-dialog").addEventListener("close", () => {
  document.body.classList.remove("locked");
  stopVideos($("#event-detail"));
});
$("#event-dialog").addEventListener("click", (e) => { if (e.target === $("#event-dialog")) $("#event-dialog").close(); });
$("#event-dialog").addEventListener("keydown", (e) => {
  if ($("#lightbox").open) return;
  if (e.key === "ArrowRight") stepDetail(1);
  if (e.key === "ArrowLeft") stepDetail(-1);
});
$(".lb-close").onclick = () => $("#lightbox").close();
$(".lb-prev").onclick = () => stepLb(-1);
$(".lb-next").onclick = () => stepLb(1);
$("#lightbox").addEventListener("click", (e) => { if (e.target === $("#lightbox")) $("#lightbox").close(); });
$("#lightbox").addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") stepLb(1);
  if (e.key === "ArrowLeft") stepLb(-1);
});
// 스크롤 진행 바와 히어로 패럴랙스
addEventListener("scroll", () => {
  const h = document.documentElement, p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
  $("#scroll-bar").style.transform = `scaleX(${p})`;
  $(".topbar").classList.toggle("scrolled", h.scrollTop > 40);
  if (!REDUCED) $("#hero").style.setProperty("--sy", `${Math.min(h.scrollTop, 900)}px`);
}, { passive: true });
// 히어로 마우스 빛
$("#hero").addEventListener("pointermove", (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--px", `${((e.clientX - r.left) / r.width) * 100}%`);
  e.currentTarget.style.setProperty("--py", `${((e.clientY - r.top) / r.height) * 100}%`);
});

load().catch((err) => {
  console.error(err);
  $("#hero-summary").textContent = "기록 데이터를 불러오지 못했습니다.";
});
