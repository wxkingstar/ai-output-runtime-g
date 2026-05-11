# aio:gauge@1

Status: candidate (introduced in v0.4.0).

Use `aio:gauge@1` for completion / attainment dashboards: KPI dashboards, OKR scorecards, capacity utilization. Each item renders a half-circle arc filled to the progress fraction with the value centered.

## Required fields

- `items`: 1-8 gauges.

## Item fields

- `label` *(required)*: short metric name (≤ 80 chars).
- `value` *(required)*: finite number.
- `min` *(optional)*: scale floor. Default `0`.
- `max` *(optional)*: scale ceiling. Default `100`, or `1` when `format` is `percent`.
- `target` *(optional)*: target value. Used for auto-tone (good if value/target ≥ 0.9, warn ≥ 0.7, bad otherwise) and renders a small tick on the arc. Default `max`.
- `format` *(optional)*: `raw` / `number` / `percent` / `compact` / `currency:CCY`.
- `tone` *(optional)*: explicit `neutral` / `good` / `warn` / `bad`. Overrides auto-tone.
- `note` *(optional)*: one-line context (≤ 140 chars).

## Optional document fields

- `title`: plain text (≤ 100 chars).
- `asOf`: short timestamp (≤ 40 chars).

HTML in any string field is rejected. `max > min` enforced by the CLI.
