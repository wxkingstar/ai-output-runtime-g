(function () {
  var spec = {
    name: "rust",
    aliases: ["rust", "rs"],
    rules: [
      ["cmt",  /\/\/[^\n]*|\/\*[\s\S]*?\*\//],
      ["str",  /b?r#*"[\s\S]*?"#*|b?"(?:[^"\\\n]|\\.)*"|'(?:\\.|[^'\\\n])'/],
      ["meta", /#!?\[[^\]\n]*\]|\b\w+!/],
      ["kw",   /\b(?:as|async|await|break|const|continue|crate|dyn|else|enum|extern|fn|for|if|impl|in|let|loop|match|mod|move|mut|pub|ref|return|self|Self|static|struct|super|trait|type|unsafe|use|where|while|yield)\b/],
      ["bool", /\b(?:true|false|None|Some|Ok|Err)\b/],
      ["type", /\b(?:bool|char|str|i8|i16|i32|i64|i128|isize|u8|u16|u32|u64|u128|usize|f32|f64|String|Vec|Option|Result|Box|Rc|Arc|Cell|RefCell|HashMap|BTreeMap|HashSet|BTreeSet)\b/],
      ["num",  /\b\d[\d_]*(?:\.\d[\d_]*)?(?:[eE][+-]?\d+)?(?:[iu](?:8|16|32|64|128|size)|f(?:32|64))?\b|\b0[xX][0-9a-fA-F_]+\b/]
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
