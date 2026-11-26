const COPY = {
  2025: {
    summary:
      "사이클을 중심으로 수영과 러닝, 철인3종까지 활동 반경을 넓힌 해. 완주뿐 아니라 컷오프와 계획 변경도 다음 시즌을 위한 기록으로 남겼습니다.",
    quote:
      "새로운 종목을 시작했고, 완주와 실패를 같은 무게로 기록한 확장의 해였습니다.",
    points: [
      [
        "종목의 확장",
        "그란폰도 중심의 시즌에 아쿠아슬론과 철인3종이 본격적으로 더해졌습니다.",
      ],
      [
        "실패도 기록",
        "문경새재 컷오프는 2026년 재도전의 가장 선명한 출발점이 됐습니다.",
      ],
      [
        "여행의 방식",
        "자전거와 대회를 중심으로 장소를 경험하는 방식이 자리 잡았습니다.",
      ],
    ],
  },
  2026: {
    summary:
      "첫 풀마라톤을 완주하고 장거리 라이딩, 트레일과 철인3종을 연이어 경험한 해. 2025년의 미완성을 실제 완주로 바꿨습니다.",
    quote:
      "처음 해보는 일에서 멈추지 않고, 한계를 다시 다음 도전의 출발선으로 만들었습니다.",
    points: [
      [
        "긴 호흡",
        "첫 풀코스부터 200km 브레베까지 지구력의 범위를 크게 넓혔습니다.",
      ],
      ["재도전", "2025년 문경새재 컷오프를 2026년 154km 완주로 바꿨습니다."],
      [
        "새로운 지형",
        "로드에서 트레일로 옮겨가며 오르막과 지형을 읽는 경험을 쌓았습니다.",
      ],
    ],
  },
};
const LABEL = {
  cycling: "사이클",
  running: "러닝",
  swimming: "수영",
  mobility: "회복·이동",
  walking: "걷기",
  triathlon: "철인3종",
  aquathlon: "아쿠아슬론",
  trail: "트레일",
  finished: "완주",
  dnf: "DNF",
  cutoff: "컷오프",
  "format-changed": "종목 변경",
  participated: "참가",
};
const MEDIA = {
  "2026-samcheok-granfondo": ["assets/images/events/2026-samcheok-granfondo/official-result.jpg"],
  "2026-seoul-200k-brevet": ["assets/images/events/2026-seoul-200k-brevet/brevet-certificate.jpg"],
  "2026-yangsan-triathlon": [
    "assets/images/events/2026-yangsan-triathlon/official-result.jpg",
    "assets/images/events/2026-yangsan-triathlon/swim-strava.jpg",
  ],
  "2026-changwon-triathlon": [
    "assets/images/events/2026-changwon-triathlon/official-result.jpg",
  ],
  "2026-hangang-seoul-half": [
    "assets/images/events/2026-hangang-half-2.jpg",
    "assets/images/events/2026-hangang-half-1.jpg",
  ],
  "2026-daecheongho-full-marathon": [
    "assets/images/events/2026-daecheongho-full-marathon/cover.jpg",
    "assets/images/events/2026-daecheongho-full-marathon/official-result.jpg",
    "assets/images/events/2026-daecheongho-full-marathon/route-summary.jpg",
    "assets/images/events/2026-daecheongho-full-marathon/venue.jpg",
    "assets/images/events/2026-daecheongho-full-marathon/start-area.jpg",
    "assets/images/events/2026-daecheongho-full-marathon/splits.jpg",
    "assets/images/events/2026-daecheongho-full-marathon/pace.jpg",
    "assets/images/events/2026-daecheongho-full-marathon/heart-rate.jpg",
  ],
  "2026-incheon-full-marathon": [
    "assets/images/events/2026-incheon-full-marathon/cover.jpg",
    "assets/images/events/2026-incheon-full-marathon/official-result.jpg",
    "assets/images/events/2026-incheon-full-marathon/route-summary.jpg",
    "assets/images/events/2026-incheon-full-marathon/watch-result.jpg",
    "assets/images/events/2026-incheon-full-marathon/pace-chart.jpg",
    "assets/images/events/2026-incheon-full-marathon/heart-rate-chart.jpg",
    "assets/images/events/2026-incheon-full-marathon/venue-night.jpg",
  ],
};
const JOURNEY_MEDIA = {
  "2025-remember-granfondo": [
    "assets/images/journeys/2025/remember-granfondo-1.jpg",
    "assets/images/journeys/2025/remember-granfondo-2.jpg",
  ],
  "2025-busan-night-walk": [
    "assets/images/journeys/2025/busan-night-walk-1.jpg",
    "assets/images/journeys/2025/busan-night-walk-2.jpg",
  ],
  "2026-camino-frances": [
    "assets/images/journeys/camino/finish.jpg",
    "assets/images/journeys/camino/day-04.jpg",
    "assets/images/journeys/camino/day-05.jpg",
    "assets/images/journeys/camino/day-09.jpg",
    "assets/images/journeys/camino/day-10.jpg",
    "assets/images/journeys/camino/day-01.jpg",
  ],
};
const STRAVA_LINKS = {
  "2025-korea-open-race-10k": "13818863466",
  "2025-goseong-granfondo": "14016193572",
  "2025-nakdong-triathlon": "14370104713",
  "2025-seorak-granfondo": "14505802354",
  "2025-hangang-night-walk-42k": "15323016489",
  "2025-mungyeong-granfondo": "15712008231",
  "2025-chuncheon-10k": "16257180030",
  "2025-mbn-half": "16471098789",
  "2026-hangang-seoul-half": "17168173856",
  "2026-gumi-full-marathon": "17559804794",
  "2026-changwon-triathlon": "18353304428",
  "2026-yangsan-triathlon": "18536799191",
  "2026-lotte-aquathlon": "19275097487",
  "2026-cool-valley-trail": "19370536509",
  "2026-seolbong-triathlon": "19857899795",
  "2026-daegwallyeong-trail": "19956405053",
  "2026-mungyeong-granfondo": "20041405671",
  "2026-bbang-trail-30k": "20138236613",
  "2026-iksan-aquathlon-cutoff": "20235758966",
  "2026-siheung-half": "20454988992",
  "2026-daecheongho-full-marathon": "20616057355",
  "2026-tongyeong-triathlon": "20719968074",
  "2026-incheon-full-marathon": "21078611984",
};
const JOURNEY_STRAVA = {
  "2025-randonneurs-virtual-200k": "13630226993",
  "2025-remember-granfondo": "15486979810",
  "2025-busan-night-walk": "15561209846",
  "2026-camino-frances": "18117169323",
  "2026-seoul-200k-brevet": "18898997887",
  "2026-cheonan-200k-brevet": "20803744632",
};
const KAKAO = "https://story.kakao.com/_F7q479";
const KAKAO_POSTS = {
  "2026-samcheok-granfondo": "https://story.kakao.com/_F7q479/gQ86NqzRLPA",
  "2026-seoul-200k-brevet": "https://story.kakao.com/_F7q479/5TSCRTj8RO9",
  "2026-yangsan-triathlon": "https://story.kakao.com/_F7q479/aBHsNXID4o0",
  "2026-changwon-triathlon": "https://story.kakao.com/_F7q479/AEdVmqWxOO0",
  "2026-gumi-full-marathon": "https://story.kakao.com/_F7q479/KQsGwUHN1Oa",
  "2026-daecheongho-full-marathon": "https://story.kakao.com/_F7q479/H97RJOBnzRa",
  "2026-incheon-full-marathon": "https://story.kakao.com/_F7q479/EVJyv4BzXRA",
};
const AI_ANALYSIS = {
  "2026-samcheok-granfondo": {
    facts: ["공식 기록은 05:41:22.8, 배번호는 1194번입니다.", "Strava 기록은 131.73 km·05:24:00·누적 상승 1,916 m입니다.", "이틀 뒤 후기에는 목·허리 통증과 에너지 고갈, 휴식 필요성이 기록됐습니다."],
    assessment: "이동 평균은 약 24.4 km/h이며 공식 기록과 이동 시간 차이는 약 17분 23초입니다. 1,900m가 넘는 상승량에도 정차를 효율적으로 관리했습니다. 다만 후기에서 통증과 피로 누적이 확인됩니다. 통증 원인은 의료 자료가 없어 훈련 과부하로 단정하지 않습니다.",
    next: ["다음 고난도 대회 전 7일은 훈련량을 낮추고 수면을 우선합니다.", "목·허리 통증이 지속되면 고강도 훈련을 중단하고 상태를 확인합니다.", "90분 단위 보급 섭취량을 기록해 후반 에너지 저하를 비교합니다."],
  },
  "2026-seoul-200k-brevet": {
    facts: ["Strava 기록은 206.21 km·08:22:48·누적 상승 1,812 m입니다.", "이동 시간 기준 평균 속도는 약 24.6 km/h입니다.", "카카오스토리에서 200 km 인증서와 통과 도장이 찍힌 브레베 카드를 확인했습니다."],
    assessment: "200km를 8시간대 이동 시간으로 마친 것은 지속적인 유산소 능력과 자급 운영 능력이 함께 갖춰졌다는 근거입니다. 현재 확보된 수치는 이동 시간뿐이므로 공식 제한 시간 대비 여유는 계산하지 않습니다.",
    next: ["다음 브레베는 각 체크포인트 통과 시간을 함께 보존합니다.", "50 km 단위로 보급과 체감 강도를 기록합니다.", "200K 회복 상태를 확인한 뒤 더 긴 거리로 확장합니다."],
  },
  "2026-yangsan-triathlon": {
    facts: [
      "공식 기록은 총 03:12:59, 수영 00:48:33, 사이클 01:14:00, 러닝 01:02:35입니다.",
      "공식 세 구간 합계는 03:05:08로, 전환 등에 사용된 나머지 시간은 07:51입니다.",
      "Strava 거리는 수영 1.52 km, 사이클 39.44 km, 러닝 9.99 km입니다.",
    ],
    assessment:
      "창원 우천 단축 대회에서 얻은 경험을 2주 만에 표준거리 완주로 확장한 점이 가장 큰 성장입니다. 사이클 39.44 km를 01:14:00에 마친 뒤 10 km 러닝을 01:02:35로 이어가며 세 종목을 안정적으로 연결했습니다. 후기에는 대회 뒤 피로와 통증, 휴식 필요성이 분명히 나타납니다. 다만 종목별 심박·세부 랩과 보급 시점이 없어 후반 감속의 정확한 원인은 추정할 수 없습니다.",
    next: [
      "수영 100 m 랩과 방향 이탈 여부를 기록해 48분대 수영의 개선 지점을 찾습니다.",
      "사이클 이후 러닝 첫 3 km를 통제해 근전환 적응과 후반 페이스 유지 여부를 비교합니다.",
      "대회 다음 주를 회복 주간으로 고정해 후기에서 확인된 누적 피로와 부상 위험을 낮춥니다.",
    ],
  },
  "2026-changwon-triathlon": {
    facts: [
      "공식 완주 기록은 01:49:07이며 배번호는 118번입니다.",
      "Strava에는 수영 1.53 km·40:56, 사이클 16.02 km·32:30, 러닝 4.44 km·23:39가 기록됐습니다.",
      "활동 메모에는 우천으로 사이클과 러닝 구간이 축소됐다고 명시돼 있습니다.",
    ],
    assessment:
      "악천후와 코스 축소라는 변수를 겪으면서도 세 종목과 두 번의 전환을 모두 마친 첫 시즌 실전이라는 점이 핵심 성과입니다. 수영 뒤 T1은 07:23, T2는 04:26으로 계산되어 전환에 약 11분 49초를 사용했습니다. 다만 코스가 축소되어 표준거리 대회의 페이스와 직접 비교할 수 없고, 당시 후기에도 보급이나 종목별 체감 난도는 구체적으로 남아 있지 않아 원인을 단정하지 않습니다.",
    next: [
      "전환 동선을 미리 정해 T1과 T2 합계 시간을 우선 10분 이내로 줄입니다.",
      "다음 표준거리 대회에서는 종목별 랩과 전환 시간을 별도로 기록해 페이스 저하 지점을 확인합니다.",
      "우천 시 장비·타이어·보온 준비 체크리스트를 만들어 돌발 조건에서도 안전을 먼저 확보합니다.",
    ],
  },
  "2026-gumi-full-marathon": {
    facts: [
      "첫 풀코스를 04:51:59에 완주했습니다.",
      "Strava 기록은 42.21 km · 이동 시간 04:50:46 · 누적 상승 145 m입니다.",
      "대회 전날 후기에서 기록 경쟁보다 완주를 첫 번째 목표로 명시했습니다.",
    ],
    assessment:
      "첫 풀코스에서 중도 포기 없이 목표한 완주를 달성한 것이 가장 큰 성과입니다. 대회 전 충분히 쉬며 테이퍼링했고, 장거리 걷기와 철인·사이클 경험을 심리적 기반으로 활용했습니다. 구간별 기록이 확보되지 않아 후반 감속이나 보급 효율의 원인을 수치로 단정할 수는 없습니다.",
    next: [
      "5 km 단위 랩과 보급 시점을 함께 기록해 후반 페이스 변화의 원인을 확인합니다.",
      "첫 완주 기록을 기준선으로 삼고, 다음 풀코스에서는 초반 과속 억제와 30 km 이후 유지에 집중합니다.",
      "대회 뒤 회복 기간까지 일정에 포함해 다음 훈련을 서두르지 않습니다.",
    ],
  },
  "2026-daecheongho-full-marathon": {
    facts: [
      "공식 기록 04:39:37.06, Strava 이동 시간 04:38:24입니다.",
      "Strava 거리는 42.43 km, 누적 상승고도는 446 m입니다.",
      "구미 첫 풀코스보다 약 12분 22초 기록을 단축했습니다.",
    ],
    assessment:
      "상승고도 446 m의 굴곡 있는 코스에서 첫 풀코스보다 기록을 줄인 점은 지구력과 페이스 운영이 개선됐다는 근거입니다. 다만 후기에서 대회 뒤 통증과 긴 회복 시간을 직접 언급했으므로, 기록 향상과 별개로 근육 손상과 회복 부담은 컸던 대회로 판단됩니다. 정확한 통증 원인은 데이터만으로 확정할 수 없습니다.",
    next: [
      "풀코스 뒤 최소 7일은 회복 주간으로 미리 비워 다음 대회 준비에 대한 조급함을 줄입니다.",
      "30 km 이후 구간별 페이스와 심박 변화를 비교해 경련이 시작되는 강도를 파악합니다.",
      "대회 후 통증이 일상 보행에 영향을 주면 훈련 재개보다 상태 확인과 회복을 우선합니다.",
    ],
  },
  "2026-incheon-full-marathon": {
    facts: [
      "공식 기록 04:43:02로 목표 04:30:00 대비 13분 02초 늦었습니다.",
      "Strava 기록은 42.44 km · 이동 시간 04:42:35 · 누적 상승 169 m입니다.",
      "직접 쓴 후기에서 25 km 이후 피로, 30 km 지점 오른쪽 허벅지 뒤 경련과 이후 페이스 저하를 기록했습니다.",
    ],
    assessment:
      "초반 20 km까지는 여유 있게 운영했지만, 30 km 부근 4시간 30분 페이스메이커를 의식해 속도를 올린 직후 경련이 발생한 것이 결정적 변곡점입니다. 독감 회복기, 러닝 훈련 부족, 전날 10 km 대회 참가가 후반 지구력 저하에 영향을 주었을 가능성이 있으나 이는 후기 기반 추정입니다.",
    next: [
      "대회 전 7일은 근육통을 남기는 맨몸운동과 전날 대회를 피하고 회복을 우선합니다.",
      "30 km까지 목표 페이스보다 보수적으로 달리고, 페이스메이커 추격 대신 심박·체감 강도를 기준으로 운영합니다.",
      "추운 날씨용 보온 장비와 경련 대응 보급을 사전에 정하고 장거리 훈련에서 시험합니다.",
    ],
  },
};
const state = {
  year: 2026,
  filter: "all",
  chartSport: "all",
  summaries: {},
  events: {},
  journeys: {},
  routes: {},
};
// 기록표·인증서·Strava 캡처 등 '문서형' 이미지는 대표 사진으로 쓰지 않는다
const DOC_IMAGE = /(result|certificate|strava|splits|pace|heart-rate|route-summary|chart)/;
const isDocImage = (p) => DOC_IMAGE.test(p.split("/").pop());
const coverPhoto = (pics = []) => pics.find((p) => !isDocImage(p));
// 카드 표면에 크게 보여줄 거리 (GPS 기준)
function headlineDistance(e) {
  const s = e.strava || {};
  if (s.distanceKm) return s.distanceKm;
  if (s.segments) return s.segments.reduce((a, x) => a + (x.distanceKm || 0), 0);
  const parts = splitDistances(s);
  return parts.length ? parts.reduce((a, [, d]) => a + d, 0) : null;
}
// 종목별 거리 필드(swim/bike/runDistanceKm)를 [종목, 거리] 목록으로
function splitDistances(s) {
  return [
    ["swimming", s.swimDistanceKm],
    ["cycling", s.bikeDistanceKm],
    ["running", s.runDistanceKm],
  ].filter(([, d]) => d);
}
function recordFace(e) {
  const d = headlineDistance(e),
    s = e.strava || {},
    docs = (MEDIA[e.id] || []).filter(isDocImage).length;
  const parts = s.segments
    ? s.segments.map((x) => [x.sport, x.distanceKm])
    : splitDistances(s);
  const sub = [
    parts.length > 1 ? parts.map(([k, v]) => `${LABEL[k] || k} ${num(v)}`).join(" / ") : "",
    s.verticalFinish || "",
    s.elevationGainM ? `↑ ${num(s.elevationGainM)} m` : "",
  ].filter(Boolean).join(" · ");
  return `<div class="record-face"><span class="record-sport">${LABEL[e.category] || e.category}</span><strong>${d ? `${num(d)}<small>km</small>` : "—"}</strong><div class="record-sub"><span>${sub}</span>${docs ? `<b>기록 사진 ${docs}</b>` : ""}</div></div>`;
}
const $ = (s) => document.querySelector(s),
  num = (v) =>
    new Intl.NumberFormat("ko-KR", { maximumFractionDigits: 1 }).format(v);
