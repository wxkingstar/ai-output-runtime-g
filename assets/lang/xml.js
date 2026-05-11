(function () {
  var spec = {
    name: "xml",
    aliases: ["xml", "svg", "xhtml", "xsl", "xslt", "rss", "atom", "plist"],
    rules: [
      ["cmt",  /<!--[\s\S]*?-->/],
      ["meta", /<\?[\s\S]*?\?>|<!DOCTYPE[^>]*>|<!\[CDATA\[[\s\S]*?\]\]>/i],
      ["kw",   /<\/?[A-Za-z_][\w:.-]*/],
      ["str",  /"[^"\n]*"|'[^'\n]*'/],
      ["key",  /\s[A-Za-z_][\w:.-]*(?==)/]
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
