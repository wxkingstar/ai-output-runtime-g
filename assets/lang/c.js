(function () {
  var spec = {
    name: "c",
    aliases: ["c"],
    rules: [
      ["cmt",  /\/\/[^\n]*|\/\*[\s\S]*?\*\//],
      ["str",  /"(?:[^"\\\n]|\\.)*"|'(?:\\.|[^'\\\n])'/],
      ["meta", /^[ \t]*#[ \t]*(?:include|define|undef|if|ifdef|ifndef|else|elif|endif|pragma|error|warning|line)\b[^\n]*/m],
      ["kw",   /\b(?:auto|break|case|const|continue|default|do|else|enum|extern|for|goto|if|inline|register|restrict|return|sizeof|static|struct|switch|typedef|union|volatile|while|_Bool|_Complex|_Imaginary|_Alignas|_Alignof|_Atomic|_Generic|_Noreturn|_Static_assert|_Thread_local)\b/],
      ["bool", /\b(?:true|false|NULL)\b/],
      ["type", /\b(?:void|char|short|int|long|float|double|signed|unsigned|bool|size_t|ssize_t|ptrdiff_t|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|FILE|wchar_t|intmax_t|uintmax_t|intptr_t|uintptr_t)\b/],
      ["num",  /\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?[fFlLuU]*\b|\b0[xX][0-9a-fA-F]+[lLuU]*\b/]
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
