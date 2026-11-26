#!/usr/bin/env python3
"""Validate public yearbook JSON before publishing."""

from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
VALID_STATUSES = {"finished", "dnf", "cutoff", "format-changed", "cancelled", "participated"}
VALID_REVIEWS = {"verified", "partial", "needs-review"}


def load(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def validate_year(year: int) -> list[str]:
    errors: list[str] = []
    folder = ROOT / "data" / str(year)
    summary = load(folder / "summary.json")
    events = load(folder / "events.json")
    journeys = load(folder / "journeys.json")
    media = load(folder / "media.json")

    if summary["year"] != year:
        errors.append(f"{year}: summary year mismatch")
    if len(summary["months"]) != 12:
        errors.append(f"{year}: expected 12 months")

    ids: set[str] = set()
    for event in events:
        event_id = event.get("id")
        if event_id in ids:
            errors.append(f"{year}: duplicate event id {event_id}")
        ids.add(event_id)
        if event.get("year") != year or not event.get("date", "").startswith(str(year)):
            errors.append(f"{year}: event date mismatch {event_id}")
        if event.get("status") not in VALID_STATUSES:
            errors.append(f"{year}: invalid status {event_id}")
        if event.get("reviewStatus") not in VALID_REVIEWS:
            errors.append(f"{year}: invalid review status {event_id}")

    journey_ids = {journey["id"] for journey in journeys}
    known_ids = ids | journey_ids
    for item in media:
        if item.get("eventId") not in known_ids:
            errors.append(f"{year}: media references unknown id {item.get('eventId')}")
    return errors


VALID_VIDEO_TYPES = {"event", "journey"}
VALID_VIDEO_KINDS = {"video", "short", "live"}


def validate_videos(years: list[int]) -> list[str]:
    """data/videos.json의 영상이 실제 대회·여정 id를 가리키는지 확인한다."""
    path = ROOT / "data" / "videos.json"
    if not path.exists():
        return []
    errors: list[str] = []
    known = {"event": set(), "journey": set()}
    for year in years:
        folder = ROOT / "data" / str(year)
        known["event"] |= {e["id"] for e in load(folder / "events.json")}
        known["journey"] |= {j["id"] for j in load(folder / "journeys.json")}

    seen: set[tuple[str, str]] = set()
    for i, video in enumerate(load(path)):
        label = f"videos[{i}] {video.get('videoId')}"
        kind, target = video.get("type"), video.get("targetId")
        if kind not in VALID_VIDEO_TYPES:
            errors.append(f"{label}: invalid type {kind}")
        elif target not in known[kind]:
            errors.append(f"{label}: unknown {kind} id {target}")
        if video.get("kind") not in VALID_VIDEO_KINDS:
            errors.append(f"{label}: invalid kind {video.get('kind')}")
        video_id = video.get("videoId") or ""
        if not re.fullmatch(r"[A-Za-z0-9_-]{11}", video_id):
            errors.append(f"{label}: invalid videoId")
        elif video_id not in (video.get("url") or ""):
            errors.append(f"{label}: url does not contain videoId")
        if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", video.get("publishedAt") or ""):
            errors.append(f"{label}: invalid publishedAt")
        key = (target, video_id)
        if key in seen:
            errors.append(f"{label}: duplicate link to {target}")
        seen.add(key)
    return errors


def main() -> None:
    errors = validate_year(2025) + validate_year(2026) + validate_videos([2025, 2026])
    if errors:
        raise SystemExit("\n".join(errors))
    print("Yearbook data validation passed for 2025 and 2026 (videos included).")


if __name__ == "__main__":
    main()
