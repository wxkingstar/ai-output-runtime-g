# Changelog

All notable changes to AI Output Runtime are documented here. The project follows [Semantic Versioning](https://semver.org/).

## v0.2.0 — 2026-05-11

### Added

- **Candidate component `aio:chart@1`** — line / bar / area / pie / donut charts. Schema-constrained data emission (no formatter callbacks, no colour overrides, no stacked variants). Pure SVG rendering, zero new dependencies, theme-aware via CSS variables. See `specs/chart-v1.md`.
- **Dark / light dual theme** in the runtime. Driven by `prefers-color-scheme` by default; force via `options.theme` at render time, the `--theme` CLI flag, or the toolbar toggle button. Six-colour chart palette adapts automatically.
- **Print stylesheet** (`@media print`): hides chrome, forces light palette, avoids page breaks inside tables / charts / callouts, expands link targets.
- **i18n support** — built-in `en` and `zh-CN` locale tables. `options.locale`, the `--lang` CLI flag, or `<html lang>` selects the active locale. All hardcoded UI strings (filter placeholder, TOC heading, toolbar buttons, default component titles) are now translatable.
- **`docs/index.html`** landing page and `docs/demo-charts.html` chart showcase, both rendered with the inline runtime so they work offline. `docs/.nojekyll` prevents Jekyll from rewriting the site.
- **`package.json` `files[]` whitelist** so `npm pack` only ships the runtime, scripts, schemas, specs, examples, and skill metadata.

### Changed

- **SKILL.md output policy flipped** from "Markdown by default, occasional AIO" to "default AIO whenever the content shape is structured: comparisons, conclusions, recommendations, metric summaries, status overviews, risk lists, audit findings". The skill description now triggers on natural report-shaped requests (report, analysis, comparison, summary, status, review, audit, dashboard, postmortem, plus Chinese equivalents).
- **JSON schemas** gained a `description` field clarifying that cross-field invariants (e.g., table row length must match `columns.length`) are enforced by the CLI validator at `scripts/aio.mjs`. The validator is the source of truth; schemas describe shape only.
- **Renderer hardening**: removed four unregistered "ghost" renderers (`decision`, `matrix`, `tabs`, `flow`) and their CSS, dropping 231 lines of dead code. `renderTabs` in particular shipped an interactive click handler that violated the no-JS-on-AI-content principle.
- **README repositioned** as agent-agnostic (Claude Code / Codex / generic) instead of Claude-specific. "CommonMark Markdown" wording corrected to "CommonMark subset" to match the actual implementation.
- **Runtime bundle grew from ~32 KB to ~38 KB** (chart code + i18n + theme).

### Fixed

- **`aio render --runtime` attribute injection** (security): the runtime source is now sanitized — quotes, angle brackets, backslashes, whitespace, control characters, path traversal, and non-HTTPS URL schemes are all rejected. The final `<script src>` value is HTML-escaped. Previously `--runtime 'x" onerror="alert(1)'` could land arbitrary JS in rendered HTML.
- **CLI input size guard**: 4 MiB cap on `aio validate` / `aio render` input matches the browser runtime's existing `MAX_BLOCK_BYTES` safeguard.
- `--lang` BCP47 validation; `--theme` enum validation.
- Literal control-byte regex in `scripts/aio.mjs` replaced with explicit `\uXXXX` escapes so the file is no longer detected as binary by git.

## v0.1.1 — 2026-05-11

### Changed

- `aio render` output now references the jsDelivr CDN by default (pinned to `v0.1.1`), fixing the previous broken `../assets/...` relative path that only worked when `--out` targeted `dist/`.
- New CLI flags: `--inline-runtime` (embed the bundled runtime), `--runtime <url|path>` (custom source). `--out` is now optional and defaults to `<input>.html` next to the source.
- `package.json` test split into `test:valid` / `test:invalid`. `engines.node >= 18` declared.

### Added

- `examples/report-demo.md` — mixed-component report fixture, wired into `npm run test:valid`.
- README expanded with default / inline / custom-runtime render examples and Subresource Integrity guidance for the CDN tag.

## v0.1.0 — Initial release

- Three stable components: `aio:table@1`, `aio:metric-cards@1`, `aio:callout@1`.
- Zero-dependency CLI validator + browser runtime.
- Specs, schemas, registry, and agent skill metadata.
