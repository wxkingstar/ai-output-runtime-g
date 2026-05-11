(function () {
  var spec = {
    name: "swift",
    aliases: ["swift"],
    rules: [
      ["cmt",  /\/\/[^\n]*|\/\*[\s\S]*?\*\//],
      ["str",  /"""[\s\S]*?"""|"(?:[^"\\\n]|\\.)*"/],
      ["meta", /@[A-Za-z_]\w*/],
      ["kw",   /\b(?:associatedtype|class|deinit|enum|extension|fileprivate|func|import|init|inout|internal|let|open|operator|private|protocol|public|rethrows|static|struct|subscript|typealias|var|break|case|continue|default|defer|do|else|fallthrough|for|guard|if|in|repeat|return|switch|where|while|as|catch|is|self|Self|super|throw|throws|try|async|await|actor|some)\b/],
      ["bool", /\b(?:true|false|nil)\b/],
      ["type", /\b(?:Int|Int8|Int16|Int32|Int64|UInt|UInt8|UInt16|UInt32|UInt64|Float|Double|Bool|Character|String|Array|Dictionary|Set|Optional|Any|AnyObject|Never|Void)\b/],
      ["num",  /\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+)?\b|\b0[xX][0-9a-fA-F_]+\b/]
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
