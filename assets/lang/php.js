(function () {
  var spec = {
    name: "php",
    aliases: ["php"],
    rules: [
      ["cmt",  /\/\/[^\n]*|#[^\n]*|\/\*[\s\S]*?\*\//],
      ["str",  /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/],
      ["var",  /\$[A-Za-z_]\w*/],
      ["kw",   /\b(?:abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|new|or|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i],
      ["bool", /\b(?:true|false|null|TRUE|FALSE|NULL)\b/],
      ["type", /\b(?:int|integer|float|double|bool|boolean|string|array|object|callable|iterable|void|mixed|never|self|parent|static)\b/],
      ["fn",   /\b(?:count|strlen|strpos|substr|str_replace|implode|explode|json_encode|json_decode|array_map|array_filter|array_merge|array_keys|array_values|in_array|isset|empty|var_dump|print_r|file_get_contents|file_put_contents|preg_match|preg_replace|sprintf|printf)\b/],
      ["meta", /<\?php|<\?=|\?>/],
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
