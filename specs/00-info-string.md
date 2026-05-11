# AIO Info String v0.1

AI Output Runtime only claims fenced code blocks whose info string matches:

```text
aio:<component-name>@<major>[.<minor>]
```

Examples:

```text
aio:table@1
aio:metric-cards@1
aio:callout@1
```

Rules:

- `aio:` is the namespace. Blocks outside this namespace are ordinary Markdown code blocks.
- `<component-name>` uses lowercase letters, digits, and hyphens.
- `<major>` is required and starts at `1`.
- Minor versions are optional. Minor changes may only add optional fields.
- Breaking changes require a new major version.
- Unknown AIO blocks must degrade to the original fenced code block with a visible validation error.
- AIO block bodies must be valid JSON. Comments, trailing commas, YAML, Markdown tables, and JavaScript expressions are invalid.

