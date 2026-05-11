# aio:waterfall@1

Status: candidate (introduced in v0.4.0).

Use `aio:waterfall@1` for additive/subtractive breakdowns: P&L bridge, variance analysis, attribution decomposition, period-over-period change explanation. The chart shows how a starting value moves through increments and decrements to reach an ending value.

## Required fields

- `bars`: 2-14 bars in order. First bar **must** have `kind: "start"`.

## Bar fields

- `label` *(required)*: short bar label (≤ 60 chars).
- `value` *(required)*: finite number. For `up` / `down` / `subtotal` / `end` kinds, the sign is informational (the renderer treats `down` as negative regardless).
- `kind` *(required)*: one of:
  - `start` — first bar, drawn from 0 to value. Resets cumulative to value.
  - `up` — positive contribution. Drawn on top of cumulative.
  - `down` — negative contribution. Drawn below cumulative (typically `value` is negative).
  - `subtotal` — running total marker. Drawn from 0 to value. Bar is colored as accent.
  - `end` — final total. Drawn from 0 to value. Same treatment as `start`.
- `note` *(optional)*: one-line context (≤ 140 chars).

## Optional document fields

- `title`: plain text (≤ 100 chars).
- `subtitle`: plain text (≤ 160 chars).
- `asOf`: short timestamp (≤ 40 chars).
- `format`: `raw` / `number` / `percent` / `compact` / `currency:CCY`.

Connector dotted lines between adjacent `up` / `down` bars are auto-drawn. HTML is rejected.
