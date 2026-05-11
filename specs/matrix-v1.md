# aio:matrix@1

Status: candidate (introduced in v0.4.0).

Use `aio:matrix@1` for 2×2 quadrant analyses: risk matrix (likelihood × impact), prioritization (impact × effort), BCG growth-share, RICE scores, employee performance review. Items are plotted as labeled dots inside four named quadrants.

## Required fields

- `items`: 1-24 plotted items.

## Item fields

- `label` *(required)*: short name (≤ 40 chars).
- `x` *(required)*: finite number in `[xMin, xMax]`.
- `y` *(required)*: finite number in `[yMin, yMax]`.
- `tone` *(optional)*: `neutral` / `good` / `warn` / `bad`. Colors the dot.
- `note` *(optional)*: tooltip context (≤ 120 chars).

## Optional document fields

- `title`: plain text (≤ 100 chars).
- `subtitle`: plain text (≤ 160 chars).
- `asOf`: short timestamp (≤ 40 chars).
- `xLabel`, `yLabel`: axis names (≤ 40 chars each). Rendered with arrow `→`.
- `xMin` *(default 0)*, `xMax` *(default 10)*, `yMin` *(default 0)*, `yMax` *(default 10)*. `xMax > xMin` and `yMax > yMin` are enforced.
- `quadrants`: exactly 4 strings if provided. Order: **top-left, top-right, bottom-left, bottom-right** (≤ 60 chars each).

Items outside `[xMin, xMax]` × `[yMin, yMax]` are rejected by the CLI. HTML is rejected.
