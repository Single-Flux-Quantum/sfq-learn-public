# SFQ Learning — Home

**Prereqs:** none (curriculum entry)  
**Next:** [How to read SFQ notation](fundamentals/reading-sfq-notation.md) · [Fundamentals list](#1-fundamentals)

A guided path from **fundamentals** through **bridge** pages and **concept** cards into curated **tracks**. Written so newcomers can follow with patience — no prior superconductivity course assumed.

**Lookup:** [Glossary (plain English)](glossary.md) — jump here whenever a word feels fuzzy.  
**Paper map:** [Browse indexed papers](paper-map.md) — titles and publisher links from the lab corpus.  
**CMOS contrast:** [CMOS vs SFQ cheat-sheet](concepts/cmos-vs-sfq.md).

More pages and more wording are **intentional**. Prefer clarity over compression.

## Who this is for

| You are… | Start at |
|----------|----------|
| New to superconductivity or the symbols | [Fundamentals](#1-fundamentals) (start with [reading SFQ notation](fundamentals/reading-sfq-notation.md) if $\Phi_0$ / $I_c$ feel scary) |
| Finished fundamentals but cells feel sudden | [Bridge](#2-bridge-close-the-gap) |
| Comfortable with pulse / flux intuition | [Concepts](#3-concepts) |
| Ready for a guided path | [Tracks](#4-tracks) |
| Coming from CMOS digital design | [CMOS vs SFQ](concepts/cmos-vs-sfq.md) then [Bridge](#2-bridge-close-the-gap) |

## 1. Fundamentals

Build device intuition slowly. **No rush.**

1. [How to read SFQ notation](fundamentals/reading-sfq-notation.md) — start here if symbols or pulse sketches feel scary  
2. [Superconductivity intuition](fundamentals/superconductivity-intuition.md)  
3. [Josephson junction (RCSJ)](fundamentals/josephson-junction-rcsj.md)  
4. [Flux quantization](fundamentals/flux-quantization.md)  
5. [Superconducting loop / SQUID](fundamentals/superconducting-loop-squid.md)  
6. [Overdamped vs underdamped JJ](fundamentals/overdamped-vs-underdamped-jj.md)  

## 2. Bridge (close the gap)

Longer, story-first pages between fundamentals and compact SFQ concepts. **Do not skip** if concepts feel sudden.

Start here: [bridge/README.md](bridge/README.md)

1. [Phase to pulse](bridge/phase-to-pulse.md)  
2. [Pulse to logic state](bridge/pulse-to-logic-state.md)  
3. [Gate-level pipelining](bridge/gate-level-pipelining.md)  
4. [Resistive bias to ERSFQ](bridge/resistive-bias-to-ersfq.md)  
5. [DC bias current delivery](bridge/dc-bias-current-delivery.md)  
6. [SFQ pulse to voltage levels](bridge/sfq-pulse-to-volt-level.md)  

## 3. Concepts

SFQ vocabulary cards. Best after the matching bridge pages. Prefer clarity over compression.

**Logic & interconnects**

- [RSFQ overview](concepts/rsfq-logic.md)  
- [JTL interconnects](concepts/jtl-interconnects.md)  
- [Splitter and confluence](concepts/splitter-and-confluence.md)  
- [RSFQ DFF and retiming](concepts/rsfq-dff-and-retiming.md)  
- [ERSFQ logic](concepts/ersfq-logic.md)  
- [AQFP logic](concepts/aqfp-logic.md)  
- [CMOS vs SFQ](concepts/cmos-vs-sfq.md)  

**Clocking, bias, timing, routing**

- [Concurrent / counter-flow clocking](concepts/concurrent-and-counter-flow-clocking.md)  
- [Path balancing overhead](concepts/path-balancing-overhead.md)  
- [SFQ static timing analysis](concepts/sfq-static-timing-analysis.md)  
- [Hybrid JTL–PTL routing](concepts/hybrid-jtl-ptl-routing.md)  
- [Serial biasing / current recycling](concepts/serial-biasing-current-recycling.md)  

**I/O & memory**

- [SQUID stack driver](concepts/squid-stack-driver.md)  
- [Four-JL latching driver](concepts/four-jl-latching-driver.md)  
- [Vortex transitional RAM](concepts/vortex-transitional-ram.md)  
- [Josephson–CMOS hybrid memory](concepts/josephson-cmos-hybrid-memory.md)  

## 4. Tracks

- [SFQ logic primitives](tracks/sfq-logic-primitives/ROADMAP.md) — primary curated path (physics → RSFQ cells → ERSFQ/AQFP)  
- [Clocking, biasing & power](tracks/clocking-biasing-power/ROADMAP.md)  
- [EDA timing & verification](tracks/eda-timing-verification/ROADMAP.md)  
- [Cryogenic interfaces & I/O](tracks/cryogenic-interfaces-io/ROADMAP.md)  
- [Cryogenic memory](tracks/cryogenic-memory/ROADMAP.md)  
- [Compute & neuromorphic](tracks/compute-neuromorphic/ROADMAP.md) *(public cards TBD)*  
- [Quantum & detector interfaces](tracks/quantum-detector-interfaces/ROADMAP.md) *(public cards TBD)*  

Maintained by skill: `research-sfq-learn`.
