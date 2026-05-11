# aio:action-items@1

Status: candidate (introduced in v0.4.0).

Use `aio:action-items@1` for follow-up lists: postmortem action items, retro next-steps, weekly TODOs, audit findings remediation. Each item carries owner / due date / status / priority.

## Required fields

- `items`: 1-30 tasks.

## Item fields

- `task` *(required)*: task description (≤ 240 chars). Inline Markdown subset supported.
- `owner` *(optional)*: name or handle (≤ 60 chars).
- `due` *(optional)*: short date string (≤ 30 chars). Items with `due < today` and status not `done` are auto-highlighted as overdue.
- `status` *(optional)*: one of `todo` (default), `doing`, `done`, `blocked`.
- `priority` *(optional)*: one of `P0`, `P1`, `P2`, `P3`.

## Optional document fields

- `title`: plain text (≤ 100 chars).
- `asOf`: short timestamp string (≤ 40 chars).

HTML in any string field is rejected.
