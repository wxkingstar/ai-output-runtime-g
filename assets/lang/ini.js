(function () {
  var spec = {
    name: "ini",
    aliases: ["ini", "conf", "cfg", "properties"],
    rules: [
      ["cmt",  /[;#][^\n]*/],
      ["meta", /^\s*\[[^\]\n]+\]/m],
      ["key",  /^[ \t]*[A-Za-z_][\w.-]*(?=\s*[=:])/m],
      ["str",  /"[^"\n]*"|'[^'\n]*'/],
      ["bool", /\b(?:true|false|yes|no|on|off|null|none)\b/i],
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
