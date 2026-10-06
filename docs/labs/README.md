# Interactive labs

**Prereqs:** none (index for demos)  
**Next:** [Pulse to logic state lab](pulse-to-logic-state.html) · [Bridge hub](../bridge/README.md)

Self-contained HTML labs that let newcomers **click, watch events, and read stats** — the same teaching pattern as a small in-browser simulator, not SPICE or netlists.

## Convention

| Rule | Detail |
|------|--------|
| **Where** | `docs/labs/<topic-id>.html` (copied to the site as `/labs/<topic-id>.html`) |
| **What** | Pedagogical interaction only: discrete events, timelines, match/miss, simple counters |
| **Not here** | JoSIM / WRspice netlists, PDK decks, or “run this circuit for real” flows — those stay in projects / tracks |
| **Embed in chapter** | Required: `<iframe>` on the matching Markdown page so readers see the lab while reading |
| **Fallback link** | Also link the standalone HTML (full tab / share URL) |
| **Optional hub** | This README; do not invent a nav mega-menu until several labs exist |
| **Style** | Standalone CSS inside the HTML file; no build step; works offline when opened as a file |
| **Grounding** | Teach the same claim as the Markdown chapter; do not invent device numbers |

## How to embed

In the teaching page, add a short section after the core idea (MkDocs keeps raw HTML):

```markdown
## Interactive lab

Short how-to (2 steps). Prefer full-screen? Open the [lab page](../labs/<topic-id>.html).

<iframe
  src="../labs/<topic-id>.html"
  title="…"
  style="width:100%;height:720px;border:1px solid #2a3548;border-radius:8px;"
  loading="lazy"
></iframe>
```

Use height ≥ 700px so controls, stats, and the table fit without clipping.

## Current labs

| Lab | Pairs with | Idea |
|-----|------------|------|
| [pulse-to-logic-state.html](pulse-to-logic-state.html) | [Pulse to logic state](../bridge/pulse-to-logic-state.md) | Presence/absence in a clock window; timing skew → errors |

## Adding a lab

1. Copy an existing `*.html` as a template.
2. Keep controls → stats → table/timeline (learner can reset and compare modes).
3. Embed via `<iframe>` on the Markdown chapter (plus a fallback link) and list the row in this README.
4. Do not put lab logic into `extra_javascript` unless every page needs it.
