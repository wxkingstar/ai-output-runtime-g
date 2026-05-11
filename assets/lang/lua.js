(function () {
  var spec = {
    name: "lua",
    aliases: ["lua"],
    rules: [
      ["cmt",  /--\[\[[\s\S]*?\]\]|--[^\n]*/],
      ["str",  /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|\[\[[\s\S]*?\]\]/],
      ["kw",   /\b(?:and|break|do|else|elseif|end|for|function|goto|if|in|local|not|or|repeat|return|then|until|while)\b/],
      ["bool", /\b(?:true|false|nil)\b/],
      ["fn",   /\b(?:print|require|ipairs|pairs|tostring|tonumber|type|setmetatable|getmetatable|pcall|xpcall|error|assert|select|next|rawget|rawset|rawequal|rawlen|unpack|table|string|math|os|io|coroutine|package|debug|string\.format|string\.gsub|string\.match|string\.find|string\.sub|string\.len|string\.upper|string\.lower|table\.insert|table\.remove|table\.concat|table\.sort)\b/],
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
