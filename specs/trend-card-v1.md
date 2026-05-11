# aio:trend-card@1

Status: candidate (introduced in v0.4.0).

Use `aio:trend-card@1` for headline metrics that need a delta (period-over-period change) and/or a short trend sparkline. It is the upgrade path from `metric-cards@1` for any weekly/monthly/dashboard surface where "how is this moving" is more important than "what is the number now."

## Required fields

- `items`: 1-8 metric items.

## Item fields

- `label` *(required)*: short metric name (≤ 80 chars).
- `value` *(required)*: number (preferred — format via `format`) or short string (≤ 40 chars).
- `format` *(optional)*: one of `raw`, `number`, `percent`, `compact`, or `currency:CCY` (ISO 4217). Numbers are rendered with the runtime locale.
- `delta` *(optional)*:
  - `value`: finite number (the delta to display).
  - `direction` *(optional)*: `up`, `down`, or `flat`. Inferred from the sign of `value` if omitted.
  - `format` *(optional)*: same as item.format. Defaults to `number`.
  - `label` *(optional)*: short qualifier (≤ 40 chars), e.g. `vs last week`.
- `spark` *(optional)*: 2-60 numbers; renders as a small SVG sparkline.
- `tone` *(optional)*: `neutral`, `good`, `warn`, or `bad`. Tones recolor the card border and sparkline.
- `note` *(optional)*: one-line context (≤ 140 chars).

## Optional document fields

- `title`: plain text (≤ 100 chars).
- `asOf`: short timestamp string (≤ 40 chars), e.g. `2026-05-09`. Rendered top-right as data-as-of stamp.

## When to use vs `metric-cards@1`

- `metric-cards@1`: small dashboards where the value alone is the story.
- `trend-card@1`: business reports where Δ, period comparison, and trend direction matter.

HTML in any string field is rejected.
