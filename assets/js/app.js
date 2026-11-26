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
  "2026-gumi-full-marathon": "https://story.kakao.com/_F7q479/KQsGwUHN1Oa",
  "2026-daecheongho-full-marathon": "https://story.kakao.com/_F7q479/H97RJOBnzRa",
  "2026-incheon-full-marathon": "https://story.kakao.com/_F7q479/EVJyv4BzXRA",
};
const AI_ANALYSIS = {
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
  summaries: {},
  events: {},
  journeys: {},
  routes: {},
};
const $ = (s) => document.querySelector(s),
  num = (v) =>
    new Intl.NumberFormat("ko-KR", { maximumFractionDigits: 1 }).format(v);
function result(e) {
  if (e.official?.time) return e.official.time;
  if (e.official?.result) return e.official.result;
  if (e.strava?.distanceKm) return `${num(e.strava.distanceKm)} km`;
  if (e.strava?.bikeDistanceKm)
    return `${num(e.strava.bikeDistanceKm)} km bike`;
  if (e.strava?.segments)
    return e.strava.segments
      .map((x) => `${LABEL[x.sport] || x.sport} ${x.distanceKm}km`)
      .join(" · ");
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
  renderChart(s);
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
function renderChart(s) {
  const vals = s.months.map((m) => m.distanceKm),
    max = Math.max(...vals);
  $("#monthly-chart").innerHTML = s.months
    .map(
      (m) =>
        `<div class="month-column"><div class="month-bars" title="${num(m.distanceKm)} km" style="height:${Math.max(2, (m.distanceKm / max) * 100)}%"></div><span>${m.month}월</span></div>`,
    )
    .join("");
}
function renderSports(s) {
  $("#sport-grid").innerHTML = Object.entries(s.sports)
    .filter(([, v]) => v.activityCount)
    .map(
      ([k, v]) =>
        `<article class="sport-card"><p>${LABEL[k] || k}<br><small>${v.activityCount} activities</small></p><strong>${num(v.distanceKm)} km</strong></article>`,
    )
    .join("");
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
      const photo = MEDIA[e.id]?.[0];
      return `<article class="story-card" tabindex="0" data-id="${e.id}"><div class="story-media ${photo ? "" : "no-photo"}" data-category="${LABEL[e.category] || e.category}">${photo ? `<img src="${photo}" alt="${e.title} 대표 사진">` : ""}</div><div class="story-body"><div class="story-meta"><span>${e.date.replaceAll("-", ".")}</span><span>${LABEL[e.status] || e.status}</span></div><h3>${e.title}</h3><div class="story-result">${result(e)}</div><span class="story-open">기록 상세 보기 ↗</span></div></article>`;
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
  const list = state.journeys[state.year];
  $("#journey-list").innerHTML = list
    .map((j) => {
      const photos = JOURNEY_MEDIA[j.id] || [],
        s = j.strava || {},
        period =
          j.startDate === j.endDate
            ? j.startDate
            : `${j.startDate} — ${j.endDate}`,
        activity = JOURNEY_STRAVA[j.id];
      return `<article class="journey-card ${photos.length ? "has-media" : ""} ${j.id === "2026-camino-frances" ? "featured-journey" : ""}">${photos.length ? `<div class="journey-media"><img src="${photos[0]}" alt="${j.title} 대표 사진">${photos.length > 1 ? `<span>+${photos.length - 1} PHOTOS</span>` : ""}</div>` : ""}<div class="journey-copy"><span class="date">${period}</span><small>${j.category === "randonneuring" ? "RANDONNEURING" : j.category === "walking" ? "WALKING" : "JOURNEY"}</small><h3>${j.title}</h3><p>${j.review || j.summary || ""}</p><div class="journey-stats">${s.distanceKm ? `<b>${num(s.distanceKm)} km</b>` : ""}${s.elapsedHours ? `<b>${num(s.elapsedHours)} h</b>` : ""}${s.elevationGainM ? `<b>${num(s.elevationGainM)} m↑</b>` : ""}${s.activityCount > 1 ? `<b>${s.activityCount} stages</b>` : ""}</div>${activity ? `<a class="strava-link" href="https://www.strava.com/activities/${activity}" target="_blank" rel="noreferrer">Strava에서 경로와 원본 기록 보기 ↗</a>` : ""}</div></article>`;
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
    hero = pics[0]
      ? `has-photo" style="background-image:linear-gradient(0deg,rgba(0,0,0,.68),rgba(0,0,0,.08)),url('${pics[0]}')`
      : "",
    activity = STRAVA_LINKS[e.id],
    storyUrl = KAKAO_POSTS[e.id] || KAKAO,
    analysis = AI_ANALYSIS[e.id];
  $("#event-detail").innerHTML =
    `<div class="detail-hero ${hero}"><div><span>${e.date} · ${LABEL[e.category] || e.category} · ${LABEL[e.status] || e.status}</span><h2 id="detail-title">${e.title}</h2></div></div><div class="detail-grid"><section><h3>ROUTE / Strava 원본 경로</h3><div class="source-route"><strong>경로는 다시 그리지 않고 원본 활동에 직접 연결합니다.</strong><p>Strava에서 지도, 구간, 고도와 상세 기록을 확인할 수 있습니다.</p>${activity ? `<a href="https://www.strava.com/activities/${activity}" target="_blank" rel="noreferrer">Strava 활동 열기 ↗</a>` : "<span>원본 활동 연결 준비 중</span>"}</div></section><aside><h3>RESULT / 기록</h3><div class="metric-list">${metrics(
      e,
    )
      .map(([a, b]) => `<div><span>${a}</span><strong>${b}</strong></div>`)
      .join(
        "",
      )}</div><a class="source-link" href="${KAKAO}" target="_blank" rel="noreferrer">카카오스토리 원문 찾기 ↗</a></aside><section><h3>REVIEW / 후기</h3><p class="detail-review">${e.review}</p></section><aside><h3>SOURCES / 검토 출처</h3><p>${e.sources.join(" · ")}</p><p>카카오스토리 사진은 원본을 저장소에 보관하고 게시물 주소를 함께 연결합니다.</p></aside></div>${pics.length ? `<div class="gallery">${pics.map((p, i) => `<img src="${p}" alt="${e.title} 사진 ${i + 1}">`).join("")}</div>` : ""}`;
  const analysisHtml = analysis
    ? `<section><h3>AI REVIEW / 기록 분석</h3><div class="analysis-panel"><h4>데이터로 확인한 사실</h4><ul>${analysis.facts.map((x) => `<li>${x}</li>`).join("")}</ul><h4>평가와 해석</h4><p>${analysis.assessment}</p><small class="analysis-note">※ 수치로 확인할 수 없는 원인은 직접 쓴 후기를 토대로 추정했으며 확정적 사실이 아닙니다.</small></div></section><aside><h3>NEXT / 다음 도전</h3><div class="analysis-panel"><ul>${analysis.next.map((x) => `<li>${x}</li>`).join("")}</ul></div></aside>`
    : "";
  $("#event-detail").innerHTML = `<div class="detail-hero ${hero}"><div><span>${e.date} · ${LABEL[e.category] || e.category} · ${LABEL[e.status] || e.status}</span><h2 id="detail-title">${e.title}</h2></div></div><div class="detail-grid"><section><h3>ROUTE / Strava 원본 경로</h3><div class="source-route"><strong>경로는 다시 그리지 않고 원본 활동과 캡처로 보여줍니다.</strong><p>아래 사진과 Strava 원본에서 지도, 구간, 고도와 상세 기록을 확인할 수 있습니다.</p>${activity ? `<a href="https://www.strava.com/activities/${activity}" target="_blank" rel="noreferrer">Strava 활동 열기 ↗</a>` : "<span>원본 활동 연결 준비 중</span>"}</div></section><aside><h3>RESULT / 기록</h3><div class="metric-list">${metrics(e).map(([a, b]) => `<div><span>${a}</span><strong>${b}</strong></div>`).join("")}</div><a class="source-link" href="${storyUrl}" target="_blank" rel="noreferrer">카카오스토리 후기 원문 ↗</a></aside><section><h3>MY STORY / 직접 쓴 후기</h3><p class="detail-review">${e.review}</p><a class="source-link" href="${storyUrl}" target="_blank" rel="noreferrer">전체 후기 읽기 ↗</a></section><aside><h3>SOURCES / 검토 출처</h3><p>${e.sources.join(" · ")}</p><p>사진과 글은 카카오스토리 게시물에서 확인해 저장소에 첨부했으며 원문 주소도 함께 보존합니다.</p></aside>${analysisHtml}</div>${pics.length ? `<div class="gallery">${pics.map((p, i) => `<img src="${p}" alt="${e.title} 사진 ${i + 1}" loading="lazy">`).join("")}</div>` : ""}`;
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
