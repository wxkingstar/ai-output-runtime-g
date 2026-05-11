# aio:heatmap@1

Status: candidate (introduced in v0.4.0).

Use `aio:heatmap@1` for 2D density / intensity visualizations: orders by hour × day, sales by region × category, error rate by service × endpoint, retention cohort × week.

## Required fields

- `xLabels`: 1-32 column labels (≤ 24 chars each).
- `yLabels`: 1-32 row labels (≤ 24 chars each).
- `rows`: array of length `yLabels.length`. Each row is an array of finite numbers with length `xLabels.length` (CLI enforces both invariants).

## Optional fields

- `title`: plain text (≤ 100 chars).
- `subtitle`: plain text (≤ 160 chars).
- `asOf`: short timestamp (≤ 40 chars).
- `format`: `raw` / `number` / `percent` / `compact` / `currency:CCY`. Used for the tooltip / legend numbers.
- `tone`: base color hue. One of `accent` (default, blue), `good` (green), `warn` (orange), `bad` (red), `neutral` (gray).

Each cell's opacity scales from `0.08` to `1.0` between the data's min and max. A legend strip with min / max labels is rendered below the chart. HTML is rejected.
