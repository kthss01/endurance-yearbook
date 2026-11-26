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
  "2025-mbn-half": [
    "assets/images/events/2025-mbn-half/cover.jpg",
    "assets/images/events/2025-mbn-half/official-certificate.jpg",
    "assets/images/events/2025-mbn-half/result-capture-01.jpg",
    "assets/images/events/2025-mbn-half/result-capture-02.jpg",
    "assets/images/events/2025-mbn-half/result-capture-03.jpg",
    "assets/images/events/2025-mbn-half/gallery-04.jpg",
  ],
  "2025-chuncheon-10k": [
    "assets/images/events/2025-chuncheon-10k/official-result.jpg",
    "assets/images/events/2025-chuncheon-10k/result-capture-01.jpg",
    "assets/images/events/2025-chuncheon-10k/result-capture-02.jpg",
    "assets/images/events/2025-chuncheon-10k/result-capture-03.jpg",
    "assets/images/events/2025-chuncheon-10k/result-capture-04.jpg",
  ],
  "2025-yeosu-granfondo": [
    "assets/images/events/2025-yeosu-granfondo/cover.jpg",
    "assets/images/events/2025-yeosu-granfondo/official-certificate.jpg",
    "assets/images/events/2025-yeosu-granfondo/result-capture-01.jpg",
    "assets/images/events/2025-yeosu-granfondo/result-capture-02.jpg",
    "assets/images/events/2025-yeosu-granfondo/result-capture-03.jpg",
    "assets/images/events/2025-yeosu-granfondo/gallery-05.jpg",
    "assets/images/events/2025-yeosu-granfondo/gallery-06.jpg",
    "assets/images/events/2025-yeosu-granfondo/gallery-07.jpg",
    "assets/images/events/2025-yeosu-granfondo/gallery-08.jpg",
    "assets/images/events/2025-yeosu-granfondo/gallery-09.jpg",
  ],
  "2025-goryeong-duathlon": [
    "assets/images/events/2025-goryeong-duathlon/cover.jpg",
    "assets/images/events/2025-goryeong-duathlon/official-certificate.jpg",
    "assets/images/events/2025-goryeong-duathlon/result-capture-01.jpg",
    "assets/images/events/2025-goryeong-duathlon/result-capture-02.jpg",
    "assets/images/events/2025-goryeong-duathlon/result-capture-03.jpg",
    "assets/images/events/2025-goryeong-duathlon/gallery-05.jpg",
    "assets/images/events/2025-goryeong-duathlon/gallery-06.jpg",
    "assets/images/events/2025-goryeong-duathlon/gallery-07.jpg",
    "assets/images/events/2025-goryeong-duathlon/gallery-08.jpg",
    "assets/images/events/2025-goryeong-duathlon/gallery-09.jpg",
    "assets/images/events/2025-goryeong-duathlon/gallery-10.jpg",
    "assets/images/events/2025-goryeong-duathlon/gallery-11.jpg",
    "assets/images/events/2025-goryeong-duathlon/gallery-12.jpg",
    "assets/images/events/2025-goryeong-duathlon/gallery-13.jpg",
    "assets/images/events/2025-goryeong-duathlon/gallery-14.jpg",
    "assets/images/events/2025-goryeong-duathlon/gallery-15.jpg",
  ],
  "2025-marvel-run-half": [
    "assets/images/events/2025-marvel-run-half/cover.jpg",
    "assets/images/events/2025-marvel-run-half/official-result.jpg",
    "assets/images/events/2025-marvel-run-half/result-capture-01.jpg",
    "assets/images/events/2025-marvel-run-half/result-capture-02.jpg",
    "assets/images/events/2025-marvel-run-half/result-capture-03.jpg",
  ],
  "2025-mungyeong-granfondo": [
    "assets/images/events/2025-mungyeong-granfondo/cover.jpg",
    "assets/images/events/2025-mungyeong-granfondo/result-capture-01.jpg",
    "assets/images/events/2025-mungyeong-granfondo/result-capture-02.jpg",
    "assets/images/events/2025-mungyeong-granfondo/result-capture-03.jpg",
    "assets/images/events/2025-mungyeong-granfondo/gallery-04.jpg",
    "assets/images/events/2025-mungyeong-granfondo/gallery-05.jpg",
    "assets/images/events/2025-mungyeong-granfondo/gallery-06.jpg",
    "assets/images/events/2025-mungyeong-granfondo/result-capture-04.jpg",
    "assets/images/events/2025-mungyeong-granfondo/result-capture-05.jpg",
  ],
  "2025-hangang-night-walk-42k": [
    "assets/images/events/2025-hangang-night-walk-42k/cover.jpg",
    "assets/images/events/2025-hangang-night-walk-42k/gallery-01.jpg",
    "assets/images/events/2025-hangang-night-walk-42k/gallery-02.jpg",
    "assets/images/events/2025-hangang-night-walk-42k/result-capture-01.jpg",
    "assets/images/events/2025-hangang-night-walk-42k/gallery-04.jpg",
    "assets/images/events/2025-hangang-night-walk-42k/gallery-05.jpg",
  ],
  "2025-iksan-aquathlon-standard": [
    "assets/images/events/2025-iksan-aquathlon-standard/cover.jpg",
    "assets/images/events/2025-iksan-aquathlon-standard/official-certificate.jpg",
    "assets/images/events/2025-iksan-aquathlon-standard/result-capture-01.jpg",
    "assets/images/events/2025-iksan-aquathlon-standard/result-capture-02.jpg",
    "assets/images/events/2025-iksan-aquathlon-standard/gallery-04.jpg",
    "assets/images/events/2025-iksan-aquathlon-standard/result-capture-03.jpg",
  ],
  "2025-hangang-slow-triathlon": [
    "assets/images/events/2025-hangang-slow-triathlon/cover.jpg",
    "assets/images/events/2025-hangang-slow-triathlon/gallery-01.jpg",
    "assets/images/events/2025-hangang-slow-triathlon/gallery-02.jpg",
    "assets/images/events/2025-hangang-slow-triathlon/gallery-03.jpg",
    "assets/images/events/2025-hangang-slow-triathlon/gallery-04.jpg",
    "assets/images/events/2025-hangang-slow-triathlon/result-capture-01.jpg",
    "assets/images/events/2025-hangang-slow-triathlon/result-capture-02.jpg",
    "assets/images/events/2025-hangang-slow-triathlon/result-capture-03.jpg",
  ],
  "2025-seorak-granfondo": [
    "assets/images/events/2025-seorak-granfondo/cover.jpg",
    "assets/images/events/2025-seorak-granfondo/result-capture-01.jpg",
    "assets/images/events/2025-seorak-granfondo/result-capture-02.jpg",
    "assets/images/events/2025-seorak-granfondo/result-capture-03.jpg",
    "assets/images/events/2025-seorak-granfondo/result-capture-04.jpg",
    "assets/images/events/2025-seorak-granfondo/gallery-05.jpg",
    "assets/images/events/2025-seorak-granfondo/gallery-06.jpg",
    "assets/images/events/2025-seorak-granfondo/gallery-07.jpg",
    "assets/images/events/2025-seorak-granfondo/gallery-08.jpg",
    "assets/images/events/2025-seorak-granfondo/gallery-09.jpg",
  ],
  "2025-nakdong-triathlon": [
    "assets/images/events/2025-nakdong-triathlon/cover.jpg",
    "assets/images/events/2025-nakdong-triathlon/official-certificate.jpg",
    "assets/images/events/2025-nakdong-triathlon/gallery-01.jpg",
    "assets/images/events/2025-nakdong-triathlon/gallery-02.jpg",
    "assets/images/events/2025-nakdong-triathlon/gallery-03.jpg",
    "assets/images/events/2025-nakdong-triathlon/result-capture-04.jpg",
    "assets/images/events/2025-nakdong-triathlon/result-capture-05.jpg",
    "assets/images/events/2025-nakdong-triathlon/result-capture-06.jpg",
  ],
  "2025-goseong-granfondo": [
    "assets/images/events/2025-goseong-granfondo/cover.jpg",
    "assets/images/events/2025-goseong-granfondo/result-capture-01.jpg",
    "assets/images/events/2025-goseong-granfondo/result-capture-02.jpg",
    "assets/images/events/2025-goseong-granfondo/result-capture-03.jpg",
    "assets/images/events/2025-goseong-granfondo/gallery-04.jpg",
    "assets/images/events/2025-goseong-granfondo/gallery-05.jpg",
    "assets/images/events/2025-goseong-granfondo/gallery-06.jpg",
  ],
  "2025-korea-open-race-10k": [
    "assets/images/events/2025-korea-open-race-10k/official-certificate.jpg",
    "assets/images/events/2025-korea-open-race-10k/result-capture-01.jpg",
  ],
  "2026-tongyeong-triathlon": [
    "assets/images/events/2026-tongyeong-triathlon/cover.jpg",
    "assets/images/events/2026-tongyeong-triathlon/official-certificate.jpg",
    "assets/images/events/2026-tongyeong-triathlon/official-result.jpg",
    "assets/images/events/2026-tongyeong-triathlon/official-ranking.jpg",
    "assets/images/events/2026-tongyeong-triathlon/swim-strava.jpg",
    "assets/images/events/2026-tongyeong-triathlon/bike-strava.jpg",
    "assets/images/events/2026-tongyeong-triathlon/run-strava.jpg",
    "assets/images/events/2026-tongyeong-triathlon/venue.jpg",
    "assets/images/events/2026-tongyeong-triathlon/gallery-01.jpg",
    "assets/images/events/2026-tongyeong-triathlon/result-capture-01.jpg",
    "assets/images/events/2026-tongyeong-triathlon/result-capture-02.jpg",
    "assets/images/events/2026-tongyeong-triathlon/result-capture-03.jpg",
    "assets/images/events/2026-tongyeong-triathlon/result-capture-04.jpg",
    "assets/images/events/2026-tongyeong-triathlon/result-capture-05.jpg",
    "assets/images/events/2026-tongyeong-triathlon/result-capture-06.jpg",
    "assets/images/events/2026-tongyeong-triathlon/result-capture-07.jpg",
    "assets/images/events/2026-tongyeong-triathlon/result-capture-08.jpg",
    "assets/images/events/2026-tongyeong-triathlon/result-capture-09.jpg",
    "assets/images/events/2026-tongyeong-triathlon/result-capture-10.jpg",
    "assets/images/events/2026-tongyeong-triathlon/result-capture-11.jpg",
    "assets/images/events/2026-tongyeong-triathlon/result-capture-12.jpg",
    "assets/images/events/2026-tongyeong-triathlon/result-capture-13.jpg",
  ],
  "2026-siheung-half": [
    "assets/images/events/2026-siheung-half/cover.jpg",
    "assets/images/events/2026-siheung-half/official-certificate.jpg",
    "assets/images/events/2026-siheung-half/route-summary.jpg",
    "assets/images/events/2026-siheung-half/splits.jpg",
    "assets/images/events/2026-siheung-half/venue.jpg",
    "assets/images/events/2026-siheung-half/gallery-01.jpg",
    "assets/images/events/2026-siheung-half/gallery-02.jpg",
    "assets/images/events/2026-siheung-half/result-capture-01.jpg",
    "assets/images/events/2026-siheung-half/result-capture-02.jpg",
    "assets/images/events/2026-siheung-half/result-capture-03.jpg",
    "assets/images/events/2026-siheung-half/result-capture-04.jpg",
  ],
  "2026-iksan-aquathlon-cutoff": [
    "assets/images/events/2026-iksan-aquathlon-cutoff/cover.jpg",
    "assets/images/events/2026-iksan-aquathlon-cutoff/swim-strava.jpg",
    "assets/images/events/2026-iksan-aquathlon-cutoff/run-strava.jpg",
    "assets/images/events/2026-iksan-aquathlon-cutoff/venue.jpg",
    "assets/images/events/2026-iksan-aquathlon-cutoff/gallery-01.jpg",
    "assets/images/events/2026-iksan-aquathlon-cutoff/gallery-02.jpg",
    "assets/images/events/2026-iksan-aquathlon-cutoff/gallery-03.jpg",
    "assets/images/events/2026-iksan-aquathlon-cutoff/gallery-04.jpg",
    "assets/images/events/2026-iksan-aquathlon-cutoff/result-capture-01.jpg",
    "assets/images/events/2026-iksan-aquathlon-cutoff/result-capture-02.jpg",
    "assets/images/events/2026-iksan-aquathlon-cutoff/result-capture-03.jpg",
    "assets/images/events/2026-iksan-aquathlon-cutoff/result-capture-04.jpg",
    "assets/images/events/2026-iksan-aquathlon-cutoff/result-capture-05.jpg",
    "assets/images/events/2026-iksan-aquathlon-cutoff/result-capture-06.jpg",
    "assets/images/events/2026-iksan-aquathlon-cutoff/result-capture-07.jpg",
  ],
  "2026-bbang-trail-30k": [
    "assets/images/events/2026-bbang-trail-30k/cover.jpg",
    "assets/images/events/2026-bbang-trail-30k/official-certificate.jpg",
    "assets/images/events/2026-bbang-trail-30k/official-result.jpg",
    "assets/images/events/2026-bbang-trail-30k/official-ranking.jpg",
    "assets/images/events/2026-bbang-trail-30k/route-summary.jpg",
    "assets/images/events/2026-bbang-trail-30k/scenery.jpg",
    "assets/images/events/2026-bbang-trail-30k/gallery-01.jpg",
    "assets/images/events/2026-bbang-trail-30k/gallery-02.jpg",
    "assets/images/events/2026-bbang-trail-30k/gallery-03.jpg",
    "assets/images/events/2026-bbang-trail-30k/gallery-04.jpg",
    "assets/images/events/2026-bbang-trail-30k/gallery-06.jpg",
    "assets/images/events/2026-bbang-trail-30k/gallery-07.jpg",
    "assets/images/events/2026-bbang-trail-30k/result-capture-01.jpg",
    "assets/images/events/2026-bbang-trail-30k/result-capture-02.jpg",
    "assets/images/events/2026-bbang-trail-30k/result-capture-03.jpg",
    "assets/images/events/2026-bbang-trail-30k/result-capture-04.jpg",
    "assets/images/events/2026-bbang-trail-30k/result-capture-05.jpg",
    "assets/images/events/2026-bbang-trail-30k/result-capture-06.jpg",
  ],
  "2026-mungyeong-granfondo": [
    "assets/images/events/2026-mungyeong-granfondo/cover.jpg",
    "assets/images/events/2026-mungyeong-granfondo/official-certificate.jpg",
    "assets/images/events/2026-mungyeong-granfondo/official-result.jpg",
    "assets/images/events/2026-mungyeong-granfondo/route-summary.jpg",
    "assets/images/events/2026-mungyeong-granfondo/gallery-01.jpg",
    "assets/images/events/2026-mungyeong-granfondo/result-capture-01.jpg",
    "assets/images/events/2026-mungyeong-granfondo/result-capture-02.jpg",
    "assets/images/events/2026-mungyeong-granfondo/result-capture-03.jpg",
    "assets/images/events/2026-mungyeong-granfondo/result-capture-04.jpg",
  ],
  "2026-daegwallyeong-trail": [
    "assets/images/events/2026-daegwallyeong-trail/cover.jpg",
    "assets/images/events/2026-daegwallyeong-trail/official-certificate.jpg",
    "assets/images/events/2026-daegwallyeong-trail/official-result.jpg",
    "assets/images/events/2026-daegwallyeong-trail/official-ranking.jpg",
    "assets/images/events/2026-daegwallyeong-trail/route-summary.jpg",
    "assets/images/events/2026-daegwallyeong-trail/scenery.jpg",
    "assets/images/events/2026-daegwallyeong-trail/gallery-01.jpg",
    "assets/images/events/2026-daegwallyeong-trail/gallery-02.jpg",
    "assets/images/events/2026-daegwallyeong-trail/gallery-03.jpg",
    "assets/images/events/2026-daegwallyeong-trail/gallery-04.jpg",
    "assets/images/events/2026-daegwallyeong-trail/gallery-05.jpg",
    "assets/images/events/2026-daegwallyeong-trail/result-capture-01.jpg",
    "assets/images/events/2026-daegwallyeong-trail/result-capture-02.jpg",
    "assets/images/events/2026-daegwallyeong-trail/result-capture-03.jpg",
    "assets/images/events/2026-daegwallyeong-trail/result-capture-04.jpg",
    "assets/images/events/2026-daegwallyeong-trail/result-capture-05.jpg",
    "assets/images/events/2026-daegwallyeong-trail/result-capture-06.jpg",
    "assets/images/events/2026-daegwallyeong-trail/result-capture-07.jpg",
  ],
  "2026-seolbong-triathlon": [
    "assets/images/events/2026-seolbong-triathlon/cover.jpg",
    "assets/images/events/2026-seolbong-triathlon/official-certificate.jpg",
    "assets/images/events/2026-seolbong-triathlon/official-result.jpg",
    "assets/images/events/2026-seolbong-triathlon/official-ranking.jpg",
    "assets/images/events/2026-seolbong-triathlon/swim-strava.jpg",
    "assets/images/events/2026-seolbong-triathlon/bike-strava.jpg",
    "assets/images/events/2026-seolbong-triathlon/run-strava.jpg",
    "assets/images/events/2026-seolbong-triathlon/venue.jpg",
    "assets/images/events/2026-seolbong-triathlon/result-capture-01.jpg",
    "assets/images/events/2026-seolbong-triathlon/result-capture-02.jpg",
    "assets/images/events/2026-seolbong-triathlon/result-capture-03.jpg",
    "assets/images/events/2026-seolbong-triathlon/result-capture-04.jpg",
    "assets/images/events/2026-seolbong-triathlon/result-capture-05.jpg",
    "assets/images/events/2026-seolbong-triathlon/result-capture-06.jpg",
    "assets/images/events/2026-seolbong-triathlon/result-capture-07.jpg",
    "assets/images/events/2026-seolbong-triathlon/result-capture-08.jpg",
    "assets/images/events/2026-seolbong-triathlon/result-capture-09.jpg",
    "assets/images/events/2026-seolbong-triathlon/result-capture-10.jpg",
    "assets/images/events/2026-seolbong-triathlon/result-capture-11.jpg",
    "assets/images/events/2026-seolbong-triathlon/result-capture-12.jpg",
    "assets/images/events/2026-seolbong-triathlon/result-capture-13.jpg",
    "assets/images/events/2026-seolbong-triathlon/gallery-14.jpg",
    "assets/images/events/2026-seolbong-triathlon/gallery-15.jpg",
    "assets/images/events/2026-seolbong-triathlon/gallery-16.jpg",
    "assets/images/events/2026-seolbong-triathlon/result-capture-14.jpg",
    "assets/images/events/2026-seolbong-triathlon/result-capture-15.jpg",
    "assets/images/events/2026-seolbong-triathlon/result-capture-16.jpg",
    "assets/images/events/2026-seolbong-triathlon/result-capture-17.jpg",
  ],
  "2026-cool-valley-trail": [
    "assets/images/events/2026-cool-valley-trail/cover.jpg",
    "assets/images/events/2026-cool-valley-trail/official-result.jpg",
    "assets/images/events/2026-cool-valley-trail/official-ranking.jpg",
    "assets/images/events/2026-cool-valley-trail/official-certificate.jpg",
    "assets/images/events/2026-cool-valley-trail/route-summary.jpg",
    "assets/images/events/2026-cool-valley-trail/venue.jpg",
    "assets/images/events/2026-cool-valley-trail/gallery-01.jpg",
    "assets/images/events/2026-cool-valley-trail/gallery-02.jpg",
    "assets/images/events/2026-cool-valley-trail/gallery-03.jpg",
    "assets/images/events/2026-cool-valley-trail/gallery-04.jpg",
    "assets/images/events/2026-cool-valley-trail/result-capture-01.jpg",
    "assets/images/events/2026-cool-valley-trail/result-capture-02.jpg",
    "assets/images/events/2026-cool-valley-trail/result-capture-03.jpg",
    "assets/images/events/2026-cool-valley-trail/result-capture-04.jpg",
    "assets/images/events/2026-cool-valley-trail/result-capture-05.jpg",
    "assets/images/events/2026-cool-valley-trail/result-capture-06.jpg",
  ],
  "2026-lotte-aquathlon": [
    "assets/images/events/2026-lotte-aquathlon/cover.jpg",
    "assets/images/events/2026-lotte-aquathlon/official-result.jpg",
    "assets/images/events/2026-lotte-aquathlon/official-ranking.jpg",
    "assets/images/events/2026-lotte-aquathlon/swim-strava.jpg",
    "assets/images/events/2026-lotte-aquathlon/venue.jpg",
    "assets/images/events/2026-lotte-aquathlon/gallery-01.jpg",
    "assets/images/events/2026-lotte-aquathlon/gallery-02.jpg",
    "assets/images/events/2026-lotte-aquathlon/gallery-03.jpg",
    "assets/images/events/2026-lotte-aquathlon/gallery-04.jpg",
    "assets/images/events/2026-lotte-aquathlon/result-capture-01.jpg",
    "assets/images/events/2026-lotte-aquathlon/result-capture-02.jpg",
    "assets/images/events/2026-lotte-aquathlon/result-capture-03.jpg",
    "assets/images/events/2026-lotte-aquathlon/result-capture-04.jpg",
    "assets/images/events/2026-lotte-aquathlon/result-capture-05.jpg",
    "assets/images/events/2026-lotte-aquathlon/result-capture-06.jpg",
    "assets/images/events/2026-lotte-aquathlon/result-capture-07.jpg",
  ],
  "2026-hongcheon-granfondo": [
    "assets/images/events/2026-hongcheon-granfondo/cover.jpg",
    "assets/images/events/2026-hongcheon-granfondo/official-result.jpg",
    "assets/images/events/2026-hongcheon-granfondo/official-ranking.jpg",
    "assets/images/events/2026-hongcheon-granfondo/route-summary.jpg",
    "assets/images/events/2026-hongcheon-granfondo/venue.jpg",
    "assets/images/events/2026-hongcheon-granfondo/result-capture-01.jpg",
    "assets/images/events/2026-hongcheon-granfondo/result-capture-02.jpg",
    "assets/images/events/2026-hongcheon-granfondo/result-capture-03.jpg",
    "assets/images/events/2026-hongcheon-granfondo/gallery-04.jpg",
    "assets/images/events/2026-hongcheon-granfondo/gallery-05.jpg",
  ],
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
    "assets/images/events/2026-hangang-seoul-half/venue.jpg",
    "assets/images/events/2026-hangang-seoul-half/official-result.jpg",
    "assets/images/events/2026-hangang-half-2.jpg",
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
  "2026-cheonan-200k-brevet": ["cover", ...Array.from({ length: 9 }, (_, i) => `gallery-0${i + 1}`)].map(
    (n) => `assets/images/journeys/2026-cheonan-200k-brevet/${n}.jpg`,
  ),
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
  "2025-mbn-half": "https://story.kakao.com/_F7q479/1UfwkAy0Dl9",
  "2025-chuncheon-10k": "https://story.kakao.com/_F7q479/hKjZ4K5Esma",
  "2025-yeosu-granfondo": "https://story.kakao.com/_F7q479/53daRxAKQL9",
  "2025-goryeong-duathlon": "https://story.kakao.com/_F7q479/iIoSjWfkpma",
  "2025-marvel-run-half": "https://story.kakao.com/_F7q479/DPSg2iu9plA",
  "2025-mungyeong-granfondo": "https://story.kakao.com/_F7q479/4NIx4h8Cik9",
  "2025-hangang-night-walk-42k": "https://story.kakao.com/_F7q479/FMyvEUHLmLA",
  "2025-iksan-aquathlon-standard": "https://story.kakao.com/_F7q479/CCoGDX57jk0",
  "2025-hangang-slow-triathlon": "https://story.kakao.com/_F7q479/5UaHhSdmWJ9",
  "2025-seorak-granfondo": "https://story.kakao.com/_F7q479/HAvEDTP0Pka",
  "2025-nakdong-triathlon": "https://story.kakao.com/_F7q479/FZOt4epNDKA",
  "2025-goseong-granfondo": "https://story.kakao.com/_F7q479/7HYQjMbVCi9",
  "2025-korea-open-race-10k": "https://story.kakao.com/_F7q479/DLPlrPlDsJA",
  "2026-tongyeong-triathlon": "https://story.kakao.com/_F7q479/DUchhqMNaRA",
  "2026-siheung-half": "https://story.kakao.com/_F7q479/C7aHp1UGPQ0",
  "2026-iksan-aquathlon-cutoff": "https://story.kakao.com/_F7q479/CCeTRc1pCQ0",
  "2026-bbang-trail-30k": "https://story.kakao.com/_F7q479/KEv6PDZ57Ra",
  "2026-mungyeong-granfondo": "https://story.kakao.com/_F7q479/f3nKEZ0awQA",
  "2026-daegwallyeong-trail": "https://story.kakao.com/_F7q479/1DDc1Ry7qP9",
  "2026-seolbong-triathlon": "https://story.kakao.com/_F7q479/gKcGvKqzlQA",
  "2026-cool-valley-trail": "https://story.kakao.com/_F7q479/9BLlsmohoP0",
  "2026-lotte-aquathlon": "https://story.kakao.com/_F7q479/6HAVzVSBio9",
  "2026-hongcheon-granfondo": "https://story.kakao.com/_F7q479/7YcOoBR8in9",
  "2026-hangang-seoul-half": "https://story.kakao.com/_F7q479/CQmnGjL16N0",
  "2026-samcheok-granfondo": "https://story.kakao.com/_F7q479/gQ86NqzRLPA",
  "2026-seoul-200k-brevet": "https://story.kakao.com/_F7q479/5TSCRTj8RO9",
  "2026-yangsan-triathlon": "https://story.kakao.com/_F7q479/aBHsNXID4o0",
  "2026-changwon-triathlon": "https://story.kakao.com/_F7q479/AEdVmqWxOO0",
  "2026-gumi-full-marathon": "https://story.kakao.com/_F7q479/KQsGwUHN1Oa",
  "2026-daecheongho-full-marathon": "https://story.kakao.com/_F7q479/H97RJOBnzRa",
  "2026-incheon-full-marathon": "https://story.kakao.com/_F7q479/EVJyv4BzXRA",
};
const AI_ANALYSIS = {
  "2025-mbn-half": {
    facts: [
      "공식 기록은 01:53:32(배번호 55739, 평균 5:22/km)이며 하프 전체 8069/19285위입니다.",
      "공식 구간 페이스는 2.6 km 4:59 → 5.0 km 5:03 → 10.0 km 5:14 → 15.6 km 5:33 → 결승 5:38(분/km)입니다.",
      "Strava 기록은 21.20 km · 이동 시간 1:53:32 · 평균 5:21/km · 상승 54 m · 평균 케이던스 180 spm입니다.",
    ],
    assessment:
      "두 달 전 마블런 하프(02:21:51)보다 약 28분 19초 단축했고, 전체 순위는 상위 약 42%입니다. 다만 구간 페이스가 초반 4:59/km에서 후반 5:38/km로 꾸준히 느려진 포지티브 스플릿이라, 카본화로 빨라진 초반 속도를 끝까지 유지하지는 못했습니다. 후반 감속이 체력 한계 때문인지 신발 적응 부족 때문인지는 심박 자료가 없어 구분하지 않습니다.",
    next: [
      "초반 5 km를 목표 평균 페이스(5:20/km 안팎)에 맞춰 후반 감속 폭을 줄입니다.",
      "카본화를 장거리 훈련에서 미리 써 보며 종아리·발목 부담과 쓸림 부위를 점검합니다.",
      "이 기록을 2026년 하프·풀코스 목표 페이스의 기준선으로 사용합니다.",
    ],
  },
  "2025-chuncheon-10k": {
    facts: [
      "공식 기록은 00:54:20(참가번호 39590, 평균 5:25/km)이며, 기록 사이트의 비공식 순위는 전체 2,984위·남자 2,340위입니다.",
      "구간 기록은 1차 반환 00:23:54, 2차 반환까지 00:10:08, 도착까지 00:20:19입니다.",
      "Strava 기록은 9.92 km · 이동 시간 54:22 · 평균 5:29/km · 상승 89 m · 평균 케이던스 180 spm입니다.",
    ],
    assessment:
      "전날 113 km 그란폰도를 탄 뒤에도 3월 코리아 오픈레이스(00:59:26.13)보다 약 5분 6초 빠르게 달려, 7개월 사이 러닝 기본 속도가 확실히 올라왔습니다. Strava 1 km 랩은 5:11~5:53/km 범위로, 오르막 구간을 제외하면 5분 10~30초대를 유지했습니다. 구간 거리가 표시되지 않아 반환 구간별 페이스는 계산하지 않습니다.",
    next: [
      "연속 일정에서는 대회 전 충분한 웜업이 효과적이었던 만큼 출발 30분 전 도착을 기본으로 합니다.",
      "10 km 목표를 55분에서 52~53분으로 올려 하프 준비 페이스와 연결합니다.",
      "장거리 운전이 필요한 대회는 귀가 일정까지 회복 계획에 포함합니다.",
    ],
  },
  "2025-yeosu-granfondo": {
    facts: [
      "공식 기록은 04:45:42.70(그란폰도 113km, 배번호 1342)입니다.",
      "Strava 기록은 112.83 km · 이동 시간 4:29:31 · 경과 시간 4:46:23 · 누적 상승 1,609 m, 평균 25.1 km/h · 평균 파워 172 W입니다.",
      "후기에는 다리 위 맞바람으로 쥐가 났고, 팩 라이딩 없이 단독으로 주행했다고 기록돼 있습니다.",
    ],
    assessment:
      "공식 기록과 이동 시간 차이가 약 16분으로, 같은 해 고성(약 27분)보다 정차 시간을 크게 줄였습니다. 평균 파워 172 W는 고성(167 W)·문경(157 W)보다 높아 시즌 후반 자전거 체력이 올라온 것으로 보입니다. 다만 코스와 바람 조건이 달라 대회 간 파워 차이를 체력 향상만으로 단정하지는 않습니다.",
    next: [
      "맞바람 구간이 긴 해안 코스에서는 그룹 주행을 활용해 단독 주행 부담을 줄입니다.",
      "짧은 대회라도 경련 대응 보급을 장거리 대회와 같은 기준으로 챙깁니다.",
      "연속 일정(다음 날 마라톤)이 있으면 자전거 강도 상한을 미리 정합니다.",
    ],
  },
  "2025-goryeong-duathlon": {
    facts: [
      "완주증 기준 총 02:55:21(달리기 00:26:22, 자전거 01:21:21, 달리기 00:59:37)이며 30-34세 남자 45위입니다.",
      "Strava 기록은 달리기 5.18 km · 27:29(평균 5:18/km), 자전거 41.22 km · 1:21:06(평균 30.5 km/h, 상승 436 m, 203 W), 달리기 10.17 km · 1:00:20(평균 5:56/km)입니다.",
      "공식 세 구간 합계는 2:47:20으로, 두 번의 전환에 약 8분이 쓰였습니다.",
    ],
    assessment:
      "자전거 평균 30.5 km/h는 436 m 상승이 있는 40 km에서 나온 수치로, 이 시즌 멀티스포츠 대회 중에서도 자전거가 확실한 강점임을 보여 줍니다. 첫 5 km를 5:18/km로 달린 뒤 자전거 이후 10 km를 5:56/km로 유지해 후반 러닝도 크게 무너지지 않았습니다. 수영이 빠진 형식이라 표준 철인3종 기록과는 직접 비교하지 않습니다.",
    next: [
      "수영이 포함된 정규 철인3종에서 같은 자전거·러닝 페이스를 유지할 수 있는지 확인합니다.",
      "두 번의 전환 시간(약 8분)을 줄이도록 장비 배치를 연습합니다.",
      "첫 러닝 구간 페이스를 조금 낮춰 마지막 10 km 페이스와의 차이를 줄이는지 비교합니다.",
    ],
  },
  "2025-marvel-run-half": {
    facts: [
      "공식 기록은 02:21:51(배번호 25083)이며 하프 전체 4201/6307위, 남자 3588위입니다.",
      "공식 구간 페이스는 6.8 km까지 6:17/km, 10.7 km까지 6:29/km, 14.6 km까지 6:38/km, 결승까지 7:20/km였습니다.",
      "Strava 기록은 21.39 km · 이동 시간 2:21:16 · 평균 6:36/km · 상승 125 m · 평균 심박 162 bpm입니다.",
    ],
    assessment:
      "첫 하프에서 14.6 km까지 6분 30초대 안팎을 유지했지만 마지막 구간에서 7:20/km로 크게 느려졌는데, 후기에서 말한 15 km 이후 오르막과 페이스메이커 이탈, 마지막 급수 생략 시점과 겹칩니다. 초반을 계획(6:30/km)보다 빠른 6:00/km 안팎으로 시작한 점도 후반 저하에 영향을 줬을 수 있으나 단정하지 않습니다. 두 달 뒤 MBN 하프 01:53:32로 약 28분을 단축하는 출발점 기록입니다.",
    next: [
      "출발 직후 흥분으로 빨라지는 초반 3 km를 목표 페이스로 묶는 연습을 합니다.",
      "급수대는 형태와 상관없이 거르지 않는 원칙을 세웁니다.",
      "15 km 이후 오르막을 대비해 주 1회 장거리 러닝에 언덕 구간을 넣습니다.",
    ],
  },
  "2025-mungyeong-granfondo": {
    facts: [
      "그란폰도 컷오프는 85.4 km 지점 11:30이었고, 후기 기준 11:45쯤 도착해 메디오폰도로 전환됐습니다.",
      "메디오폰도 107.6km 공식 기록은 04:51:22.90(배번호 1356)이며 전체 234/1675위, 남자 204/1493위입니다.",
      "Strava 기록은 107.64 km · 이동 시간 4:27:42 · 경과 시간 4:51:47 · 누적 상승 1,394 m, 평균 24.1 km/h · 평균 파워 157 W입니다.",
    ],
    assessment:
      "컷오프 지점에 약 15분 늦었는데, 후기에서 직접 꼽은 출발 지연(약 20분)과 보급소 정체, 소극적인 팩 라이딩, 조심스러운 다운힐이 함께 작용한 것으로 보입니다. 메디오폰도 기준 순위는 상위 약 14%였지만 이는 그란폰도 주자 일부가 섞인 결과일 수 있어 체력 수준으로 해석하지 않습니다. 이 대회는 1년 뒤 같은 대회에서 통과 시간표를 세워 분기점을 3분 앞서 통과하는 재도전의 기준점이 됐습니다.",
    next: [
      "분기점 마감이 있는 대회는 보급소별 목표 통과 시각표를 미리 만듭니다.",
      "평지 구간에서는 그룹 주행을 적극 활용해 시간과 체력을 아낍니다.",
      "다운힐 코너링 연습으로 불필요한 감속을 줄입니다.",
    ],
  },
  "2025-hangang-night-walk-42k": {
    facts: [
      "Strava 기록은 43.63 km · 이동 시간 8:29:06 · 상승 190 m · 59,416걸음이며, Strava 최장 걷기 기록으로 표시됐습니다.",
      "후기에는 19시 무렵 출발해 04:48에 도착했다고 적혀 있어, 이동 시간 외 휴식이 1시간 이상 포함된 것으로 보입니다.",
      "후기 기준 이번이 이 대회 4번째 참가이며, 물집과 막판 발목 부상이 있었습니다.",
    ],
    assessment:
      "이동 시간 기준 평균 속도는 약 5.1 km/h로, 8시간 넘게 꾸준한 걷기 페이스를 유지했습니다. 다만 출발·도착 시각이 후기에 대략적으로만 적혀 있어 총 경과 시간과 휴식 시간은 정확히 계산하지 않습니다. 물집의 원인은 후기에서 신발 선택으로 짐작했으며, 이 장거리 지속 경험은 이후 첫 풀코스 도전의 기반이 됐습니다.",
    next: [
      "장시간 걷기에도 평소 신던 러닝화와 물집 방지 양말을 사용합니다.",
      "2~3시간마다 발을 식히고 상태를 점검하는 휴식 계획을 미리 정합니다.",
      "밤샘 대회 뒤 장거리 귀가 이동은 피하고 회복 일정을 확보합니다.",
    ],
  },
  "2025-iksan-aquathlon-standard": {
    facts: [
      "완주증 기준 총 01:33:33(수영 0:47:26, 러닝 0:42:44)이며, 러닝은 폭염으로 5 km로 단축됐습니다.",
      "Strava 기록은 수영 1,510 m · 47:42 · 평균 3:09/100m · 평균 심박 170 bpm, 러닝 5.18 km · 43:04 · 평균 8:18/km · 평균 심박 173 bpm입니다.",
      "후기에는 가장 마지막으로 결승선에 들어왔고 경기 뒤 전신 경련이 있었다고 기록돼 있습니다.",
    ],
    assessment:
      "1.5 km 오픈워터를 완주해 수영에 대한 심리적 장벽을 넘은 것이 핵심 성과입니다. 반면 폭염 속 러닝은 평균 8:18/km, 평균 심박 173 bpm으로 강도에 비해 속도가 크게 떨어졌는데, 더위와 수영 직후 피로가 겹친 결과로 보이나 기온·수분 섭취 자료가 없어 원인을 확정하지 않습니다. 이 대회는 이후 2026년 4월 같은 대회 재참가 후기에서 비교 기준으로 다시 언급됩니다.",
    next: [
      "폭염 대회는 출발 전 수분·전해질 섭취 계획을 세우고 러닝 목표 페이스를 낮춰 잡습니다.",
      "수영 후 러닝 전환에서 심박을 낮추는 연습(브릭 훈련)을 정기적으로 넣습니다.",
      "경기 뒤 경련이 반복되므로 대회 당일 귀가 운전 계획을 미리 정해 둡니다.",
    ],
  },
  "2025-hangang-slow-triathlon": {
    facts: [
      "Strava 기록은 수영 787 m · 17:04(평균 2:10/100m, 롱핀 사용), 미니벨로 20.21 km · 58:06(평균 20.9 km/h), 러닝 6.85 km · 47:47(평균 6:58/km)입니다.",
      "후기에는 오후 결혼식 일정으로 시간에 쫓긴 참가였고, 수영 중 조류에 밀려 부이를 잡고 쉬었다고 기록돼 있습니다.",
      "축제형 대회로, 공식 완주 기록은 게시물에서 확인되지 않습니다.",
    ],
    assessment:
      "기록보다 한강 횡단 오픈워터 경험이 핵심인 참가로, 낙동강 슬로우 철인에 이어 오리발·부이를 활용한 오픈워터 적응 단계로 볼 수 있습니다. 다음 날 그란폰도를 앞둔 일정이라 강도를 의도적으로 낮췄다고 보이므로, 자전거·러닝 수치는 체력 지표로 해석하지 않습니다.",
    next: [
      "오리발 없이 같은 거리를 수영해 장비 의존도를 확인합니다.",
      "조류가 있는 오픈워터에서 방향 확인(사이팅) 연습을 해 휩쓸림을 줄입니다.",
      "연속 대회 일정에서는 전날 대회의 강도를 미리 정해 다음 날 컨디션을 지킵니다.",
    ],
  },
  "2025-seorak-granfondo": {
    facts: [
      "공식 기록은 11:10:50.69(M Granfondo 208km, 배번호 3070)로 제한 시간 12시간보다 약 49분 일찍 들어왔습니다.",
      "Strava 기록은 204.99 km · 이동 시간 10:04:05 · 경과 시간 11:17:08 · 누적 상승 3,676 m, 평균 20.4 km/h · 평균 파워 152 W입니다.",
      "공식 기록표의 Section 2 누적 시간은 05:14:46.42입니다.",
    ],
    assessment:
      "2025년 단일 활동 중 가장 높은 3,676 m 상승을 10시간 넘게 이어 가며 제한 시간 안에 완주한 것이 이 대회의 핵심입니다. 공식 기록과 이동 시간 차이는 약 1시간 7분으로, 보급소 정차와 휴식이 길었던 것으로 보입니다. Section 2의 거리 위치가 기록표에 표시되지 않아 구간 속도는 계산하지 않습니다.",
    next: [
      "보급소별 정차 시간을 기록해 1시간이 넘는 정차 합계를 줄일 수 있는 지점을 찾습니다.",
      "장거리 업힐 대회 전에는 3,000 m 이상 상승의 장거리 훈련으로 후반 지구력을 확인합니다.",
      "대회 뒤 회복 기간을 일정에 포함해 연속 대회 일정의 누적 피로를 관리합니다.",
    ],
  },
  "2025-nakdong-triathlon": {
    facts: [
      "완주증 기준 스탠다드(수영 1.5km·자전거 46km·트레일런 10km) 완주이며 배번은 112번입니다.",
      "Strava 기록은 수영 1,523 m · 37:17(평균 2:26/100m, 오리발·부이 사용), 자전거 46.15 km · 1:34:55(평균 29.2 km/h), 러닝 8.53 km · 56:19(평균 6:36/km)입니다.",
      "후기 기준 총 소요 시간은 약 3시간 27분이며, 세 종목 이동 시간 합계는 3:08:31입니다.",
    ],
    assessment:
      "세 종목 이동 시간 합계와 후기의 총 소요 시간 차이(약 18분)는 전환과 첫 바퀴 뒤 휴식이 포함된 결과로 보입니다. 자전거는 평지 46 km를 평균 29.2 km/h로 달렸지만, 후기에서 스스로 위험할 만큼 폭주했다고 돌아본 만큼 이후 러닝(평균 6:36/km)과의 체력 배분이 과제로 남았습니다. 오리발·부이를 허용한 슬로우 형식이라 수영 기록은 이후 정규 대회와 직접 비교하지 않습니다.",
    next: [
      "오리발 없이 1.5 km를 쉬지 않고 수영할 수 있도록 오픈워터 호흡 리듬 훈련을 우선합니다.",
      "자전거 후반 강도를 조절해 러닝 첫 2 km를 안정적으로 시작하는 브릭 훈련을 합니다.",
      "몸에 맞는 슈트를 준비해 쓸림과 호흡 제한을 줄입니다.",
    ],
  },
  "2025-goseong-granfondo": {
    facts: [
      "공식 기록은 05:26:25.84(그란폰도 119km, 배번호 1319)이며 전체 468/1237위, 남자 443/1165위입니다.",
      "Strava 기록은 120.16 km · 이동 시간 04:59:39 · 누적 상승 1,583 m, 평균 24.1 km/h · 평균 파워 167 W입니다.",
      "후기에는 경련이 세 번 있었고, 첫 번째만 보급품으로 대응했다고 기록돼 있습니다.",
    ],
    assessment:
      "전체 순위 상위 약 38%로, 후기에서 말한 '중간 정도'라는 체감과 일치합니다. 공식 기록과 이동 시간 차이는 약 26분 47초로 보급·정차 시간이 적지 않았습니다. 급경사 업힐과 반복된 경련이 후반 페이스에 영향을 줬을 가능성이 있지만 구간별 파워·심박 자료가 없어 경련 시점과 원인은 단정하지 않습니다.",
    next: [
      "경련 대응 보급품을 예상보다 넉넉히 챙기고, 경련이 시작된 시점을 기록합니다.",
      "그룹 주행 시 분위기에 휩쓸려 페이스를 올리지 않도록 업힐 진입 전 파워 상한을 정합니다.",
      "업힐과 다운힐에서 주행 라인을 유지하는 연습으로 안전 여유를 확보합니다.",
    ],
  },
  "2025-korea-open-race-10k": {
    facts: [
      "공식 완주기록증 기준 기록은 00:59:26.13, 참가번호는 15032번입니다.",
      "Strava 기록은 10.00 km · 이동 시간 59:16 · 평균 5:55/km · 상승 76 m · 평균 심박 160 bpm입니다.",
      "후기에는 준비 부족과 물집, 1시간 안 완주가 간신히였다는 점이 기록돼 있습니다.",
    ],
    assessment:
      "공식 기록 기준 평균 페이스는 약 5분 57초/km로, 목표로 보이는 1시간 벽을 34초 차이로 넘었습니다. 같은 해 10월 춘천 10K(00:54:20)와 비교하면 약 5분을 단축하게 되는 출발점 기록입니다. 구간 랩이 없어 물집이 페이스에 준 영향은 판단하지 않습니다.",
    next: [
      "대회용 양말과 신발 조합을 장거리 훈련에서 먼저 시험해 물집 원인을 줄입니다.",
      "1 km 랩을 기록해 후반 페이스 유지 여부를 확인합니다.",
      "이 기록을 2025년 러닝 기준선으로 두고 하프 도전 전 10 km 기록 변화를 추적합니다.",
    ],
  },
  "2026-tongyeong-triathlon": {
    facts: [
      "공식 기록은 총 03:06:33(수영 00:38:33, T1 00:05:53, 사이클 01:22:25, T2 00:03:57, 러닝 00:55:46)이며 배번호는 183번입니다.",
      "Standard 전체 602/1303위, 남자 540/1142위, 동호인 35-39세 남자 62/126위이고, 종목별 전체 순위는 수영 876위·사이클 293위·러닝 716위입니다.",
      "Strava 기록은 수영 1,489 m(평균 2:35/100m), 사이클 37.50 km(상승 603 m, 평균 27.6 km/h, 197 W), 러닝 9.92 km(평균 5:37/km)입니다.",
    ],
    assessment:
      "두 달 전 설봉 대회와 비교하면 총 기록은 3분 19초 줄었고, 수영은 8분 08초, 러닝은 10분 24초 빨라졌습니다. 반면 사이클은 15분 09초 늘었는데, 상승고도가 설봉(197 m)의 약 3배인 603 m였고 빗길이었던 만큼 코스 차이가 크게 작용한 것으로 보입니다. 수영 단축에는 후기에서 말한 몸싸움 대응과 드래프팅이 영향을 줬을 수 있으나 바다 조류 조건이 기록되지 않아 개선 폭을 실력 향상만으로 보지 않습니다.",
    next: [
      "수영에서 익힌 앞사람 뒤 드래프팅을 훈련에서도 연습해 오픈워터 페이스를 안정시킵니다.",
      "업힐이 많은 철인 코스를 대비해 사이클 업힐 반복 훈련을 시즌 중에도 유지합니다.",
      "T1 05:53을 줄이도록 슈트 탈의와 장비 착용 순서를 반복 연습합니다.",
    ],
  },
  "2026-siheung-half": {
    facts: [
      "공식 기록은 01:48:54.34(배번호 20146)로, 2025년 MBN 하프 01:53:32보다 약 4분 38초, 2026년 1월 한강 하프 02:16:29.24보다 약 27분 35초 빠릅니다.",
      "Strava 기록은 20.80 km · 이동 시간 01:49:01 · 평균 5:14/km · 상승 17 m, 평균 심박 160 bpm · 최고 174 bpm입니다.",
      "Strava 1 km 랩은 첫 km 5:21에서 20 km 5:08로 후반까지 5분 초중반대를 유지했고, 마지막 0.8 km는 4:53/km였습니다.",
    ],
    assessment:
      "공식 기록 기준 평균 페이스는 약 5분 10초/km로, 후반 랩이 초반보다 느려지지 않은 이븐~네거티브 운영이 확인됩니다. 같은 해 1월 눈길 하프에서 경련으로 버텼던 것과 비교하면 주간 장거리 러닝과 철인·트레일 시즌을 거치며 러닝 지구력이 크게 올라섰습니다. 다만 후기에서도 인정했듯 고도 17 m의 평지 코스와 후반 순풍이 기록에 유리했으므로, 개선 폭 전부를 체력 향상으로 보지는 않습니다.",
    next: [
      "이 하프 페이스를 기준으로 풀코스 목표 페이스를 보수적으로 산정합니다.",
      "급수 직후 페이스가 떨어진 점을 고려해 걷지 않고 마시는 급수 동작을 연습합니다.",
      "하프 뒤 회복 상태를 확인하며 풀코스 전 마지막 장거리 훈련의 강도를 조절합니다.",
    ],
  },
  "2026-iksan-aquathlon-cutoff": {
    facts: [
      "후기 기준 수영 1.5 km 00:53:13으로 컷오프됐고, 이후 허용된 러닝 10 km는 00:56:34였습니다.",
      "Strava 수영 기록은 1,540 m · 53:13 · 평균 3:27/100m · 평균 심박 162 bpm(최고 178 bpm)입니다.",
      "Strava 러닝 기록은 10.21 km · 이동 시간 56:34 · 평균 5:32/km · 평균 심박 159 bpm입니다.",
    ],
    assessment:
      "평균 수영 페이스 3:27/100m는 설봉(3:12/100m)·롯데(3:07/100m)보다 느리고, 평균 심박은 162 bpm으로 두 대회(154·143 bpm)보다 높았습니다. 후기에서 짚은 슈트 미착용, 4바퀴 진출입, 너울이 페이스 저하와 심박 상승에 함께 작용했을 수 있지만 각 요인의 비중은 나눌 수 없습니다. 반면 컷오프 뒤 뛴 10 km를 5:32/km로 마쳐 러닝 체력 자체는 무너지지 않았음을 보여 줍니다. 이 대회의 공식 결과는 완주가 아닌 수영 컷오프로 유지합니다.",
    next: [
      "슈트 선택이 가능한 대회는 슈트를 기본으로 하고, 착용 상태로 오픈워터 훈련을 해 둡니다.",
      "대회 전 코스 바퀴 수·진출입 동선·컷오프 시간을 확인해 바퀴별 목표 통과 시간을 정합니다.",
      "2바퀴 시점에 목표 대비 페이스를 점검하고, 늦으면 그때 바로 속도를 올리는 기준을 세웁니다.",
    ],
  },
  "2026-bbang-trail-30k": {
    facts: [
      "공식 기록은 05:31:45(30K, 배번호 1024)이며 30K 전체 82/543위, 남자 69/370위로 표시됐습니다.",
      "공식 구간 페이스는 4.0 km 10:00 → 10.0 km 08:27 → 17.4 km 09:48 → 24.8 km 15:02 → 30.0 km 10:58(분/km)입니다.",
      "Strava 기록은 31.28 km · 이동 시간 05:10:37 · 누적 상승 1,587 m, 평균 심박 156 bpm · 최고 175 bpm입니다.",
    ],
    assessment:
      "초반 10 km를 무리하지 않고 운영한 덕분에, 가장 느린 17.4~24.8 km 구간(15:02/km) 이후에도 마지막 구간을 10:58/km로 회복하며 완주했습니다. 이 느린 구간은 후기에서 말한 긴 내리막 뒤 재상승 구간과 발목·발가락 경련 시점에 해당하는 것으로 보입니다. 순위 비율은 쿨밸리·대관령보다 크게 앞서 보이지만, 같은 집계 화면의 30K 완주율이 53.4%로 표시돼 순위 분모에 미완주자가 포함됐는지는 확인하지 못했으므로 직접 비교는 하지 않습니다.",
    next: [
      "20 km 이후 긴 오르막에 대비해 후반 보급(젤·전해질)을 시간 단위로 미리 배치합니다.",
      "긴 내리막에서 무릎 부담을 줄이도록 다운힐 근력·기술 훈련을 보강합니다.",
      "대회 뒤 회복 기간의 수면·열감·통증을 기록해 다음 장거리 트레일 일정 간격을 정합니다.",
    ],
  },
  "2026-mungyeong-granfondo": {
    facts: [
      "공식 기록은 06:46:47.23(그란폰도 153.2 km, 배번호 1412)이며 전체 502/1173위, 남자 468/1091위입니다.",
      "Strava 기록은 154.36 km · 이동 시간 06:21:33 · 누적 상승 1,988 m, 평균 24.3 km/h · 평균 파워 153 W · 평균 심박 141 bpm입니다.",
      "후기 기준 그란폰도 분기점 마감 11:30보다 3분 앞선 11:27에 통과했고, 이화령과 여우목고개에서 오른쪽 허벅지 경련이 있었습니다.",
    ],
    assessment:
      "2025년에 분기점 컷오프로 메디오폰도(Strava 107.65 km) 완주에 그친 같은 대회를 153 km 그란폰도 완주로 바꾼 것이 가장 큰 성과입니다. 구간 통과 시간표를 미리 만들고 긴 보급 줄을 건너뛰는 판단이 3분 차이의 분기점 통과로 이어졌습니다. 반면 업힐 구간마다 같은 부위 경련이 반복됐는데, 후기에서 최근 업힐 라이딩 부족과 높은 페이스를 원인으로 짐작했을 뿐 파워·심박 구간 자료가 없어 원인을 확정하지 않습니다.",
    next: [
      "분기점 마감이 있는 대회는 보급소별 목표 통과 시각에 10분 이상 여유를 두도록 시간표를 다시 짭니다.",
      "장거리 업힐 훈련을 시즌 중 정기적으로 넣어 업힐 전용 근지구력을 유지합니다.",
      "쥐 방지 보급을 예상 경련 구간 수보다 넉넉하게 준비하고, 업힐 진입 전 페이스 상한을 정합니다.",
    ],
  },
  "2026-daegwallyeong-trail": {
    facts: [
      "공식 기록은 03:26:34(20.18K, 배번호 2273)이며 전체 260/732위, 남자 183/474위, 35-39세 남자 33/70위입니다.",
      "공식 구간 페이스는 7.0 km까지 10:40/km, 12.0 km까지 10:30/km, 결승까지 09:41/km로 갈수록 빨라졌습니다.",
      "Strava 기록은 21.60 km · 이동 시간 03:18:56 · 누적 상승 872 m, 평균 심박 155 bpm · 최고 178 bpm입니다.",
    ],
    assessment:
      "공식 평균 페이스가 첫 트레일인 쿨밸리의 12:07/km에서 10:14/km로 빨라졌고, 전체 순위 비율도 상위 약 41%에서 약 36%로 올라섰습니다. 구간 페이스가 후반으로 갈수록 빨라져 후기에서 말한 페이스 조절과 내리막 운영이 기록으로도 확인됩니다. 다만 후기에도 적었듯 이번 코스는 경사가 덜하고 내리막이 많아, 개선 폭 중 코스 차이의 영향과 실력 향상분을 나눠 판단할 수는 없습니다.",
    next: [
      "30 km 트레일을 대비해 3시간 이상 산악 장거리 훈련으로 후반 다리 근지구력을 확인합니다.",
      "오르막은 쉬지 않고 걷는 파워 하이킹 페이스를 정해 심박 상한 안에서 유지하는 연습을 합니다.",
      "대회 전날 숙소 수면 환경을 미리 점검해 수면 부족 변수를 줄입니다.",
    ],
  },
  "2026-seolbong-triathlon": {
    facts: [
      "공식 기록은 총 03:09:52(수영 00:46:41, T1 00:05:24, 사이클 01:07:16, T2 00:04:20, 러닝 01:06:10)이며 배번호는 176번입니다.",
      "전체 377/589위, 남자 328/507위, 35-39세 남자 29/55위이고, 종목별 전체 순위는 수영 458위·사이클 134위·러닝 406위입니다.",
      "Strava 기록은 수영 1,452 m(평균 3:12/100m, 평균 심박 154 bpm), 사이클 38.60 km(평균 34.6 km/h, 216 W), 러닝 9.61 km(평균 6:53/km, 상승 176 m)입니다.",
    ],
    assessment:
      "사이클 순위가 전체 134위(연령대 9위)로 세 종목 중 압도적으로 높아, 후기에 적은 대로 자전거가 이 대회의 기반이었습니다. 양산 표준거리와 비교하면 총 기록은 3분 07초 줄었고 수영은 1분 52초, 사이클은 6분 44초 단축했지만 러닝은 3분 35초 늘었습니다. 다만 두 대회의 코스와 러닝 고도가 달라 러닝 기록 차이를 체력 저하로 단정하지 않습니다.",
    next: [
      "대회용 경기복과 슈트의 착용감을 사전에 수영 훈련에서 점검해 호흡 제한을 없앱니다.",
      "2바퀴 코스에서는 바깥 라인을 잡아 후미 그룹과 겹치는 구간의 몸싸움을 피합니다.",
      "언덕 반복 러닝 코스를 대비해 브릭 훈련에 오르막 구간을 포함합니다.",
    ],
  },
  "2026-cool-valley-trail": {
    facts: [
      "공식 기록은 03:45:22(SUN.18K, 배번호 3386)이며 전체 407/994위, 남자 319/685위, 35-39세 남자 70/151위입니다.",
      "공식 구간 페이스는 4.8 km까지 16:31/km, 11.5 km까지 11:50/km, 14.6 km까지 11:19/km, 결승까지 07:53/km입니다.",
      "Strava 기록은 18.61 km · 이동 시간 03:24:18 · 누적 상승 980 m, 평균 심박 150 bpm · 최고 170 bpm입니다.",
    ],
    assessment:
      "첫 트레일에서 전체 참가자 중 앞쪽 41% 안으로 완주했고, 구간 페이스가 갈수록 빨라져 마지막 4 km를 07:53/km로 마쳤습니다. Strava 고도 그래프상 가장 큰 오르막이 초반 5 km 안에 몰려 있어 첫 구간이 가장 느린 것은 코스 특성의 영향이 큽니다. 공식 기록과 이동 시간 차이는 약 21분인데, 후기의 줄 서서 걷는 정체 구간이 얼마나 포함됐는지는 확인할 수 없어 단정하지 않습니다.",
    next: [
      "급경사 오르막은 파워 하이킹 자세와 폴 사용 여부를 미리 연습해 허리 부담을 줄입니다.",
      "젖은 내리막을 대비해 짧은 보폭 다운힐 훈련을 하고, 발톱 보호를 위해 신발 끈과 양말을 점검합니다.",
      "장거리 이동이 필요한 대회는 전날 이동이나 회복 일정을 함께 계획합니다.",
    ],
  },
  "2026-lotte-aquathlon": {
    facts: [
      "공식 기록은 총 01:27:06(수영 00:47:11, T1 00:05:53, 수직 마라톤 00:34:02)이며 배번호는 1313번입니다.",
      "전체 624/950위, 남자 507/754위, 35-39세 남자 70/109위이고, 종목별 전체 순위는 수영 809위·수직 마라톤 293위입니다.",
      "Strava 수영 기록은 1,512 m · 이동 시간 47:09 · 평균 3:07/100m · 평균 심박 143 bpm입니다.",
    ],
    assessment:
      "수직 마라톤 순위(293위)가 수영 순위(809위)보다 크게 앞서, 업힐 라이딩으로 쌓은 하체 지구력이 계단 오르기에서 강점으로 작용한 것으로 보입니다. 반대로 수영은 후기에서 슈트 없이 다리가 가라앉고 초반 500 m 몸싸움 속에서 호흡이 흔들렸다고 기록해, 전체 순위를 끌어내린 구간이었습니다. 수영 중 심박과 페이스 변동이 초반 혼잡 때문인지 체력 문제인지는 데이터만으로 구분하지 않습니다.",
    next: [
      "슈트 없는 오픈워터를 대비해 킥과 몸 자세 훈련으로 하체 가라앉음을 줄입니다.",
      "출발 위치를 바깥쪽이나 후미로 잡아 초반 몸싸움을 피하고 첫 500 m 호흡 리듬을 먼저 안정시킵니다.",
      "수영 뒤 T1 05:53의 동선과 장비 교체 순서를 점검해 전환 시간을 줄입니다.",
    ],
  },
  "2026-hangang-seoul-half": {
    facts: [
      "공식 기록은 02:16:29.24이며 하프 전체 1441/2736위, 남자 1306/2300위입니다.",
      "공식 기록표의 중간 계측 누적 시간은 Section 1 00:29:10.67, Section 2 01:34:22.43입니다.",
      "Strava 기록은 21.0 km · 이동 시간 02:16:12이고, 후기에는 18 km 부근부터 시작된 경련이 기록됐습니다.",
    ],
    assessment:
      "공식 기록 기준 평균 페이스는 약 6분 28초/km입니다. 눈 덮인 흙길로 시작한 초반과 18 km 이후 경련 속에서도 걷지 않고 완주했다는 점이 이 대회의 핵심입니다. 공식 기록과 이동 시간 차이가 17초에 불과해 정차 시간은 거의 없었던 것으로 보입니다. 다만 계측 구간의 거리가 기록표에 표시되지 않아 구간별 페이스와 감속 지점은 계산하지 않습니다.",
    next: [
      "겨울 대회는 출발 전 보온과 초반 노면 상태를 고려해 첫 5 km 목표 페이스를 따로 정합니다.",
      "경련이 시작된 거리와 직전 보급 시점을 기록해 풀코스 준비의 수분·전해질 계획에 반영합니다.",
      "이 하프 기록을 첫 풀코스 준비의 기준선으로 두고 장거리 훈련의 페이스를 비교합니다.",
    ],
  },
  "2026-hongcheon-granfondo": {
    facts: [
      "공식 기록은 05:09:22.80(그란폰도 121.52 km, 배번호 1313)이며 전체 364/1412위, 남자 333/1292위입니다.",
      "Strava 기록은 119.64 km · 이동 시간 04:48:12 · 누적 상승 1,727 m, 평균 24.9 km/h · 최고 63.4 km/h입니다.",
      "Strava 평균 파워는 163 W, 평균 케이던스는 78 rpm이며 공식 기록과 이동 시간 차이는 약 21분입니다.",
    ],
    assessment:
      "오랜만의 로드 복귀전에서 1,700 m가 넘는 상승을 포함한 120 km를 이동 평균 24.9 km/h로 마치며 전체 참가자 중 상위 약 26% 안에 들었습니다. 후기에서 평지·업힐·역풍 구간을 버틴 자신감과 함께 쥐와 몸의 무리, 다운힐에 대한 두려움을 기록했습니다. 구간별 파워·심박 자료가 없어 경련이 시작된 지점과 원인은 단정하지 않습니다.",
    next: [
      "안전한 코스에서 내리막 라인과 제동 연습을 반복해 다운힐 공포를 줄입니다.",
      "혼자 바람을 맞는 구간을 줄이도록 그룹 주행 활용 기준을 미리 정합니다.",
      "경련이 시작된 거리와 보급 시점을 기록해 장거리 대회의 수분·전해질 계획을 점검합니다.",
    ],
  },
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
const DOC_IMAGE = /(official|result|certificate|ranking|strava|splits|pace|heart-rate|route-summary|course|chart)/;
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
      return `<article class="journey-card ${photos.length ? "has-media" : ""} ${j.id === FEATURED ? "featured-journey" : ""} ${j.id === lastWide ? "wide-journey" : ""}">${photos.length ? `<div class="journey-media"><img src="${photos[0]}" alt="${j.title} 대표 사진">${photos.length > 1 ? `<span>+${photos.length - 1} PHOTOS</span>` : ""}</div>` : ""}<div class="journey-copy"><span class="date">${period}</span><small>${j.category === "randonneuring" ? "RANDONNEURING" : j.category === "walking" ? "WALKING" : "JOURNEY"}</small><h3>${j.title}</h3><p>${j.review || j.summary || ""}</p>${j.analysis ? `<details class="journey-analysis"><summary>AI 기록 분석 · 다음 도전</summary><p>${j.analysis}</p>${j.next?.length ? `<ul>${j.next.map((x) => `<li>${x}</li>`).join("")}</ul>` : ""}</details>` : ""}<div class="journey-stats">${s.distanceKm ? `<b>${num(s.distanceKm)} km</b>` : ""}${s.elapsedHours ? `<b>${num(s.elapsedHours)} h</b>` : ""}${s.elevationGainM ? `<b>${num(s.elevationGainM)} m↑</b>` : ""}${s.activityCount > 1 ? `<b>${s.activityCount} stages</b>` : ""}</div>${activity ? `<a class="strava-link" href="https://www.strava.com/activities/${activity}" target="_blank" rel="noreferrer">Strava에서 경로와 원본 기록 보기 ↗</a>` : ""}${j.story?.url ? `<a class="strava-link story-link" href="${j.story.url}" target="_blank" rel="noreferrer">카카오스토리 원문 읽기 ↗</a>` : ""}</div></article>`;
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
