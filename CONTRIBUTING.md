# Contributing

This project is intentionally small in v0.1. New stable components should be rare.

## Component Lifecycle

```text
draft -> candidate -> stable -> deprecated
```

Rules:

- Stable components require a spec file, schema, examples, and validator support.
- Stable component schemas must use `additionalProperties: false`.
- Breaking changes require a new major version, for example `aio:table@2`.
- Unknown blocks must degrade safely.

## Before Opening a PR

Run:

```bash
npm test
```

Include:

- A valid fixture if behavior is added.
- An invalid fixture if validation changes.
- Spec and schema updates for any component changes.

