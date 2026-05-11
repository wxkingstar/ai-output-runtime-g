---
name: release
description: Cut a new AIO release (patch, minor, or major). Bumps version across every lockstep file, regenerates the docs site, commits, tags, pushes, and verifies the CDN. Use when the user says "release v0.x.y", "ship a patch", "cut a minor", or "tag and push".
disable-model-invocation: true
---

You are running the `/release` skill for `ai-output-runtime`. Releases are manual and lockstep — there is no CI automation. Skipping a step leaves the CDN, README, and CHANGELOG out of sync, which is a launch blocker.

Args (`$ARGUMENTS`): one of `patch`, `minor`, `major`, or an explicit version like `0.3.1`. Default to `patch` if missing.

## Step 1 — determine the new version

```bash
node -e "console.log(require('./package.json').version)"
```

Apply the bump from `$ARGUMENTS`:
- `patch` → x.y.Z+1
- `minor` → x.Y+1.0
- `major` → X+1.0.0
- explicit `a.b.c` → use as-is

Confirm with the user before continuing if `$ARGUMENTS` was empty or ambiguous.

## Step 2 — verify the working tree is clean

```bash
git status --short
```

If anything is dirty, **stop**. Either commit/stash first, or tell the user what's in the way. Never start a release on top of unrelated changes.

## Step 3 — bump version in 3 source files

All three values must match.

1. `package.json` → `"version": "<new>"`
2. `aio-registry.json` → `"version": "<new>"`
3. `scripts/aio.mjs` → `const RUNTIME_VERSION = "v<new>";` (note the `v` prefix)

## Step 4 — rewrite every `@v<previous>` reference to `@v<new>`

These files reference the CDN URL with the version pinned. **Do not** edit `CHANGELOG.md` here — its `@v<previous>` references are historical.

```bash
PREV="<previous>"; NEW="<new>"
grep -rln "@v$PREV" --include="*.md" --include="*.json" --include="*.mjs" --include="*.js" . | grep -v "CHANGELOG.md\|node_modules\|.gstack\|docs/.*\.html"
```

Expected file list:
- `README.md`, `README.zh-CN.md`, `README.ja.md`
- `SKILL.md`
- `examples/landing.md`
- `docs/launch-kit.md`, `docs/launch-plan.md`, `docs/quickstart.md`

For each, replace all occurrences of `@v<previous>` with `@v<new>` using the Edit tool with `replace_all: true`.

After replacement, re-run the grep above — it must return zero lines (excluding CHANGELOG).

## Step 5 — add a CHANGELOG entry

Insert a new section at the top of `CHANGELOG.md` (under the "All notable changes…" intro, above the previous version):

```markdown
## v<new> — YYYY-MM-DD

### Added / Changed / Fixed / Security

- Concrete bullets describing what shipped. Reference file paths and feature names.
```

Use the user's commit log since the previous tag to seed the entries:

```bash
git log v<previous>..HEAD --oneline
```

Categorize each commit into Added / Changed / Fixed / Security. Drop chores and merge commits.

## Step 6 — run tests + regenerate the site

```bash
npm test                # must pass
npm run render:site     # rewrites docs/index.html, demo-zh.html, demo-charts.html with the new inline runtime
```

If either fails, fix the issue before continuing. Do not push a broken release.

## Step 7 — commit

```bash
git add -A
git diff --cached --stat   # sanity-check what's being committed
```

Write the commit message to a temp file (avoids shell escaping bugs with multi-line bodies) and commit with `-F`:

```bash
git commit -F /tmp/aio-release-<new>.txt
```

Commit message template:

```
release: v<new>

<one paragraph describing the release's theme>

<bullet list of the headline changes>

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
```

## Step 8 — tag and push

```bash
git tag -a v<new> -m "v<new> — <one-line summary>"
git push origin main
git push origin v<new>
```

Use an annotated tag (`-a`), never a lightweight tag.

## Step 9 — verify CDN

jsDelivr propagates new tags in seconds.

```bash
curl -sI https://cdn.jsdelivr.net/gh/wxkingstar/ai-output-runtime@v<new>/assets/ai-output-runtime.js | head -3
```

Must return `HTTP/2 200`. Then grep the body for a marker that proves the new code is live (e.g., a new symbol introduced in this release):

```bash
curl -s https://cdn.jsdelivr.net/gh/wxkingstar/ai-output-runtime@v<new>/assets/ai-output-runtime.js | grep -c "<new-symbol>"
```

Should print a non-zero number.

## Step 10 — verify Pages (optional, async)

GitHub Pages takes 1–2 minutes to rebuild. If the user wants verified visual output for this release, poll the Pages site:

```bash
until curl -s https://wxkingstar.github.io/ai-output-runtime/ | grep -q "<new-marker>"; do sleep 5; done
```

Use `Bash run_in_background: true` for this — it's a one-shot wait.

## Step 11 — optionally create a GitHub Release

```bash
gh release create v<new> --title "v<new> — <theme>" --notes-file /tmp/aio-release-notes-<new>.md
```

The release notes file should be a Markdown summary suitable for a public release page (highlights + CDN URL + install command). Use CHANGELOG content as the seed but polish for a wider audience.

## Step 12 — report back

Tell the user:
- The new CDN URL
- The new tag URL on GitHub
- Whether Pages has rebuilt yet (live demo)
- The CHANGELOG section that shipped

## Hard rules

- **Never force-push a tag.** If you tagged the wrong commit, ship the next patch instead.
- **Never edit `CHANGELOG.md` historical `@v` references** — they are part of the record.
- **Never skip Step 4's grep verification** — a missed file means the CDN URL in the README points to the wrong runtime.
- **Never skip `npm run render:site`** — `docs/*.html` are committed artifacts; if they don't reflect the new runtime the Pages site is wrong.
- **Never amend the release commit after pushing the tag** — the tag will then point to a commit that's no longer on `main`.
