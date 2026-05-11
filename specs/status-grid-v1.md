# aio:status-grid@1

Status: candidate (introduced in v0.4.0).

Use `aio:status-grid@1` for state-of-the-world dashboards: service health, project portfolio, business line scorecards, environment status. Each card encodes a discrete status (good/warn/bad/neutral/info), an optional headline number, and a one-line explanation.

## Required fields

- `items`: 1-12 cards.

## Item fields

- `label` *(required)*: short title (≤ 80 chars).
- `status` *(required)*: one of `good`, `warn`, `bad`, `neutral`, `info`.
- `value` *(optional)*: short headline string (≤ 60 chars), e.g. `99.9%`, `¥7.2M`, `Live`.
- `note` *(optional)*: explanation (≤ 140 chars).

## Optional document fields

- `title`: plain text (≤ 100 chars).
- `asOf`: short timestamp string (≤ 40 chars). Rendered top-right.

## When to use vs `trend-card@1`

- `status-grid@1`: state — green/yellow/red on multiple items.
- `trend-card@1`: change — Δ + sparkline per metric.

HTML in any string field is rejected.
