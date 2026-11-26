# 사진과 원본 기록 연결 방식

## 권장 입력

Codex 대화에 사진을 첨부하면서 대회명 또는 여행명을 함께 적습니다. 여러 장을 한 번에 첨부해도 날짜와 화면 내용을 기준으로 분류할 수 있습니다.

```text
대회명: 2026 인천 국제 마라톤
대표 사진: 직접 선별 요청
Strava 지도 캡처: 포함
카카오스토리 게시물: https://story.kakao.com/...
```

## 저장 원칙

- 대표 사진은 현장감이 있는 인물, 완주 또는 장소 사진을 우선합니다.
- 기록표와 Strava 캡처는 대표 사진이 아니라 상세 기록 영역에 둡니다.
- 카카오스토리 CDN을 직접 임베드하지 않고 원본 파일을 저장소에 보관합니다.
- 카카오스토리 게시물과 Strava 활동 주소는 원본 출처 링크로 함께 남깁니다.
- 이동 경로를 사이트에서 다시 그리지 않습니다. Strava 지도 캡처가 있으면 이미지로 표시하고, 없으면 Strava 활동으로 직접 연결합니다.

## 파일 구조

```text
assets/images/events/<event-id>/cover.jpg
assets/images/events/<event-id>/gallery-01.jpg
assets/images/events/<event-id>/strava-route.jpg
assets/images/journeys/<journey-id>/cover.jpg
assets/images/journeys/<journey-id>/gallery-01.jpg
```
