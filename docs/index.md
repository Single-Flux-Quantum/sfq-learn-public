# SFQ Learning — Home

**Prereqs:** none (curriculum entry)  
**Next:** [Why superconducting electronics?](fundamentals/why-superconducting-electronics.md) (express lane)

A guided path from **field orientation** through **device fundamentals**, **bridge** pages, and **concept** cards into curated **tracks**. Written so newcomers can follow with patience — no prior superconductivity course assumed.

**Lookup:** [Glossary](glossary.md) · [Symbol card (5 symbols)](fundamentals/sfq-symbol-card.md) · [Paper map](paper-map.md) · [CMOS vs SFQ](concepts/cmos-vs-sfq.md) (preview anytime)

More pages and more wording are **intentional**. Prefer clarity over compression — but use the **express lane** so you are not forced to read every field guide before symbols.

## Who this is for

| You are… | Start at |
|----------|----------|
| Brand new (first visit) | **Express lane** below — then device path |
| Confused about qubits vs SFQ | [Qubits page](fundamentals/fields/superconducting-qubits-and-quantum-computing.md) (canonical contrast) → optional [QC platforms](fundamentals/fields/quantum-computing-hardware-platforms.md) |
| Coming from CMOS | Express lane + preview [CMOS vs SFQ](concepts/cmos-vs-sfq.md) |
| Only need symbols | [Symbol card](fundamentals/sfq-symbol-card.md) or [Notation](fundamentals/reading-sfq-notation.md) |
| Finished fundamentals; cells feel sudden | [Bridge](#2-bridge-close-the-gap) |
| Want click-and-watch demos | [Interactive labs](labs/README.md) |
| Ready for a guided path | [Tracks](#4-tracks) |

## Express lane vs full orientation

**Express lane (must before device physics)** — about five pages:

1. [Why superconducting electronics?](fundamentals/why-superconducting-electronics.md)  
2. [History](fundamentals/history-of-superconducting-electronics.md)  
3. [Landscape](fundamentals/superconducting-electronics-landscape.md) (airport map; skim field links)  
4. [Logic families](fundamentals/sfq-among-logic-families.md)  
5. [Cryogenics (light)](fundamentals/cryogenics-for-electronics.md)  

Then jump to [Symbol card](fundamentals/sfq-symbol-card.md) → [Notation](fundamentals/reading-sfq-notation.md) → device fundamentals.

**Optional field survey** (when titles confuse you — not required on day one):

- Hub: [Field guides](fundamentals/fields/README.md)  
- Especially: [Qubits ≠ SFQ](fundamentals/fields/superconducting-qubits-and-quantum-computing.md) · [QC platforms](fundamentals/fields/quantum-computing-hardware-platforms.md)  
- Skim siblings as needed: sensing, metrology, detectors, cryo-CMOS  

## 1. Fundamentals

### Orientation

**Must (express lane):** why → history → landscape → logic families → cryogenics  

**Optional:** [fields/](fundamentals/fields/README.md) terminal guides  

### Device path (core walk)

1. [Symbol card](fundamentals/sfq-symbol-card.md) — five-symbol cheatsheet · [lab](labs/sfq-symbol-card.html)  
2. [How to read SFQ notation](fundamentals/reading-sfq-notation.md) · [lab](labs/sfq-symbol-card.html)  
3. [Superconductivity intuition](fundamentals/superconductivity-intuition.md)  
4. [Josephson junction (RCSJ)](fundamentals/josephson-junction-rcsj.md) · [lab](labs/josephson-junction-rcsj.html)  
5. [Flux quantization](fundamentals/flux-quantization.md) · [lab](labs/flux-quantization-squid-loop.html)  
6. [Superconducting loop / SQUID](fundamentals/superconducting-loop-squid.md) · [lab](labs/flux-quantization-squid-loop.html)  
7. [Overdamped vs underdamped JJ](fundamentals/overdamped-vs-underdamped-jj.md) · [lab](labs/overdamped-vs-underdamped-jj.html)  

## 2. Bridge (close the gap)

Longer, story-first pages between fundamentals and compact SFQ concepts. **Do not skip** if concepts feel sudden. Each bridge starts with a **TL;DR** strip.

Start here: [bridge/README.md](bridge/README.md)

1. [Phase to pulse](bridge/phase-to-pulse.md) · [lab](labs/phase-to-pulse.html)  
2. [Pulse to logic state](bridge/pulse-to-logic-state.md) · [lab](labs/pulse-to-logic-state.html)  
3. [Gate-level pipelining](bridge/gate-level-pipelining.md) · [lab](labs/gate-level-pipelining.html)  
4. [Resistive bias to ERSFQ](bridge/resistive-bias-to-ersfq.md) · [lab](labs/resistive-bias-to-ersfq.html)  
5. [DC bias current delivery](bridge/dc-bias-current-delivery.md) · [lab](labs/dc-bias-current-delivery.html)  
6. [SFQ pulse to voltage levels](bridge/sfq-pulse-to-volt-level.md) · [lab](labs/sfq-pulse-to-volt-level.html)  

## 3. Concepts

SFQ vocabulary cards. Best after the matching bridge pages.

**Logic & interconnects**

- [RSFQ overview](concepts/rsfq-logic.md) · [lab](labs/rsfq-logic.html)  
- [JTL interconnects](concepts/jtl-interconnects.md) · [lab](labs/jtl-interconnects.html)  
- [Splitter and confluence](concepts/splitter-and-confluence.md) · [lab](labs/splitter-and-confluence.html)  
- [RSFQ DFF and retiming](concepts/rsfq-dff-and-retiming.md) · [lab](labs/rsfq-dff-and-retiming.html)  
- [ERSFQ logic](concepts/ersfq-logic.md) · [lab](labs/ersfq-logic.html)  
- [AQFP logic](concepts/aqfp-logic.md) · [lab](labs/aqfp-logic.html)  
- [CMOS vs SFQ](concepts/cmos-vs-sfq.md) · [lab](labs/cmos-vs-sfq.html)  

**Clocking, bias, timing, routing**

- [Concurrent / counter-flow clocking](concepts/concurrent-and-counter-flow-clocking.md) · [lab](labs/concurrent-and-counter-flow-clocking.html)  
- [Path balancing overhead](concepts/path-balancing-overhead.md) · [lab](labs/path-balancing-overhead.html)  
- [SFQ static timing analysis](concepts/sfq-static-timing-analysis.md) · [lab](labs/sfq-static-timing-analysis.html)  
- [Hybrid JTL–PTL routing](concepts/hybrid-jtl-ptl-routing.md) · [lab](labs/hybrid-jtl-ptl-routing.html)  
- [Serial biasing / current recycling](concepts/serial-biasing-current-recycling.md) · [lab](labs/serial-biasing-current-recycling.html)  

**I/O & memory**

- [SQUID stack driver](concepts/squid-stack-driver.md) · [lab](labs/squid-stack-and-four-jl-driver.html)  
- [Four-JL latching driver](concepts/four-jl-latching-driver.md) · [lab](labs/squid-stack-and-four-jl-driver.html)  
- [Vortex transitional RAM](concepts/vortex-transitional-ram.md) · [lab](labs/vortex-transitional-ram.html)  
- [Josephson–CMOS hybrid memory](concepts/josephson-cmos-hybrid-memory.md) · [lab](labs/josephson-cmos-hybrid-memory.html)  

## 4. Tracks

- [SFQ logic primitives](tracks/sfq-logic-primitives/ROADMAP.md) — primary curated path  
- [Clocking, biasing & power](tracks/clocking-biasing-power/ROADMAP.md)  
- [EDA timing & verification](tracks/eda-timing-verification/ROADMAP.md)  
- [Cryogenic interfaces & I/O](tracks/cryogenic-interfaces-io/ROADMAP.md)  
- [Cryogenic memory](tracks/cryogenic-memory/ROADMAP.md)  
- [Compute & neuromorphic](tracks/compute-neuromorphic/ROADMAP.md) *(public cards TBD)*  
- [Quantum & detector interfaces](tracks/quantum-detector-interfaces/ROADMAP.md) *(public cards TBD)*  

## Interactive labs

In-browser click-and-watch demos (not SPICE). Full list: **[Labs hub](labs/README.md)**. Each lab also embeds on its matching chapter.

Maintained by skill: `research-sfq-learn`.
