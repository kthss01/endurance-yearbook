#!/usr/bin/env python3
"""Build public, aggregate yearly summaries from a Strava activities export."""

from __future__ import annotations

import argparse
import csv
import json
from collections import defaultdict
from datetime import datetime, timedelta
from pathlib import Path


SPORT_GROUPS = {
    "cycling": {"Ride", "E-Bike Ride", "Virtual Ride"},
    "running": {"Run", "Virtual Run"},
    "swimming": {"Swim"},
    "walking": {"Walk", "Hike"},
    "mobility": {"Yoga", "Workout", "Stair-Stepper"},
}


def number(row: list[str], index: int) -> float:
    try:
        return float(row[index])
    except (ValueError, IndexError):
        return 0.0


def local_datetime(value: str) -> datetime:
    parsed = datetime.strptime(value, "%b %d, %Y, %I:%M:%S %p")
    return parsed + timedelta(hours=9)


def rounded(value: float, digits: int = 1) -> float:
    return round(value, digits)


def aggregate(rows: list[list[str]]) -> dict:
    return {
        "activityCount": len(rows),
        "distanceKm": rounded(sum(number(row, 17) for row in rows) / 1000),
        "movingHours": rounded(sum(number(row, 16) for row in rows) / 3600),
        "elevationGainM": round(sum(number(row, 20) for row in rows)),
    }


def build_summary(rows: list[list[str]], year: int) -> dict:
    yearly = [row for row in rows if row[1] and local_datetime(row[1]).year == year]
    dates = {local_datetime(row[1]).date().isoformat() for row in yearly}

    by_group: dict[str, list[list[str]]] = defaultdict(list)
    for row in yearly:
        for group, activity_types in SPORT_GROUPS.items():
            if row[3] in activity_types:
                by_group[group].append(row)
                break

    months = []
    for month in range(1, 13):
        month_rows = [row for row in yearly if local_datetime(row[1]).month == month]
        month_data = aggregate(month_rows)
        month_data["month"] = month
        month_data["activeDays"] = len({local_datetime(row[1]).date() for row in month_rows})
        month_data["sports"] = {
            group: aggregate([row for row in month_rows if row[3] in activity_types])
            for group, activity_types in SPORT_GROUPS.items()
        }
        months.append(month_data)

    distance_rows = [row for row in yearly if number(row, 17) > 0]
    elevation_rows = [row for row in yearly if number(row, 20) > 0]

    def record(row: list[str]) -> dict:
        return {
            "date": local_datetime(row[1]).date().isoformat(),
            "title": row[2],
            "activityType": row[3],
            "distanceKm": rounded(number(row, 17) / 1000, 2),
            "movingHours": rounded(number(row, 16) / 3600, 2),
            "elevationGainM": round(number(row, 20)),
        }

    summary = aggregate(yearly)
    summary.update(
        {
            "year": year,
            "timezone": "Asia/Seoul",
            "period": {
                "start": min(dates) if dates else None,
                "end": max(dates) if dates else None,
            },
            "activeDays": len(dates),
            "sports": {group: aggregate(group_rows) for group, group_rows in by_group.items()},
            "months": months,
            "records": {
                "longestDistance": record(max(distance_rows, key=lambda row: number(row, 17))) if distance_rows else None,
                "highestElevation": record(max(elevation_rows, key=lambda row: number(row, 20))) if elevation_rows else None,
            },
            "method": {
                "source": "Strava activities.csv",
                "dateRule": "Activity Date interpreted as UTC and converted to Asia/Seoul (+09:00)",
                "distanceRule": "Detailed Distance column in metres",
                "timeRule": "Detailed Moving Time column in seconds",
            },
        }
    )
    return summary


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("activities_csv", type=Path)
    parser.add_argument("year", type=int)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()

    with args.activities_csv.open(encoding="utf-8-sig", newline="") as source:
        rows = list(csv.reader(source))[1:]

    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(
        json.dumps(build_summary(rows, args.year), ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
