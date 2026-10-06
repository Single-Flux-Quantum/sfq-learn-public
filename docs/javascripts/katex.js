/* KaTeX for arithmatex (generic) — render .arithmatex nodes directly. */
function renderArithmatex(root) {
  if (!window.katex) return;
  const scope = root || document.body;
  scope.querySelectorAll("span.arithmatex, div.arithmatex").forEach((el) => {
    if (el.getAttribute("data-katex-done") === "1") return;
    let tex = (el.textContent || "").trim();
    const display = el.tagName.toLowerCase() === "div";
    // Strip delimiters left by pymdownx.arithmatex
    if (tex.startsWith("\\(") && tex.endsWith("\\)")) {
      tex = tex.slice(2, -2).trim();
    } else if (tex.startsWith("\\[") && tex.endsWith("\\]")) {
      tex = tex.slice(2, -2).trim();
    } else if (tex.startsWith("$$") && tex.endsWith("$$")) {
      tex = tex.slice(2, -2).trim();
    } else if (tex.startsWith("$") && tex.endsWith("$")) {
      tex = tex.slice(1, -1).trim();
    }
    try {
      katex.render(tex, el, {
        displayMode: display,
        throwOnError: false,
        strict: "ignore",
        output: "html"
      });
      el.setAttribute("data-katex-done", "1");
    } catch (err) {
      // Keep raw TeX visible if something unexpected fails
      el.setAttribute("title", String(err));
    }
  });
}

if (window.document$) {
  document$.subscribe(({ body }) => {
    renderArithmatex(body || document.body);
  });
} else {
  document.addEventListener("DOMContentLoaded", () => renderArithmatex(document.body));
}
