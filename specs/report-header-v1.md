# aio:report-header@1

Status: candidate (introduced in v0.4.0).

Use `aio:report-header@1` as the first block of a formal report (weekly/monthly/quarterly review, postmortem, audit). It renders as a gradient hero with metadata chips so the reader instantly knows period / author / status / classification.

The CLI also auto-emits this block from a markdown YAML frontmatter — you can author either the block directly or the frontmatter, not both.

## Required fields

- `title`: plain text (≤ 140 chars).

## Optional fields

- `subtitle`: plain text (≤ 200 chars).
- `period`: short period label (≤ 60 chars), e.g. `W19 · 2026`, `2026 Q1`, `2026-05`.
- `author`: name or handle (≤ 80 chars).
- `status`: one of `draft`, `review`, `final`, `archived`.
- `dataAsOf`: short timestamp (≤ 40 chars).
- `classification`: one of `public`, `internal`, `confidential`, `restricted`.
- `badges`: up to 6 extra chips: `[{ label, tone? }]` where tone is one of `info`, `good`, `warn`, `bad`, `neutral`.

## Frontmatter shortcut

```markdown
---
title: Q1 Business Review
period: 2026 Q1
author: Wang Xin
status: final
data-as-of: 2026-04-30
classification: internal
---
```

The CLI parses this and prepends an `aio:report-header@1` block automatically. If the markdown already contains an explicit `aio:report-header@1` block, the frontmatter is ignored to avoid duplication.

HTML in any string field is rejected.
