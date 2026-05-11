(function () {
  var spec = {
    name: "perl",
    aliases: ["perl", "pl", "pm"],
    rules: [
      ["cmt",  /#[^\n]*|^=\w+[\s\S]*?^=cut/m],
      ["str",  /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\\n]|\\.)*`|q[wqr]?\([^)\n]*\)|q[wqr]?\{[^}\n]*\}|q[wqr]?\[[^\]\n]*\]|q[wqr]?<[^>\n]*>/],
      ["var",  /[\$@%][#$]?[A-Za-z_]\w*(?:\{[^}\n]+\}|\[[^\]\n]+\])?|\$_(?:\W|$)/],
      ["kw",   /\b(?:my|our|local|state|sub|if|elsif|else|unless|while|until|for|foreach|do|return|last|next|redo|use|require|package|no|import|qw|qq|q|qr|tr|s|m|defined|delete|exists|undef|print|printf|say|warn|die|eval|chomp|chop|chr|ord|hex|oct|abs|int|sprintf|split|join|sort|map|grep|reverse|keys|values|each|push|pop|shift|unshift|wantarray|ref|bless|BEGIN|END|__END__|__DATA__|__FILE__|__LINE__|__PACKAGE__)\b/],
      ["bool", /\b(?:undef|true|false)\b/],
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
