(function () {
  var spec = {
    name: "go",
    aliases: ["go", "golang"],
    rules: [
      ["cmt",  /\/\/[^\n]*|\/\*[\s\S]*?\*\//],
      ["str",  /"(?:[^"\\\n]|\\.)*"|`[^`]*`|'(?:\\.|[^'\\\n])'/],
      ["kw",   /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go|goto|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/],
      ["bool", /\b(?:true|false|nil|iota)\b/],
      ["type", /\b(?:bool|byte|complex64|complex128|error|float32|float64|int|int8|int16|int32|int64|rune|string|uint|uint8|uint16|uint32|uint64|uintptr|any)\b/],
      ["fn",   /\b(?:make|new|len|cap|append|copy|delete|panic|recover|print|println|close|fmt|Println|Printf|Sprintf|Errorf)\b/],
      ["num",  /\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0[xX][0-9a-fA-F]+\b/]
    ]
  };
  if (typeof window !== "undefined") {
    if (window.AIOutputRuntime && window.AIOutputRuntime.registerLanguage) {
      window.AIOutputRuntime.registerLanguage(spec);
    } else {
      (window.__AIO_LANG_QUEUE = window.__AIO_LANG_QUEUE || []).push(spec);
    }
  }
})();
