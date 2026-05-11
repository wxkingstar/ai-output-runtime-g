(function () {
  var spec = {
    name: "html",
    aliases: ["html", "htm"],
    rules: [
      ["cmt",  /<!--[\s\S]*?-->/],
      ["meta", /<!DOCTYPE[^>]*>/i],
      ["kw",   /<\/?[A-Za-z][\w-]*/],
      ["str",  /"[^"\n]*"|'[^'\n]*'/],
      ["key",  /\s[A-Za-z_][\w:-]*(?==)/],
      ["num",  /\b\d+(?:\.\d+)?\b/]
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
