# 사진과 원본 기록 연결 방식

## 권장 입력

Codex 대화에 사진을 첨부하면서 대회명 또는 여행명을 함께 적습니다. 여러 장을 한 번에 첨부해도 날짜와 화면 내용을 기준으로 분류할 수 있습니다.

```text
대회명: 2026 인천 국제 마라톤
대표 사진: 직접 선별 요청
Strava 지도 캡처: 포함
```

## 저장 원칙

- 대표 사진은 현장감이 있는 인물, 완주 또는 장소 사진을 우선합니다.
- 기록표와 Strava 캡처는 대표 사진이 아니라 상세 기록 영역에 둡니다.
- 외부 CDN을 직접 임베드하지 않고 원본 파일을 저장소에 보관합니다.
- 개인 SNS 원문은 링크하지 않고, 출처 링크는 공식 기록과 Strava 활동 주소만 남깁니다.
- 본인 얼굴이 크게 나온 사진은 공개 사진에서 제외하고, 풍경·장비·기록 사진을 사용합니다.
- 이동 경로는 Strava 내보내기 GPS 파일을 단순화해 `data/routes.json`에 저장하고 사이트 지도에 그립니다. 집 근처가 드러나지 않도록 여정·연간 지도 경로는 시작과 끝 1km를 잘라 냅니다.

## 파일 구조

```text
assets/images/events/<event-id>/cover.jpg
assets/images/events/<event-id>/gallery-01.jpg
assets/images/events/<event-id>/strava-route.jpg
assets/images/journeys/<journey-id>/cover.jpg
assets/images/journeys/<journey-id>/gallery-01.jpg
```
