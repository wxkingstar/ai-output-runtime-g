# Invalid AIO Example

This file should fail validation because AIO string fields cannot contain HTML.

```aio:callout@1
{
  "tone": "warning",
  "title": "<b>Unsafe</b>",
  "body": "HTML is not allowed in AIO string fields."
}
```

