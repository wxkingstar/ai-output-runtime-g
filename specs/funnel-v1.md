# aio:funnel@1

Status: candidate (introduced in v0.4.0).

Use `aio:funnel@1` for conversion funnels: marketing → sales pipeline, signup → activation → paid, multi-step UX flows. Each stage is a horizontal bar whose width is proportional to its value, with step-over-step and overall-vs-start conversion percentages auto-computed.

## Required fields

- `stages`: 2-8 funnel stages in order (top to bottom).

## Stage fields

- `label` *(required)*: stage name (≤ 80 chars).
- `value` *(required)*: non-negative finite number. Must be ≤ the previous stage value (the CLI enforces monotonic decrease).
- `tone` *(optional)*: `neutral` / `good` / `warn` / `bad`. Colors the bar.
- `note` *(optional)*: one-line context (≤ 140 chars).

## Optional document fields

- `title`: plain text (≤ 100 chars).
- `subtitle`: plain text (≤ 160 chars).
- `asOf`: short timestamp (≤ 40 chars).
- `format`: `raw` / `number` / `percent` / `compact` / `currency:CCY`. Default `raw`.

The runtime auto-computes "step" (vs previous) and "overall" (vs first) percentages — no need to encode them. HTML is rejected.