function result(e) {
  if (e.official?.time) return e.official.time;
  if (e.official?.result) return e.official.result;
  if (e.strava?.distanceKm) return `${num(e.strava.distanceKm)} km`;
  if (e.strava?.segments)
    return e.strava.segments
      .map((x) => `${LABEL[x.sport] || x.sport} ${x.distanceKm}km`)
      .join(" · ");
  if (e.strava?.verticalFinish) return `${e.strava.verticalFinish} 완주`;
  const parts = splitDistances(e.strava || {});
  if (parts.length)
    return parts.map(([k, v]) => `${LABEL[k] || k} ${num(v)}km`).join(" · ");
  return "기록 검토 중";
}
async function load() {
  for (const y of [2025, 2026]) {
    const [s, e, j] = await Promise.all([
      fetch(`data/${y}/summary.json`).then((r) => r.json()),
      fetch(`data/${y}/events.json`).then((r) => r.json()),
      fetch(`data/${y}/journeys.json`).then((r) => r.json()),
    ]);
    state.summaries[y] = s;
    state.events[y] = e;
    state.journeys[y] = j;
  }
  render();
}
function render() {
  const y = state.year,
    s = state.summaries[y],
    c = COPY[y];
  document
    .querySelectorAll("[data-year-button]")
    .forEach((b) => b.classList.toggle("active", +b.dataset.yearButton === y));
  $("#hero-year").textContent = y;
  $("#hero-summary").textContent = c.summary;
  renderStats(s);
  renderChart(s, state.chartSport);
  renderSports(s);
  renderEvents();
  renderJourneys();
  $("#review-quote").textContent = c.quote;
  $("#review-points").innerHTML = c.points
    .map(
      ([a, b]) =>
        `<article class="review-point"><strong>${a}</strong><p>${b}</p></article>`,
    )
    .join("");
}
function renderStats(s) {
  const rows = [
    ["총 거리", s.distanceKm, "km"],
    ["활동 수", s.activityCount, "회"],
    ["활동한 날", s.activeDays, "일"],
    ["이동 시간", s.movingHours, "시간"],
    ["누적 상승", s.elevationGainM, "m"],
  ];
  $("#stats-grid").innerHTML = rows
    .map(
      ([l, v, u]) =>
        `<article class="stat-card"><span class="label">${l}</span><strong>${num(v)}</strong><small>${u}</small></article>`,
    )
    .join("");
}
function renderChart(s, sport = "all") {
  const sports = Object.keys(s.sports).filter((key) => s.sports[key].activityCount);
  $("#chart-filters").innerHTML = ["all", ...sports]
    .map((key) => `<button class="${sport === key ? "active" : ""}" data-chart-sport="${key}">${key === "all" ? "전체" : LABEL[key] || key}</button>`).join("");
  $("#chart-title").textContent = sport === "all" ? "전체 종목" : `${LABEL[sport] || sport} · ${num(s.sports[sport].distanceKm)} km`;
  const vals = s.months.map((m) => sport === "all" ? m.distanceKm : (m.sports[sport]?.distanceKm || 0)),
    max = Math.max(...vals);
  $("#monthly-chart").innerHTML = s.months
    .map((m, i) => `<div class="month-column"><div class="bar-value">${vals[i] ? num(vals[i]) : ""}</div><div class="month-bars sport-${sport}" title="${num(vals[i])} km" style="height:${max ? Math.max(2, (vals[i] / max) * 100) : 2}%"></div><span>${m.month}월</span></div>`)
    .join("");
  $("#chart-filters").querySelectorAll("button").forEach((button) => button.onclick = () => {
    state.chartSport = button.dataset.chartSport;
    renderChart(s, state.chartSport);
    renderSports(s);
  });
}
function renderSports(s) {
  $("#sport-grid").innerHTML = Object.entries(s.sports)
    .filter(([, v]) => v.activityCount)
    .map(
      ([k, v]) =>
        `<button class="sport-card ${state.chartSport === k ? "active" : ""}" data-sport="${k}"><p>${LABEL[k] || k}<br><small>${v.activityCount} activities · ${num(v.movingHours)} h</small></p><strong>${num(v.distanceKm)} km</strong></button>`,
    )
    .join("");
  $("#sport-grid").querySelectorAll(".sport-card").forEach((card) => card.onclick = () => {
    state.chartSport = card.dataset.sport;
    renderChart(s, state.chartSport);
    renderSports(s);
  });
}
function renderEvents() {
  const events = state.events[state.year],
    cats = ["all", ...new Set(events.map((e) => e.category))];
  $("#event-filters").innerHTML = cats
    .map(
      (c) =>
        `<button class="${state.filter === c ? "active" : ""}" data-filter="${c}">${c === "all" ? "전체" : LABEL[c] || c}</button>`,
    )
    .join("");
  $("#event-filters")
    .querySelectorAll("button")
    .forEach(
      (b) =>
        (b.onclick = () => {
          state.filter = b.dataset.filter;
          renderEvents();
        }),
    );
  const shown = events.filter(
    (e) => state.filter === "all" || e.category === state.filter,
  );
  $("#event-grid").innerHTML = shown
    .map((e) => {
      const photo = coverPhoto(MEDIA[e.id]);
      return `<article class="story-card cat-${e.category}" tabindex="0" data-id="${e.id}" data-status="${e.status}"><div class="story-media ${photo ? "" : "no-photo"}">${photo ? `<img src="${photo}" alt="${e.title} 대표 사진" loading="lazy">` : recordFace(e)}</div><div class="story-body"><div class="story-meta"><span>${e.date.replaceAll("-", ".")}</span><span>${LABEL[e.status] || e.status}</span></div><h3>${e.title}</h3><div class="story-result">${result(e)}</div><span class="story-open">기록 상세 보기 ↗</span></div></article>`;
    })
    .join("");
  $("#event-grid")
    .querySelectorAll(".story-card")
    .forEach((card) => {
      const open = () =>
        showDetail(events.find((e) => e.id === card.dataset.id));
      card.onclick = open;
      card.onkeydown = (x) => {
        if (x.key === "Enter" || x.key === " ") {
          x.preventDefault();
          open();
        }
      };
    });
}
function renderJourneys() {
  // 대표 여정을 맨 앞에, 나머지는 날짜순. 짝이 맞지 않는 마지막 카드는 가로로 넓힌다
  const FEATURED = "2026-camino-frances",
    list = [...state.journeys[state.year]].sort(
      (a, b) =>
        (b.id === FEATURED) - (a.id === FEATURED) ||
        a.startDate.localeCompare(b.startDate),
    ),
    rest = list.filter((j) => j.id !== FEATURED).length,
    lastWide = rest % 2 === 1 ? list[list.length - 1].id : null;
  $("#journey-list").innerHTML = list
    .map((j) => {
      const photos = JOURNEY_MEDIA[j.id] || [],
        s = j.strava || {},
        period =
          j.startDate === j.endDate
            ? j.startDate
            : `${j.startDate} — ${j.endDate}`,
        activity = JOURNEY_STRAVA[j.id];
      return `<article class="journey-card ${photos.length ? "has-media" : ""} ${j.id === FEATURED ? "featured-journey" : ""} ${j.id === lastWide ? "wide-journey" : ""}">${photos.length ? `<div class="journey-media"><img src="${photos[0]}" alt="${j.title} 대표 사진">${photos.length > 1 ? `<span>+${photos.length - 1} PHOTOS</span>` : ""}</div>` : ""}<div class="journey-copy"><span class="date">${period}</span><small>${j.category === "randonneuring" ? "RANDONNEURING" : j.category === "walking" ? "WALKING" : "JOURNEY"}</small><h3>${j.title}</h3><p>${j.review || j.summary || ""}</p><div class="journey-stats">${s.distanceKm ? `<b>${num(s.distanceKm)} km</b>` : ""}${s.elapsedHours ? `<b>${num(s.elapsedHours)} h</b>` : ""}${s.elevationGainM ? `<b>${num(s.elevationGainM)} m↑</b>` : ""}${s.activityCount > 1 ? `<b>${s.activityCount} stages</b>` : ""}</div>${activity ? `<a class="strava-link" href="https://www.strava.com/activities/${activity}" target="_blank" rel="noreferrer">Strava에서 경로와 원본 기록 보기 ↗</a>` : ""}</div></article>`;
    })
    .join("");
}
function metrics(e) {
  const s = e.strava || {},
    items = [];
  if (s.distanceKm) items.push(["거리", `${num(s.distanceKm)} km`]);
  if (s.movingTime) items.push(["이동 시간", s.movingTime]);
  if (s.elevationGainM) items.push(["상승고도", `${num(s.elevationGainM)} m`]);
  if (e.official?.time) items.push(["공식 기록", e.official.time]);
  if (e.official?.milestone) items.push(["이정표", e.official.milestone]);
  // 종목별 개별 필드(swimTime, bikeDistanceKm 등)로 저장된 기록
  const o = e.official || {};
  [
    ["수영 기록", o.swimTime],
    ["전환", o.transitionTime],
    ["사이클 기록", o.bikeTime],
    ["러닝 기록", o.runTime],
    ["수직 러닝", o.verticalRunTime],
  ].forEach(([k, v]) => v && items.push([k, v]));
  splitDistances(s).forEach(([k, v]) =>
    items.push([`${LABEL[k] || k} 거리`, `${num(v)} km`]),
  );
  if (s.verticalFinish) items.push(["수직 완주", s.verticalFinish]);
  // 공식 구간기록이 있으면 종목별로 표시
  if (e.official?.splits)
    items.push(
      ...Object.entries(e.official.splits).map(([sport, time]) => [
        `공식 ${LABEL[sport] || sport}`,
        time,
      ]),
    );
  if (s.segments)
    items.push(
      ...s.segments.map((x) => [
        LABEL[x.sport] || x.sport,
        `${num(x.distanceKm)} km${x.movingTime ? " · " + x.movingTime : ""}`,
      ]),
    );
  return items;
}
function showDetail(e) {
  const pics = MEDIA[e.id] || [],
    cover = coverPhoto(pics),
    hero = cover
      ? `has-photo" style="background-image:linear-gradient(0deg,rgba(0,0,0,.68),rgba(0,0,0,.08)),url('${cover}')`
      : `cat-${e.category}`,
    activity = STRAVA_LINKS[e.id],
    storyUrl = KAKAO_POSTS[e.id] || KAKAO,
    analysis = AI_ANALYSIS[e.id];
  const analysisHtml = analysis
    ? `<section><h3>AI REVIEW / 기록 분석</h3><div class="analysis-panel"><h4>데이터로 확인한 사실</h4><ul>${analysis.facts.map((x) => `<li>${x}</li>`).join("")}</ul><h4>평가와 해석</h4><p>${analysis.assessment}</p><small class="analysis-note">※ 수치로 확인할 수 없는 원인은 직접 쓴 후기를 토대로 추정했으며 확정적 사실이 아닙니다.</small></div></section><aside><h3>NEXT / 다음 도전</h3><div class="analysis-panel"><ul>${analysis.next.map((x) => `<li>${x}</li>`).join("")}</ul></div></aside>`
    : "";
  $("#event-detail").innerHTML = `<div class="detail-hero ${hero}"><div class="detail-hero-copy"><div class="detail-tags"><span>${e.date}</span><span>${LABEL[e.category] || e.category}</span><span>${LABEL[e.status] || e.status}</span></div><h2 id="detail-title">${e.title}</h2><p>${result(e)}${pics.length ? ` · ${pics.length} PHOTOS` : ""}</p></div></div><div class="detail-quick">${metrics(e).slice(0,4).map(([a,b])=>`<div><span>${a}</span><strong>${b}</strong></div>`).join("")}</div><div class="detail-grid"><section class="route-section"><h3>ROUTE / STRAVA</h3><div class="source-route"><div class="route-mark">S</div><strong>지도와 고도는 Strava 원본에서 확인하세요.</strong><p>사이트에서 경로를 다시 그리지 않고 원본 활동으로 바로 연결합니다.</p>${activity ? `<a href="https://www.strava.com/activities/${activity}" target="_blank" rel="noreferrer">지도·구간·랩 기록 열기 ↗</a>` : "<span>원본 활동 연결 준비 중</span>"}</div></section><aside><h3>RESULT / 전체 기록</h3><div class="metric-list">${metrics(e).map(([a, b]) => `<div><span>${a}</span><strong>${b}</strong></div>`).join("")}</div></aside><section class="story-section"><h3>MY STORY / 직접 쓴 후기</h3><p class="detail-review">${e.review}</p><a class="source-link" href="${storyUrl}" target="_blank" rel="noreferrer">카카오스토리 원문 읽기 ↗</a></section><aside class="sources-card"><h3>SOURCES / 검토 출처</h3><p>${e.sources.join(" · ")}</p><p>사진과 글은 원문을 확인해 저장했으며, AI 분석과 직접 쓴 후기를 구분했습니다.</p></aside>${analysisHtml}</div>${pics.length ? `<section class="gallery-section"><div class="gallery-head"><span>PHOTO ESSAY</span><h3>그날의 장면</h3><b>${pics.length} images</b></div><div class="gallery ${pics.length === 1 ? "single" : ""}">${pics.map((p, i) => `<figure class="${isDocImage(p) ? "doc" : ""}"><img src="${p}" alt="${e.title} 사진 ${i + 1}" loading="lazy"><figcaption>${String(i + 1).padStart(2,"0")} / ${String(pics.length).padStart(2,"0")}</figcaption></figure>`).join("")}</div></section>` : ""}`;
  $("#event-dialog").showModal();
  document.body.style.overflow = "hidden";
}
document.querySelectorAll("[data-year-button]").forEach(
  (b) =>
    (b.onclick = () => {
      state.year = +b.dataset.yearButton;
      state.filter = "all";
      render();
    }),
);
$(".dialog-close").onclick = () => $("#event-dialog").close();
$("#event-dialog").addEventListener(
  "close",
  () => (document.body.style.overflow = ""),
);
$("#event-dialog").addEventListener("click", (e) => {
  if (e.target === $("#event-dialog")) $("#event-dialog").close();
});
load().catch((err) => {
  console.error(err);
  $("#hero-summary").textContent = "기록 데이터를 불러오지 못했습니다.";
});
