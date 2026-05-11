(function () {
  var spec = {
    name: "r",
    aliases: ["r", "rscript"],
    rules: [
      ["cmt",  /#[^\n]*/],
      ["str",  /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/],
      ["kw",   /\b(?:if|else|for|while|repeat|function|return|break|next|in|library|require|source|setwd|getwd)\b/],
      ["bool", /\b(?:TRUE|FALSE|T|F|NULL|NA|NA_integer_|NA_real_|NA_character_|NA_complex_|NaN|Inf)\b/],
      ["fn",   /\b(?:c|list|vector|data\.frame|tibble|matrix|array|factor|levels|names|dim|length|nrow|ncol|sum|mean|median|min|max|sd|var|cor|cov|lm|glm|aov|summary|print|cat|paste|paste0|sprintf|format|gsub|sub|grepl|grep|strsplit|substr|substring|toupper|tolower|nchar|trimws|read\.csv|write\.csv|read\.table|write\.table|read\.delim|read_csv|write_csv|sapply|lapply|mapply|vapply|apply|tapply|do\.call|Reduce|Filter|Map|seq|seq_len|seq_along|rep|range|unique|duplicated|sort|order|rev|which|any|all|is\.na|is\.null|is\.numeric|is\.character|as\.numeric|as\.character|as\.integer|as\.factor|as\.data\.frame)\b/],
      ["num",  /\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?[iL]?\b|\b0[xX][0-9a-fA-F]+[iL]?\b/]
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
