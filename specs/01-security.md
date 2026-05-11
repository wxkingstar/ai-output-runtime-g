# AIO Security Boundary v0.1

AI Output Runtime renders AI-authored content, so the default posture is strict data rendering.

Never supported:

- AI-generated HTML.
- AI-generated CSS.
- AI-generated JavaScript.
- Inline event handlers.
- `eval`, `new Function`, template expression evaluation, or dynamic script injection.
- `iframe`, `object`, `embed`, form submission, or arbitrary remote schema loading.
- `javascript:`, `data:`, or `file:` URLs.
- Arbitrary rich text fields.

Supported data types:

- Plain text.
- Numbers.
- Booleans.
- Arrays and objects that pass the relevant component schema.
- A restricted inline Markdown subset in explicitly documented fields: bold, inline code, and plain links when link fields are introduced by a future schema.

Validation requirements:

- Every stable component must define a JSON Schema.
- `additionalProperties` must be false for stable schemas.
- Every string field must define a maximum length.
- Every array field must define `maxItems`.
- Unknown or invalid AIO blocks must not crash the page.

