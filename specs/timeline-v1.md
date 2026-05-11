# aio:timeline@1

Status: candidate (introduced in v0.4.0).

Use `aio:timeline@1` for chronological narratives: incident timelines, postmortems, weekly key events, retrospective recaps, release histories.

## Required fields

- `items`: 1-30 events.

## Item fields

- `time` *(required)*: short timestamp string (≤ 60 chars). Free-form: `2026-05-09 10:23`, `10:23 UTC`, `T+0`, etc.
- `title` *(required)*: short event title (≤ 120 chars).
- `body` *(optional)*: explanation (≤ 400 chars). Inline Markdown subset supported.
- `tone` *(optional)*: `info` (default), `good`, `warn`, `bad`, `neutral`. Colors the dot.

## Optional document fields

- `title`: plain text (≤ 100 chars).
- `asOf`: short timestamp string (≤ 40 chars).

HTML in any string field is rejected. Items render in source order (no sorting).
