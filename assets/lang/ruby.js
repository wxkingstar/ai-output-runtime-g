(function () {
  var spec = {
    name: "ruby",
    aliases: ["ruby", "rb"],
    rules: [
      ["cmt",  /#[^\n]*|^=begin[\s\S]*?^=end/m],
      ["str",  /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|:[A-Za-z_]\w*[?!]?|%[wWiIqQrs]?[\(\[\{<][^)\]\}>]*[\)\]\}>]/],
      ["var",  /@@?[A-Za-z_]\w*|\$[A-Za-z_]\w*/],
      ["kw",   /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|defined\?|do|else|elsif|end|ensure|for|if|in|module|next|not|or|redo|rescue|retry|return|self|super|then|undef|unless|until|when|while|yield|require|require_relative|attr_accessor|attr_reader|attr_writer|include|extend|prepend|private|protected|public|raise)\b/],
      ["bool", /\b(?:true|false|nil)\b/],
      ["type", /\b(?:Integer|Float|String|Symbol|Array|Hash|Range|Regexp|Proc|Lambda|Object|Class|Module|Numeric|Comparable|Enumerable|Exception|StandardError)\b/],
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
