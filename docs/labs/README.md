# Interactive labs

**Prereqs:** none (index for demos)  
**Next:** [Phase to pulse lab](phase-to-pulse.html) · [Pulse to logic state lab](pulse-to-logic-state.html) · [Gate-level pipelining lab](gate-level-pipelining.html) · [JTL hop lab](jtl-interconnects.html) · [Splitter & confluence lab](splitter-and-confluence.html) · [DFF lab](rsfq-dff-and-retiming.html) · [Clock-flow lab](concurrent-and-counter-flow-clocking.html) · [Path-balancing lab](path-balancing-overhead.html) · [Bias → ERSFQ lab](resistive-bias-to-ersfq.html) · [Pulse → volt lab](sfq-pulse-to-volt-level.html) · [AQFP lab](aqfp-logic.html) · [RCSJ washboard lab](josephson-junction-rcsj.html) · [DC bias delivery lab](dc-bias-current-delivery.html) · [Serial biasing lab](serial-biasing-current-recycling.html) · [SFQ STA lab](sfq-static-timing-analysis.html) · [I/O megaphone lab](squid-stack-and-four-jl-driver.html) · [Flux / SQUID loop lab](flux-quantization-squid-loop.html) · [Overdamped / underdamped lab](overdamped-vs-underdamped-jj.html) · [Hybrid JTL-PTL lab](hybrid-jtl-ptl-routing.html) · [ERSFQ lab](ersfq-logic.html) · [VT-RAM lab](vortex-transitional-ram.html) · [Hybrid memory lab](josephson-cmos-hybrid-memory.html) · [CMOS vs SFQ lab](cmos-vs-sfq.html) · [RSFQ overview lab](rsfq-logic.html) · [Symbol card lab](sfq-symbol-card.html) · [Bridge hub](../bridge/README.md)

Self-contained HTML labs that let newcomers **click, watch events, and read stats** --- the same teaching pattern as a small in-browser simulator, not SPICE or netlists.

## Convention

| Rule | Detail |
|------|--------|
| **Where** | `docs/labs/<topic-id>.html` (copied to the site as `/labs/<topic-id>.html`) |
| **What** | Pedagogical interaction only: discrete events, timelines, match/miss, simple counters |
| **Not here** | JoSIM / WRspice netlists, PDK decks, or "run this circuit for real" flows --- those stay in projects / tracks |
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
  title="..."
  style="width:100%;height:720px;border:1px solid rgba(0,0,0,0.12);border-radius:0.35rem;background:#fff;"
  loading="lazy"
></iframe>
```

**Path rule:** MkDocs serves each page as `/section/page/` (trailing slash). Markdown links like `../labs/...` are rewritten correctly, but **raw `<iframe src>` is not**. From a bridge/concept/fundamental page, use `../../labs/<file>.html` (two levels up). From a nested page (e.g. `fundamentals/fields/...`), use three levels (`../../../labs/...`). Wrong depth → iframe 404 under `/bridge/labs/...`.

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
| [dc-bias-current-delivery.html](dc-bias-current-delivery.html) | [DC bias current delivery](../bridge/dc-bias-current-delivery.md) | \(I\sim N I_b\) parallel crisis; serial recycle + islands preview |
| [serial-biasing-current-recycling.html](serial-biasing-current-recycling.html) | [Serial biasing / current recycling](../concepts/serial-biasing-current-recycling.md) | \(I_{\mathrm{serial}}\sim\max I_i\) vs \(\sum\); islands + isolation crossings |
| [sfq-static-timing-analysis.html](sfq-static-timing-analysis.html) | [SFQ static timing analysis](../concepts/sfq-static-timing-analysis.md) | Setup/hold slack vs clock; pads; epoch mismatch vs window blame |
| [squid-stack-and-four-jl-driver.html](squid-stack-and-four-jl-driver.html) | [SQUID stack](../concepts/squid-stack-driver.md) · [4JL latching](../concepts/four-jl-latching-driver.md) | Series \(N\cdot V\) vs latch+hold+reset megaphones |
| [flux-quantization-squid-loop.html](flux-quantization-squid-loop.html) | [Flux quantization](../fundamentals/flux-quantization.md) · [Loop / SQUID](../fundamentals/superconducting-loop-squid.md) | \(n\Phi_0\) only; \(2\pi\) write/read; \(I_{\mathrm{circ}}\approx\Phi_0/L\) |
| [overdamped-vs-underdamped-jj.html](overdamped-vs-underdamped-jj.html) | [Overdamped vs underdamped JJ](../fundamentals/overdamped-vs-underdamped-jj.md) | β_C slider: pulse→V≈0 vs latch until reset |
| [hybrid-jtl-ptl-routing.html](hybrid-jtl-ptl-routing.html) | [Hybrid JTL-PTL routing](../concepts/hybrid-jtl-ptl-routing.md) | All-JTL stage tax vs hybrid flight; span sweep |
| [ersfq-logic.html](ersfq-logic.html) | [ERSFQ logic](../concepts/ersfq-logic.md) | Static I²R vs ERSFQ feed; activity still costs switching |
| [vortex-transitional-ram.html](vortex-transitional-ram.html) | [Vortex transitional RAM](../concepts/vortex-transitional-ram.md) | Flux-state cells; write/hold/read; NDRO vs DRO |
| [josephson-cmos-hybrid-memory.html](josephson-cmos-hybrid-memory.html) | [Josephson-CMOS hybrid memory](../concepts/josephson-cmos-hybrid-memory.md) | Pulse↔volt embassy; write/read across domains |
| [cmos-vs-sfq.html](cmos-vs-sfq.html) | [CMOS vs SFQ](../concepts/cmos-vs-sfq.md) | Translate CMOS intuitions; catch false analogies |
| [rsfq-logic.html](rsfq-logic.html) | [RSFQ overview](../concepts/rsfq-logic.md) | Plumbing cell map + 3-window pulse encoding |
| [sfq-symbol-card.html](sfq-symbol-card.html) | [SFQ symbol card](../fundamentals/sfq-symbol-card.md) · [Reading SFQ notation](../fundamentals/reading-sfq-notation.md) | Flash drill: Φ₀, I_c, φ, β_C, ∫V dt |

**Coverage.** Core walk device path, all bridges, and concept cards that suit click-and-watch demos now have labs (25 HTML files). Orientation express-lane pages and optional `fields/` guides stay prose-first by design.

## Adding a lab

1. Copy an existing `*.html` as a template.
2. Keep controls → stats → table/timeline (learner can reset and compare modes).
3. Embed via `<iframe>` on the Markdown chapter (plus a fallback link) and list the row in this README.
4. Do not put lab logic into `extra_javascript` unless every page needs it.
