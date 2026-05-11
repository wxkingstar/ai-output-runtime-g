(function () {
  var spec = {
    name: "dockerfile",
    aliases: ["dockerfile", "docker", "containerfile"],
    rules: [
      ["cmt",  /#[^\n]*/],
      ["kw",   /^\s*(?:FROM|AS|RUN|CMD|LABEL|MAINTAINER|EXPOSE|ENV|ADD|COPY|ENTRYPOINT|VOLUME|USER|WORKDIR|ARG|ONBUILD|STOPSIGNAL|HEALTHCHECK|SHELL)\b/im],
      ["str",  /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/],
      ["var",  /\$\{[^}\n]+\}|\$[A-Za-z_]\w*/],
      ["bool", /\b(?:true|false|null)\b/],
      ["num",  /\b\d+\b/]
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
