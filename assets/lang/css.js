(function () {
  var spec = {
    name: "css",
    aliases: ["css"],
    rules: [
      ["cmt",  /\/\*[\s\S]*?\*\//],
      ["meta", /@[a-z-]+\b/],
      ["str",  /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/],
      ["key",  /\b[-a-z]+(?=\s*:)/],
      ["fn",   /\b(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color|color-mix|var|env|calc|min|max|clamp|attr|counter|counters|url|format|local|linear-gradient|radial-gradient|conic-gradient|repeating-linear-gradient|repeating-radial-gradient|cubic-bezier|steps|translate|translateX|translateY|translate3d|rotate|rotateX|rotateY|rotate3d|scale|scaleX|scaleY|scale3d|skew|matrix)(?=\()/],
      ["num",  /-?\d+(?:\.\d+)?(?:px|em|rem|%|vw|vh|vmin|vmax|deg|grad|rad|turn|s|ms|fr|pt|pc|ex|ch|cm|mm|in|dpi|dpcm|dppx|Q|cap|ic|lh|rlh|svh|lvh|dvh|svw|lvw|dvw|svi|lvi|dvi|svb|lvb|dvb)?\b|#[0-9a-fA-F]{3,8}\b/],
      ["bool", /\b(?:none|auto|inherit|initial|unset|revert|currentColor|transparent|true|false)\b/]
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
