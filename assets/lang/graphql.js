(function () {
  var spec = {
    name: "graphql",
    aliases: ["graphql", "gql"],
    rules: [
      ["cmt",  /#[^\n]*/],
      ["str",  /"""[\s\S]*?"""|"(?:[^"\\\n]|\\.)*"/],
      ["meta", /@[A-Za-z_]\w*/],
      ["var",  /\$[A-Za-z_]\w*/],
      ["kw",   /\b(?:query|mutation|subscription|fragment|on|type|input|enum|union|interface|scalar|schema|implements|extend|directive|repeatable|true|false|null)\b/],
      ["type", /\b(?:Int|Float|String|Boolean|ID)\b/],
      ["bool", /\b(?:true|false|null)\b/],
      ["num",  /\b-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/]
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
