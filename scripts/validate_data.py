#!/usr/bin/env python3
"""Validate public yearbook JSON before publishing."""

from __future__ import annotations

import json
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


def main() -> None:
    errors = validate_year(2025) + validate_year(2026)
    if errors:
        raise SystemExit("\n".join(errors))
    print("Yearbook data validation passed for 2025 and 2026.")


if __name__ == "__main__":
    main()
