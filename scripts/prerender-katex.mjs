/**
 * Build-time KaTeX prerender for MkDocs arithmatex output.
 * Replaces <span/div class="arithmatex">\(...\)</...> with rendered HTML
 * so equations are visible even if browser JS fails.
 */
import { createRequire } from "node:module";
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const require = createRequire(import.meta.url);
const katex = require(path.join(root, "docs/javascripts/vendor/katex/katex.min.js"));

const ARITH =
  /<(span|div) class="arithmatex"(?:\s[^>]*)?>([\s\S]*?)<\/\1>/gi;

function stripDelimiters(raw) {
  let tex = raw.trim();
  if (tex.startsWith("\\(") && tex.endsWith("\\)")) return tex.slice(2, -2).trim();
  if (tex.startsWith("\\[") && tex.endsWith("\\]")) return tex.slice(2, -2).trim();
  if (tex.startsWith("$$") && tex.endsWith("$$")) return tex.slice(2, -2).trim();
  if (tex.startsWith("$") && tex.endsWith("$")) return tex.slice(1, -1).trim();
  return tex;
}

function decodeBasicEntities(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

async function walkHtml(dir, out = []) {
  for (const ent of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) await walkHtml(p, out);
    else if (ent.name.endsWith(".html")) out.push(p);
  }
  return out;
}

function prerenderHtml(html) {
  let count = 0;
  const next = html.replace(ARITH, (full, tag, inner) => {
    if (/\bdata-katex-done=/.test(full)) return full;
    const display = String(tag).toLowerCase() === "div";
    const tex = stripDelimiters(decodeBasicEntities(inner));
    try {
      const rendered = katex.renderToString(tex, {
        displayMode: display,
        throwOnError: false,
        strict: "ignore",
        output: "html",
      });
      count += 1;
      return `<${tag} class="arithmatex" data-katex-done="1">${rendered}</${tag}>`;
    } catch {
      return full;
    }
  });
  return { html: next, count };
}

const siteDir = path.join(root, "site");
const files = await walkHtml(siteDir);
let total = 0;
for (const file of files) {
  const raw = await readFile(file, "utf8");
  const { html, count } = prerenderHtml(raw);
  if (count > 0) {
    await writeFile(file, html, "utf8");
    total += count;
  }
}
console.log(`prerender-katex: rendered ${total} equation(s) across ${files.length} HTML file(s)`);
