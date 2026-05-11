(function () {
  var spec = {
    name: "regex",
    aliases: ["regex", "regexp", "re"],
    rules: [
      ["meta", /\\(?:[dDwWsSbBnrtvfaAZzpP0]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4,5}|\{[^}\n]+\}|c[A-Z]|[^A-Za-z0-9])/],
      ["str",  /\[(?:\\.|[^\]\\\n])+\]/],
      ["num",  /\{\d+(?:,\d*)?\}/],
      ["kw",   /\((?:\?[:=!<>P\-imnsx]*[:=!]?)?|[()|]/],
      ["bool", /[\^$.+*?]/]
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
