---
name: ai-output-runtime-g
description: Use when the user asks for AIO, AI Output Runtime, aio:name@major output, structured AI reports, or wants to validate/render AIO Markdown. Compatible with Claude Code and other agents that install skills from GitHub.
---

# AI Output Runtime

Use this skill when the user wants AI output to follow AIO v0.1, or when they ask for output that can be rendered by AI Output Runtime.

## Output Contract

Write normal CommonMark Markdown by default.

Use AIO fenced code blocks only when structured rendering is useful:

- `aio:table@1` for structured rows and columns.
- `aio:metric-cards@1` for compact summary metrics.
- `aio:callout@1` for final recommendations, risks, warnings, or important notes.

## Hard Rules

- AIO block info strings must use `aio:name@major`.
- AIO block bodies must be valid JSON.
- Do not write JSON comments or trailing commas.
- Do not output HTML, CSS, JavaScript, iframe, style, event handlers, template expressions, or custom components.
- Do not include `<` or `>` in AIO string fields.
- If unsure whether a component is needed, use plain Markdown.

## Stable Components

### `aio:metric-cards@1`

```aio:metric-cards@1
{
  "items": [
    {
      "label": "Recommendation",
      "value": "Adopt",
      "note": "Fits v0.1 stable scope",
      "tone": "good"
    }
  ]
}
```

### `aio:callout@1`

```aio:callout@1
{
  "tone": "success",
  "title": "Final recommendation",
  "body": "Adopt AIO v0.1 for structured AI reports."
}
```

### `aio:table@1`

```aio:table@1
{
  "columns": ["Option", "Benefit", "Risk"],
  "rows": [
    ["Markdown", "Readable", "Weak interaction"],
    ["AIO", "Validated structure", "Requires runtime"]
  ]
}
```

## Local Tools

Validate a Markdown file:

```bash
node SKILL_DIR/scripts/aio.mjs validate report.md
```

Render a Markdown file:

```bash
node SKILL_DIR/scripts/aio.mjs render report.md --out report.html
```

Use `SKILL_DIR/assets/ai-output-runtime.js` as the browser runtime when generating an HTML preview.

## When Writing Reports

Prefer this structure:

1. Markdown heading and one short prose summary.
2. Optional `aio:metric-cards@1` for key status.
3. Optional `aio:callout@1` for final recommendation or warnings.
4. Optional `aio:table@1` for comparisons, risks, or audit rows.
5. Plain Markdown conclusion.

