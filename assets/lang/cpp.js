(function () {
  var spec = {
    name: "cpp",
    aliases: ["cpp", "c++", "cxx", "cc", "hpp"],
    rules: [
      ["cmt",  /\/\/[^\n]*|\/\*[\s\S]*?\*\//],
      ["str",  /R"\([\s\S]*?\)"|"(?:[^"\\\n]|\\.)*"|'(?:\\.|[^'\\\n])'/],
      ["meta", /^[ \t]*#[ \t]*(?:include|define|undef|if|ifdef|ifndef|else|elif|endif|pragma|error|warning|line)\b[^\n]*/m],
      ["kw",   /\b(?:alignas|alignof|and|and_eq|asm|auto|bitand|bitor|break|case|catch|class|compl|concept|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|dynamic_cast|else|enum|explicit|export|extern|final|for|friend|goto|if|import|inline|module|mutable|namespace|new|noexcept|not|not_eq|operator|or|or_eq|override|private|protected|public|reflexpr|register|reinterpret_cast|requires|return|sizeof|static|static_assert|static_cast|struct|switch|synchronized|template|this|thread_local|throw|try|typedef|typeid|typename|union|using|virtual|volatile|while|xor|xor_eq|const)\b/],
      ["bool", /\b(?:true|false|nullptr|NULL)\b/],
      ["type", /\b(?:void|char|char8_t|char16_t|char32_t|wchar_t|short|int|long|float|double|signed|unsigned|bool|size_t|ssize_t|ptrdiff_t|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|string|wstring|vector|list|map|set|unordered_map|unordered_set|deque|stack|queue|priority_queue|array|pair|tuple|optional|variant|any|shared_ptr|unique_ptr|weak_ptr|function|FILE)\b/],
      ["num",  /\b\d+(?:'\d+)*(?:\.\d+(?:'\d+)*)?(?:[eE][+-]?\d+)?[fFlLuU]*\b|\b0[xX][0-9a-fA-F']+[lLuU]*\b/]
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
