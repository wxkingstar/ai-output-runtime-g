---
name: new-candidate
description: Scaffold a new AIO candidate component end-to-end — spec, JSON schema, registry entry, CLI validator, JS renderer, fixture, and SKILL.md update. Use when the user says "add a candidate", "new aio component", "scaffold timeline / progress / code-diff", or otherwise wants to extend the protocol.
disable-model-invocation: true
---

You are running the `/new-candidate` skill. Adding a component touches **seven** places in lockstep. Miss one and either the agent can't emit it, the CLI rejects it, or the runtime crashes on it.

Args (`$ARGUMENTS`): the proposed component name (kebab-case, single word preferred), e.g. `timeline`, `progress`, `code-diff`. If missing, ask the user.

## Step 0 — sanity check the name

```bash
node -e "const r = require('./aio-registry.json'); const all = [...r.stable, ...r.candidate].map(c => c.info); console.log(all.join('\\n'))"
```

The new name must not collide with any `info` in `stable` or `candidate`. The schema component id will be `<name>-v1.schema.json`, the spec `<name>-v1.md`, the info string `aio:<name>@1`.

## Step 1 — design before code

Before writing any file, get clear answers from the user. Don't guess — wrong data shape now means a breaking `@2` later.

Ask:
1. **What's the data shape?** (e.g., for timeline: array of events with `date`, `title`, `description`; for progress: array of steps each with `label`, `value` 0–100, optional `tone`).
2. **What are the limits?** Max items, max string length per field, what tones (if any), what numeric ranges.
3. **What's the cross-field invariant?** (e.g., timeline events must be in chronological order; progress values must be 0–100). JSON Schema can't express most of these — they go in the CLI validator.
4. **What does it render as?** A short description of the visual. The runtime renderer should be **pure SVG / static HTML, no JS**.
5. **What does it intentionally NOT support?** (Stacked variants, callbacks, custom colours, etc.) Write these into the spec's "Intentionally excluded" section so future contributors don't add scope creep.

## Step 2 — write the spec at `specs/<name>-v1.md`

Follow the structure of `specs/chart-v1.md` (the most recently-added candidate). Required sections:

- Title line: `# aio:<name>@1 (candidate)`
- Status banner: "candidate — may receive optional fields before promotion to stable"
- Purpose paragraph
- Schema summary (JSON example)
- Hard rules list (matches what the CLI validator will enforce)
- "Intentionally excluded" list
- Examples (one per variant if applicable)
- Renderer contract (what the reference renderer guarantees; what third parties may differ on)

## Step 3 — write the schema at `schemas/<name>-v1.schema.json`

Mirror the structural rules. Always include:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://ai-output.dev/schemas/<name>-v1.schema.json",
  "title": "aio:<name>@1",
  "description": "Structural shape for aio:<name>@1 blocks. Cross-field invariants are enforced by the AIO validator at scripts/aio.mjs and are the source of truth: <list them here>.",
  "type": "object",
  "additionalProperties": false,
  ...
}
```

Every string field that holds AI-emitted text must include `"pattern": "^[^<>]*$"` and a sensible `maxLength`. Numeric fields that must be finite go through the CLI's `finiteNumber` helper, since `{ "type": "number" }` permits `Infinity`/`NaN` in JSON.

## Step 4 — add the registry entry

In `aio-registry.json`, append to the `candidate` array:

```json
{
  "info": "aio:<name>@1",
  "schema": "schemas/<name>-v1.schema.json",
  "spec": "specs/<name>-v1.md",
  "introducedIn": "<current-or-next-version>",
  "note": "Candidate. Schema is final but may receive optional fields in minor revisions before promotion to stable."
}
```

## Step 5 — add the CLI validator at `scripts/aio.mjs`

Pattern after `validateChart` (the most recent addition). Use the existing helpers: `rejectUnknownKeys`, `plain`, `requireArray`, `finiteNumber`, `fail`. Register in the `validators` Map:

```js
const validators = new Map([
  ["table@1", validateTable],
  ["metric-cards@1", validateMetricCards],
  ["callout@1", validateCallout],
  ["chart@1", validateChart],
  ["<name>@1", validate<Name>]
]);
```

The validator is the **source of truth** for cross-field invariants. JSON Schema can't express row-length-equals-columns or non-empty unions — those go here.

## Step 6 — add the JS renderer at `assets/ai-output-runtime.js`

Follow the same pattern: a `validate<Name>` function (mirroring the CLI validator, throwing `Error`), then a `render<Name>(data)` function that returns an HTML string via `componentShell()`. Register in `COMPONENTS`:

```js
COMPONENTS.set("<name>@1", (_type, data) => render<Name>(data));
```

**Constraints:**
- Pure SVG / static HTML. No `<script>`, no event handlers, no inline JS.
- Colours come from CSS variables — never hardcode. Use `--ai-chart-1` through `--ai-chart-6` for series colours, `--ai-green`/`--ai-yellow`/`--ai-red`/`--ai-accent` for tone overrides.
- Long text must truncate with ellipsis, not overflow or rotate.
- Both light and dark themes must work — the existing CSS variables already cover both palettes.

If the component needs new CSS, add it before the `@media print` block in the `css` string, and add `@media print` rules so the component prints sensibly (no shadows, no chrome, page-break-inside avoidance).

## Step 7 — add a fixture at `examples/<name>-demo.md`

A Markdown file demonstrating each variant of the new component. Wire it into `package.json` `test:valid`:

```bash
node scripts/aio.mjs validate examples/<name>-demo.md
```

If the component should appear in the live site, also reference it from `examples/landing.md` and update `render:site`.

## Step 8 — update `SKILL.md`

Add the new component under the "Components" section with:

- One short paragraph on when to use it
- An example block showing the JSON shape
- The hard-constraints list
- A mention that it's a **candidate** (may change)

Also update the "Hard Rules" section's component list:

```markdown
- AIO components in scope:
  - **stable**: `table@1`, `metric-cards@1`, `callout@1`
  - **candidate**: `chart@1`, `<name>@1`
```

## Step 9 — verify and commit

```bash
npm test                # validates the new fixture against the new validator
npm run render:site     # confirms the new renderer produces no JS errors
```

If both pass, commit. **Do not** bump the package version here — that happens at the next release via `/release`. The new component lands on `main`, and the next `vX.Y.0` release exposes it through the CDN.

## Step 10 — ask about adding fuzz cases

Walk through with the user: what are the 5–10 inputs that **should fail** validation (NaN, length mismatch, HTML in string, etc.)? Add them as ad-hoc shell tests now, or note them for inclusion when a proper fuzz harness lands.

## Hard rules

- **The seven artifacts (spec, schema, registry, CLI validator, JS renderer, fixture, SKILL.md) must all land in the same commit.** Otherwise the CLI accepts something the runtime can't render, or vice versa.
- **Candidate, not stable.** Even if the user says "make it stable", default to candidate. Per `CONTRIBUTING.md`, stable promotions require demonstrated adoption — the candidate buffer protects against breaking changes.
- **No new dependencies.** The runtime is zero-deps; the CLI is zero-deps. If the new component genuinely requires a chart-library equivalent, raise the trade-off to the user before adding any import.
- **Never use raw colour hex values in the JS renderer.** Always go through CSS variables, so light/dark themes stay in sync.
