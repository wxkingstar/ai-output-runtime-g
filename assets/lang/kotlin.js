(function () {
  var spec = {
    name: "kotlin",
    aliases: ["kotlin", "kt"],
    rules: [
      ["cmt",  /\/\/[^\n]*|\/\*[\s\S]*?\*\//],
      ["str",  /"""[\s\S]*?"""|"(?:[^"\\\n]|\\.)*"|'(?:\\.|[^'\\\n])'/],
      ["meta", /@[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*/],
      ["kw",   /\b(?:package|import|class|interface|object|fun|val|var|if|else|when|for|while|do|try|catch|finally|throw|return|break|continue|in|is|as|out|inline|reified|crossinline|noinline|tailrec|operator|infix|suspend|companion|abstract|final|open|override|sealed|enum|data|inner|private|protected|public|internal|expect|actual|by|where|init|lateinit|const|external|annotation|typealias|this|super)\b/],
      ["bool", /\b(?:true|false|null)\b/],
      ["type", /\b(?:Any|Unit|Nothing|Int|Long|Short|Byte|Float|Double|Char|Boolean|String|Array|List|Map|Set|MutableList|MutableMap|MutableSet|Pair|Triple|Sequence|Collection|Iterable|Iterator|Comparable|Throwable|Exception)\b/],
      ["num",  /\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+)?[fFdDlLuU]?\b|\b0[xX][0-9a-fA-F_]+[lLuU]?\b/]
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
