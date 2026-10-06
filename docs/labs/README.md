# Interactive labs

**Prereqs:** none (index for demos)  
**Next:** [Phase to pulse lab](phase-to-pulse.html) · [Pulse to logic state lab](pulse-to-logic-state.html) · [Gate-level pipelining lab](gate-level-pipelining.html) · [JTL hop lab](jtl-interconnects.html) · [Splitter & confluence lab](splitter-and-confluence.html) · [DFF lab](rsfq-dff-and-retiming.html) · [Clock-flow lab](concurrent-and-counter-flow-clocking.html) · [Path-balancing lab](path-balancing-overhead.html) · [Bias → ERSFQ lab](resistive-bias-to-ersfq.html) · [Pulse → volt lab](sfq-pulse-to-volt-level.html) · [AQFP lab](aqfp-logic.html) · [RCSJ washboard lab](josephson-junction-rcsj.html) · [Bridge hub](../bridge/README.md)

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
  src="../../labs/<topic-id>.html"
  title="…"
  style="width:100%;height:720px;border:1px solid rgba(0,0,0,0.12);border-radius:0.35rem;background:#fff;"
  loading="lazy"
></iframe>
```

**Path rule:** MkDocs serves each page as `/section/page/` (trailing slash). Markdown links like `../labs/…` are rewritten correctly, but **raw `<iframe src>` is not**. From a bridge/concept/fundamental page, use `../../labs/<file>.html` (two levels up). From a nested page (e.g. `fundamentals/fields/…`), use three levels (`../../../labs/…`). Wrong depth → iframe 404 under `/bridge/labs/…`.

**Colors:** Match Material default light + indigo (`#4051b5` primary, white page, `#f5f5f5` code/panel surfaces) so the iframe blends with the chapter.

Use height ≥ 700px so controls, stats, and the table fit without clipping.

## Current labs

| Lab | Pairs with | Idea |
|-----|------------|------|
| [phase-to-pulse.html](phase-to-pulse.html) | [Phase to pulse](../bridge/phase-to-pulse.md) | \(2\pi\) slip → \(V(t)\); area \(\Phi_0\) fixed while \(\Delta t\) changes height |
| [pulse-to-logic-state.html](pulse-to-logic-state.html) | [Pulse to logic state](../bridge/pulse-to-logic-state.md) | Presence/absence in a clock window; timing skew → errors |
| [gate-level-pipelining.html](gate-level-pipelining.html) | [Gate-level pipelining](../bridge/gate-level-pipelining.md) | Two paths → merge; pad short path until epochs match |
| [jtl-interconnects.html](jtl-interconnects.html) | [JTL interconnects](../concepts/jtl-interconnects.md) | Stage-by-stage Φ₀ regeneration vs passive-wire myth |
| [splitter-and-confluence.html](splitter-and-confluence.html) | [Splitter and confluence](../concepts/splitter-and-confluence.md) | Fanout-2 copy + skew; confluence stagger vs hazard |
| [rsfq-dff-and-retiming.html](rsfq-dff-and-retiming.html) | [RSFQ DFF and retiming](../concepts/rsfq-dff-and-retiming.md) | Capture → hold (loop Φ₀) → clocked destructive readout |
| [concurrent-and-counter-flow-clocking.html](concurrent-and-counter-flow-clocking.html) | [Concurrent / counter-flow clocking](../concepts/concurrent-and-counter-flow-clocking.md) | Clock vs data direction; hold/setup pressure cartoon |
| [path-balancing-overhead.html](path-balancing-overhead.html) | [Path balancing overhead](../concepts/path-balancing-overhead.md) | \(k=n_l-n_s\); pad tax on JJ / clocks / latency |
| [resistive-bias-to-ersfq.html](resistive-bias-to-ersfq.html) | [Resistive bias to ERSFQ](../bridge/resistive-bias-to-ersfq.md) | Static \(I^2R\) vs amperes vs dynamic; ERSFQ kills resistor drip |
| [sfq-pulse-to-volt-level.html](sfq-pulse-to-volt-level.html) | [SFQ pulse to volt-level](../bridge/sfq-pulse-to-volt-level.md) | Height/time gaps; stretch fails; amp+latch leaves Φ₀ class |
| [aqfp-logic.html](aqfp-logic.html) | [AQFP logic](../concepts/aqfp-logic.md) | Multiphase AC settle; majority; phase buffers ≠ RSFQ |
| [josephson-junction-rcsj.html](josephson-junction-rcsj.html) | [Josephson junction (RCSJ)](../fundamentals/josephson-junction-rcsj.md) | Washboard particle; overdamped pulse vs underdamped latch |

## Adding a lab

1. Copy an existing `*.html` as a template.
2. Keep controls → stats → table/timeline (learner can reset and compare modes).
3. Embed via `<iframe>` on the Markdown chapter (plus a fallback link) and list the row in this README.
4. Do not put lab logic into `extra_javascript` unless every page needs it.
