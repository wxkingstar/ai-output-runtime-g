# aio:metric-cards@1

Use `aio:metric-cards@1` for compact report summaries.

Required fields:

- `items`: array of 1 to 8 metric cards.
- Each item requires `label` and `value`.

Optional fields:

- Top-level `title`.
- Per-item `note`.
- Per-item `tone`: `neutral`, `good`, `warn`, or `bad`.

All fields are plain text. HTML is not allowed.

