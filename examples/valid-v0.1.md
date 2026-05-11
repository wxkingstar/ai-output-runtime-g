# Valid AIO v0.1 Example

```aio:metric-cards@1
{
  "items": [
    {
      "label": "Checks",
      "value": "3",
      "note": "All passed",
      "tone": "good"
    }
  ]
}
```

```aio:callout@1
{
  "tone": "success",
  "title": "Ready",
  "body": "The document is valid AIO v0.1."
}
```

```aio:table@1
{
  "columns": ["Name", "Status"],
  "rows": [
    ["table", "stable"],
    ["metric-cards", "stable"],
    ["callout", "stable"]
  ]
}
```

