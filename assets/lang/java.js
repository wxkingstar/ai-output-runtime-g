(function () {
  var spec = {
    name: "java",
    aliases: ["java"],
    rules: [
      ["cmt",  /\/\/[^\n]*|\/\*[\s\S]*?\*\//],
      ["str",  /"(?:[^"\\\n]|\\.)*"|'(?:\\.|[^'\\\n])'/],
      ["meta", /@[A-Za-z_][\w.]*/],
      ["kw",   /\b(?:abstract|assert|break|case|catch|class|const|continue|default|do|else|enum|extends|final|finally|for|goto|if|implements|import|instanceof|interface|native|new|package|private|protected|public|return|static|strictfp|super|switch|synchronized|this|throw|throws|transient|try|volatile|while|var|yield|sealed|permits|record|non-sealed)\b/],
      ["bool", /\b(?:true|false|null)\b/],
      ["type", /\b(?:void|boolean|byte|char|short|int|long|float|double|String|Integer|Long|Short|Byte|Float|Double|Character|Boolean|Object|Class|List|Map|Set|Collection|ArrayList|LinkedList|HashMap|LinkedHashMap|TreeMap|HashSet|LinkedHashSet|TreeSet|Optional|Stream|Iterator|Iterable|Comparable|Runnable|Thread|Exception|Throwable|RuntimeException|IOException)\b/],
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
