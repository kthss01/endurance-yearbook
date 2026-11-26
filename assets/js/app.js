const YEAR_COPY = {
  2025: {
    summary: "사이클을 중심으로 수영과 러닝, 철인3종까지 활동의 폭을 넓힌 해. 컷오프와 계획 변경도 다음 도전의 일부로 남겼습니다.",
    highlight: "설악 205km · 첫 철인 시즌 · 큐슈 자전거 여행",
    quote: "2025년은 잘하는 한 종목보다, 낯선 종목의 출발선에 계속 서 본 해였습니다.",
    points: [
      ["종목 확장", "그란폰도 중심의 시즌에 아쿠아슬론과 철인3종이 본격적으로 더해졌습니다."],
      ["실패의 기록", "문경새재 컷오프를 숨기지 않아 2026년 재도전의 의미가 선명해집니다."],
      ["여행의 변화", "큐슈에서는 자전거 파손과 철도 이동으로 계획을 바꾸며 여정을 이어갔습니다."]
    ]
  },
  2026: {
    summary: "첫 풀마라톤에서 산티아고, 표준거리 철인3종, 트레일 30km와 200km급 연속 라이딩을 거쳐 세 번째 풀코스로 마무리한 해.",
    highlight: "11,688km · 산티아고 13일 · 풀코스 3회",
    quote: "2026년은 처음 해보는 데서 멈추지 않고, 더 멀리 가고 다시 도전해 끝을 본 해였습니다.",
    points: [
      ["긴 호흡", "산티아고 프랑스길 823.49km를 13일간 이어가며 한 번의 활동보다 큰 여정을 완성했습니다."],
      ["재도전", "2025년 문경새재 컷오프를 2026년 154km 완주로 바꿨습니다."],
      ["기록의 정직함", "익산 수영 컷오프와 안동 DNF도 완주 기록과 같은 무게로 남겼습니다."]
    ]
  }
};

const LABELS = {
  cycling: "사이클", running: "러닝", swimming: "수영", mobility: "요가·운동", walking: "걷기·등산",
  triathlon: "철인3종", aquathlon: "아쿠아슬론", trail: "트레일", finished: "완주", dnf: "DNF",
  cutoff: "컷오프", "format-changed": "종목 변경", participated: "참가"
};

const state = { year: 2026, summaries: {}, events: {}, journeys: {}, filter: "all" };

const formatNumber = value => new Intl.NumberFormat("ko-KR", { maximumFractionDigits: 1 }).format(value);
const durationOrDistance = event => {
  if (event.official?.time) return event.official.time;
  if (event.official?.result) return event.official.result;
  if (event.strava?.distanceKm) return `${formatNumber(event.strava.distanceKm)} km`;
  if (event.strava?.bikeDistanceKm) return `${formatNumber(event.strava.bikeDistanceKm)} km bike`;
  if (event.strava?.segments) return event.strava.segments.map(x => `${LABELS[x.sport] || x.sport} ${x.distanceKm}km`).join(" · ");
  return "기록 검토 중";
};

async function loadData() {
  for (const year of [2025, 2026]) {
    const [summary, events, journeys] = await Promise.all([
      fetch(`data/${year}/summary.json`).then(r => r.json()),
      fetch(`data/${year}/events.json`).then(r => r.json()),
      fetch(`data/${year}/journeys.json`).then(r => r.json())
    ]);
    state.summaries[year] = summary;
    state.events[year] = events;
    state.journeys[year] = journeys;
  }
  render();
}

function render() {
  const year = state.year;
  const summary = state.summaries[year];
  const copy = YEAR_COPY[year];
  document.querySelectorAll("[data-year-button]").forEach(button => button.classList.toggle("is-active", Number(button.dataset.yearButton) === year));
  document.getElementById("hero-eyebrow").textContent = `${year} YEARBOOK`;
  document.getElementById("hero-year").textContent = year;
  document.getElementById("hero-summary").textContent = copy.summary;
  document.getElementById("hero-highlight").textContent = copy.highlight;
  renderStats(summary);
  renderMonths(summary);
  renderSports(summary);
  renderJourneys();
  renderFilters();
  renderEvents();
  renderReview(copy);
  renderComparison();
}

function renderStats(summary) {
  const cards = [
    ["총 이동거리", formatNumber(summary.distanceKm), "km", `${summary.activeDays}일 동안 쌓은 거리`],
    ["이동시간", formatNumber(summary.movingHours), "시간", "정지시간을 제외한 Strava 이동시간"],
    ["누적 상승", formatNumber(summary.elevationGainM), "m", "모든 활동의 상승고도 합계"],
    ["활동", formatNumber(summary.activityCount), "회", `평균 월 ${formatNumber(summary.activityCount / 12)}회`]
  ];
  document.getElementById("stats-grid").innerHTML = cards.map(([label, value, unit, note]) => `
    <article class="stat-card"><span class="label">${label}</span><strong>${value}<small>${unit}</small></strong><small>${note}</small></article>`).join("");
}

