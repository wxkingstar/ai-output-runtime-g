# aio:table@1

Use `aio:table@1` for rows and columns that should render as a table.

Required fields:

- `columns`: array of 1 to 12 strings.
- `rows`: array of up to 100 rows. Each row length must equal `columns.length`.

Optional fields:

- `title`: plain text.
- `subtitle`: plain text.
- `caption`: plain text.
- `filterable`: boolean. Defaults to true.

Cells may be strings, numbers, or booleans. HTML is not allowed.

