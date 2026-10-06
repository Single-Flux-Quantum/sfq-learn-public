# Roadmap: SFQ Logic Primitives

**Prereqs:** [Curriculum Home](../../index.md)  
**Next:** [Clocking, Biasing & Power](../clocking-biasing-power/ROADMAP.md) · [Curriculum Home](../../index.md)

## Pathway Overview

Device physics → RSFQ cells → ERSFQ / AQFP family cards. Sibling tracks cover clocking/bias, EDA timing, I/O, and memory in more depth.

```mermaid
graph TD
    O1[Why SE] --> O2[History]
    O2 --> O3[Landscape]
    O3 --> O4[Logic families]
    O4 --> O5[Cryogenics]
    O5 --> N0[Notation]
    N0 --> F0[Superconductivity]
    F0 --> F1[RCSJ]
    F1 --> F2[Flux Quantization]
    F2 --> F3[Loop / SQUID]
    F3 --> F4[Overdamped vs Underdamped]
    F4 --> B1[Phase to Pulse]
    B1 --> B2[Pulse to Logic State]
    B2 --> C0[RSFQ Overview]
    C0 --> C1[JTL]
    C1 --> C2[Splitter / Confluence]
    C2 --> C3[DFF / Retiming]
    C3 --> B4[Resistive Bias to ERSFQ]
    B4 --> C4[ERSFQ]
    C4 --> C5[AQFP]
```

## Reading order

### Orientation

1. [Why superconducting electronics?](../../fundamentals/why-superconducting-electronics.md)
2. [History of superconducting electronics](../../fundamentals/history-of-superconducting-electronics.md)
3. [Superconducting electronics landscape](../../fundamentals/superconducting-electronics-landscape.md)
4. [Where SFQ sits among logic families](../../fundamentals/sfq-among-logic-families.md)
5. [Cryogenics for electronics](../../fundamentals/cryogenics-for-electronics.md)

### Device → cells

6. [How to read SFQ notation](../../fundamentals/reading-sfq-notation.md)
7. [Superconductivity Intuition](../../fundamentals/superconductivity-intuition.md)
8. [Josephson Junction (RCSJ)](../../fundamentals/josephson-junction-rcsj.md)
9. [Flux Quantization](../../fundamentals/flux-quantization.md)
10. [Superconducting Loop / SQUID](../../fundamentals/superconducting-loop-squid.md)
11. [Overdamped vs Underdamped JJ](../../fundamentals/overdamped-vs-underdamped-jj.md)
12. [Phase to Pulse](../../bridge/phase-to-pulse.md)
13. [Pulse to Logic State](../../bridge/pulse-to-logic-state.md)
14. [RSFQ Logic Overview](../../concepts/rsfq-logic.md)
15. [JTL Interconnects](../../concepts/jtl-interconnects.md)
16. [Splitter and Confluence](../../concepts/splitter-and-confluence.md)
17. [RSFQ DFF and Retiming](../../concepts/rsfq-dff-and-retiming.md)
18. [Resistive Bias to ERSFQ](../../bridge/resistive-bias-to-ersfq.md)
19. [ERSFQ Logic](../../concepts/ersfq-logic.md)
20. [AQFP Logic](../../concepts/aqfp-logic.md)

## Continue on sibling tracks

- [Clocking, Biasing & Power](../clocking-biasing-power/ROADMAP.md)
- [EDA Timing & Verification](../eda-timing-verification/ROADMAP.md)
- [Cryogenic Interfaces & I/O](../cryogenic-interfaces-io/ROADMAP.md)
- [Cryogenic Memory](../cryogenic-memory/ROADMAP.md)