function renderMonths(summary) {
  const max = Math.max(...summary.months.map(month => month.distanceKm));
  document.getElementById("monthly-chart").innerHTML = summary.months.map(month => {
    const totalHeight = max ? (month.distanceKm / max) * 245 : 0;
    const cycling = month.sports.cycling.distanceKm || 0;
    const running = month.sports.running.distanceKm || 0;
    const swimming = month.sports.swimming.distanceKm || 0;
    const sportTotal = cycling + running + swimming || 1;
    return `<div class="month-column" title="${month.month}월 ${month.distanceKm}km, 활동 ${month.activityCount}회">
      <div class="month-bars" style="height:${Math.max(2, totalHeight)}px">
        <i class="cycling" style="height:${cycling / sportTotal * 100}%"></i>
        <i class="running" style="height:${running / sportTotal * 100}%"></i>
        <i class="swimming" style="height:${swimming / sportTotal * 100}%"></i>
      </div><span>${month.month}월</span></div>`;
  }).join("");
}

function renderSports(summary) {
  const keys = ["cycling", "running", "swimming", "mobility"];
  document.getElementById("sport-grid").innerHTML = keys.map(key => {
    const sport = summary.sports[key] || { activityCount: 0, distanceKm: 0, movingHours: 0 };
    const value = key === "mobility" ? `${formatNumber(sport.movingHours)}시간` : `${formatNumber(sport.distanceKm)}km`;
    return `<article class="sport-card ${key}"><p>${LABELS[key]}</p><strong>${value}</strong><p>${sport.activityCount}회 · ${formatNumber(sport.movingHours)}시간</p></article>`;
  }).join("");
}

function renderJourneys() {
  const journeys = state.journeys[state.year];
  document.getElementById("journey-list").innerHTML = journeys.map(journey => `
    <article class="journey-card">
      <div><span class="date">${journey.startDate} — ${journey.endDate}</span><h3>${journey.title}</h3></div>
      <p>${journey.review}</p>
      <div class="journey-metric"><strong>${formatNumber(journey.strava.distanceKm)} km</strong><span>${journey.strava.activityCount}개 활동 · 상승 ${formatNumber(journey.strava.elevationGainM)}m</span></div>
    </article>`).join("");
}

function renderFilters() {
  const categories = [...new Set(state.events[state.year].map(event => event.category))];
  const options = ["all", ...categories];
  document.getElementById("event-filters").innerHTML = options.map(category => `<button type="button" data-filter="${category}" class="${state.filter === category ? "is-active" : ""}">${category === "all" ? "전체" : LABELS[category] || category}</button>`).join("");
  document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => { state.filter = button.dataset.filter; renderFilters(); renderEvents(); }));
}

function renderEvents() {
  const events = state.events[state.year].filter(event => state.filter === "all" || event.category === state.filter);
  document.getElementById("event-grid").innerHTML = events.map(event => `
    <article class="event-card" data-category="${event.category}">
      <div class="event-image">IMAGE CANDIDATE<br>${event.id}</div>
      <div class="event-content">
        <div class="event-meta"><span>${event.date} · ${LABELS[event.category] || event.category}</span><span class="status ${event.status}">${LABELS[event.status] || event.status}</span></div>
        <h3>${event.title}</h3>
        <div class="event-result">${durationOrDistance(event)}</div>
        <p class="event-review">${event.review}</p>
        <div class="source-tags">${event.sources.map(source => `<span>${source}</span>`).join("")}</div>
      </div>
    </article>`).join("");
}

function renderReview(copy) {
  document.getElementById("review-quote").textContent = copy.quote;
  document.getElementById("review-points").innerHTML = copy.points.map(([title, body]) => `<article class="review-point"><strong>${title}</strong><p>${body}</p></article>`).join("");
}

function renderComparison() {
  const a = state.summaries[2025];
  const b = state.summaries[2026];
  const metrics = [
    ["총거리", a.distanceKm, b.distanceKm, "km"],
    ["러닝", a.sports.running.distanceKm, b.sports.running.distanceKm, "km"],
    ["수영", a.sports.swimming.distanceKm, b.sports.swimming.distanceKm, "km"],
    ["활동일", a.activeDays, b.activeDays, "일"],
    ["상승고도", a.elevationGainM, b.elevationGainM, "m"],
    ["이동시간", a.movingHours, b.movingHours, "시간"]
  ];
  document.getElementById("comparison-grid").innerHTML = metrics.map(([label, v25, v26, unit]) => {
    const max = Math.max(v25, v26);
    return `<article class="comparison-card"><h3>${label}</h3>
      <div class="compare-row"><span>2025</span><div class="compare-track"><i style="width:${v25 / max * 100}%"></i></div><strong>${formatNumber(v25)}${unit}</strong></div>
      <div class="compare-row"><span>2026</span><div class="compare-track"><i style="width:${v26 / max * 100}%"></i></div><strong>${formatNumber(v26)}${unit}</strong></div>
    </article>`;
  }).join("");
}

document.querySelectorAll("[data-year-button]").forEach(button => button.addEventListener("click", () => { state.year = Number(button.dataset.yearButton); state.filter = "all"; render(); }));

loadData().catch(error => {
  console.error(error);
  document.getElementById("hero-summary").textContent = "데이터를 불러오지 못했습니다. 로컬 웹 서버에서 열어주세요.";
});

