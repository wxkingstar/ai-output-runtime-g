(function () {
  var spec = {
    name: "dart",
    aliases: ["dart"],
    rules: [
      ["cmt",  /\/\/\/[^\n]*|\/\/[^\n]*|\/\*[\s\S]*?\*\//],
      ["str",  /"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/],
      ["meta", /@[A-Za-z_]\w*/],
      ["kw",   /\b(?:abstract|as|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|else|enum|export|extends|extension|external|factory|final|finally|for|Function|get|hide|if|implements|import|in|interface|is|library|mixin|new|on|operator|part|rethrow|return|sealed|set|show|static|super|switch|sync|this|throw|try|typedef|var|when|while|with|yield|late|required|base|inout|out)\b/],
      ["bool", /\b(?:true|false|null)\b/],
      ["type", /\b(?:int|double|num|bool|String|List|Map|Set|Iterable|Stream|Future|Object|Symbol|Type|dynamic|void|Never|Record)\b/],
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
