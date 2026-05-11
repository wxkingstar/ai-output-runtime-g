(function () {
  var spec = {
    name: "csharp",
    aliases: ["csharp", "cs", "c#"],
    rules: [
      ["cmt",  /\/\/[^\n]*|\/\*[\s\S]*?\*\//],
      ["str",  /\$?@?"(?:[^"\\\n]|""|\\.)*"|'(?:\\.|[^'\\\n])'/],
      ["meta", /\[[A-Za-z_][\w.]*(?:\([^)\n]*\))?\]/],
      ["kw",   /\b(?:abstract|as|base|break|case|catch|checked|class|const|continue|default|delegate|do|else|enum|event|explicit|extern|finally|fixed|for|foreach|goto|if|implicit|in|interface|internal|is|lock|namespace|new|operator|out|override|params|private|protected|public|readonly|ref|return|sealed|sizeof|stackalloc|static|struct|switch|this|throw|try|typeof|unchecked|unsafe|using|virtual|volatile|while|async|await|var|dynamic|yield|partial|where|select|from|let|orderby|join|on|equals|by|into|group|nameof|when|init|record|with|global|file|required|scoped)\b/],
      ["bool", /\b(?:true|false|null)\b/],
      ["type", /\b(?:void|bool|byte|sbyte|char|short|ushort|int|uint|long|ulong|float|double|decimal|object|string|String|Int32|Int64|UInt32|UInt64|Boolean|Char|Object|List|Dictionary|HashSet|IEnumerable|ICollection|IList|IDictionary|Task|ValueTask|Action|Func|Predicate|Lazy|Nullable|Span|Memory|ReadOnlySpan)\b/],
      ["num",  /\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+)?[fFdDmMlLuU]*\b|\b0[xX][0-9a-fA-F_]+[lLuU]*\b/]
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
