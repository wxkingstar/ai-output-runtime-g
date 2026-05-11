(function () {
  var spec = {
    name: "scala",
    aliases: ["scala", "sbt"],
    rules: [
      ["cmt",  /\/\/[^\n]*|\/\*[\s\S]*?\*\//],
      ["str",  /"""[\s\S]*?"""|"(?:[^"\\\n]|\\.)*"|'(?:\\.|[^'\\\n])'/],
      ["meta", /@[A-Za-z_]\w*/],
      ["kw",   /\b(?:abstract|case|catch|class|def|do|else|enum|export|extends|final|finally|for|forSome|given|if|implicit|import|infix|inline|lazy|match|new|null|object|opaque|open|override|package|private|protected|return|sealed|super|this|throw|trait|transparent|try|type|using|val|var|while|with|yield)\b/],
      ["bool", /\b(?:true|false|null|None|Some|Nil)\b/],
      ["type", /\b(?:Int|Long|Short|Byte|Float|Double|Boolean|Char|String|Unit|Any|AnyRef|AnyVal|Nothing|Null|Option|Either|List|Map|Set|Array|Seq|Vector|Tuple|Future|Promise|Try)\b/],
      ["num",  /\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+)?[fFdDlL]?\b|\b0[xX][0-9a-fA-F_]+[lL]?\b/]
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
