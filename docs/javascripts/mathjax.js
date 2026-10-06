window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true,
    tags: "ams"
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  },
  chtml: {
    scale: 1.12,
    minScale: 0.85,
    displayAlign: "center",
    displayIndent: "0",
    matchFontHeight: false
  }
};

document$.subscribe(() => {
  if (!window.MathJax || !MathJax.typesetPromise) return;
  if (MathJax.startup && MathJax.startup.output) {
    MathJax.startup.output.clearCache();
  }
  MathJax.typesetClear();
  MathJax.texReset();
  MathJax.typesetPromise();
});
