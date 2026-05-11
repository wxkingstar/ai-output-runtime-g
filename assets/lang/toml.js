(function () {
  var spec = {
    name: "toml",
    aliases: ["toml"],
    rules: [
      ["cmt",  /#[^\n]*/],
      ["meta", /^\s*\[\[?[^\]\n]+\]\]?/m],
      ["str",  /"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:[^"\\\n]|\\.)*"|'[^'\n]*'/],
      ["key",  /^[ \t]*[A-Za-z_][\w.-]*(?=\s*=)|(?<=,\s*|\{\s*)[A-Za-z_][\w.-]*(?=\s*=)/m],
      ["bool", /\b(?:true|false)\b/],
      ["num",  /\b[+-]?\d[\d_]*(?:\.\d[\d_]*)?(?:[eE][+-]?\d+)?\b|\b0[xX][0-9a-fA-F_]+\b|\b0[oO][0-7_]+\b|\b0[bB][01_]+\b/]
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
