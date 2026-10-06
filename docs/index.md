# SFQ Learning — Home

**Prereqs:** none (curriculum entry)  
**Next:** [Why superconducting electronics?](fundamentals/why-superconducting-electronics.md) · [Fundamentals list](#1-fundamentals)

A guided path from **field orientation** through **device fundamentals**, **bridge** pages, and **concept** cards into curated **tracks**. Written so newcomers can follow with patience — no prior superconductivity course assumed.

**Lookup:** [Glossary (plain English)](glossary.md) — jump here whenever a word feels fuzzy.  
**Paper map:** [Browse indexed papers](paper-map.md) — titles and publisher links from the lab corpus.  
**CMOS contrast:** [CMOS vs SFQ cheat-sheet](concepts/cmos-vs-sfq.md) (preview anytime; deepest after pulse/flux bridges).

More pages and more wording are **intentional**. Prefer clarity over compression.

## Who this is for

| You are… | Start at |
|----------|----------|
| Brand new — want motivation before math | [Why superconducting electronics?](fundamentals/why-superconducting-electronics.md) then orientation + [field guides](fundamentals/fields/README.md) |
| Confused about qubits vs SFQ | [Qubits & quantum computing](fundamentals/fields/superconducting-qubits-and-quantum-computing.md) then [QC platforms](fundamentals/fields/quantum-computing-hardware-platforms.md) |
| Coming from CMOS digital design | [Why…](fundamentals/why-superconducting-electronics.md) + preview [CMOS vs SFQ](concepts/cmos-vs-sfq.md), then orientation → notation |
| Ready for symbols / device physics | [Reading SFQ notation](fundamentals/reading-sfq-notation.md) |
| Finished fundamentals but cells feel sudden | [Bridge](#2-bridge-close-the-gap) |
| Comfortable with pulse / flux intuition | [Concepts](#3-concepts) |
| Ready for a guided path | [Tracks](#4-tracks) |

## 1. Fundamentals

Build context first, then device intuition. **No rush.**

### Orientation (before SFQ symbols)

1. [Why superconducting electronics?](fundamentals/why-superconducting-electronics.md) — motivation, costs, niches  
2. [History of superconducting electronics](fundamentals/history-of-superconducting-electronics.md) — latching → RSFQ → efficiency / systems  
3. [Superconducting electronics landscape](fundamentals/superconducting-electronics-landscape.md) — airport map of branches  
4. [Field guides](fundamentals/fields/README.md) — deeper orientation per branch (**qubits ≠ SFQ**, [QC platforms](fundamentals/fields/quantum-computing-hardware-platforms.md), sensing, metrology, detectors, cryo-CMOS)  
5. [Where SFQ sits among logic families](fundamentals/sfq-among-logic-families.md) — RSFQ / ERSFQ / AQFP / latching  
6. [Cryogenics for electronics](fundamentals/cryogenics-for-electronics.md) — ~4 K vs mK, system taxes  

### Device path (core walk)

7. [How to read SFQ notation](fundamentals/reading-sfq-notation.md) — symbols and pulse sketches  
8. [Superconductivity intuition](fundamentals/superconductivity-intuition.md)  
9. [Josephson junction (RCSJ)](fundamentals/josephson-junction-rcsj.md)  
10. [Flux quantization](fundamentals/flux-quantization.md)  
11. [Superconducting loop / SQUID](fundamentals/superconducting-loop-squid.md)  
12. [Overdamped vs underdamped JJ](fundamentals/overdamped-vs-underdamped-jj.md)  

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
