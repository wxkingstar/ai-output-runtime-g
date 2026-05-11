# aio:comparison@1

Status: candidate (introduced in v0.4.0).

Use `aio:comparison@1` for multi-option scoring: solution selection, competitor comparison, vendor evaluation, RFP scorecard. Each row is a dimension; each column is an option. One option can be flagged as recommended.

## Required fields

- `options`: 2-6 option names (≤ 60 chars each).
- `criteria`: 1-14 dimensions.

## Criteria fields

- `label` *(required)*: dimension name (≤ 80 chars).
- `values` *(required)*: array with the same length as `options`. Each entry is a string, number, or boolean (≤ 80 chars when stringified).
- `weight` *(optional)*: finite number. Rendered as a small badge after the label.
- `tone` *(optional)*: `good`, `warn`, `bad`, `neutral`. Tints the row.

## Optional document fields

- `title`: plain text (≤ 100 chars).
- `subtitle`: plain text (≤ 160 chars).
- `asOf`: short timestamp string (≤ 40 chars).
- `recommended`: one of the option strings; the column gets a green border + ★ badge.

HTML in any cell is rejected. Short strings get the auto-tone badge treatment (high/medium/low) from `table@1`.
