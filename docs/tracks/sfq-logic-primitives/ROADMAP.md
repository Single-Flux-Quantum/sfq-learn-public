# Roadmap: SFQ Logic Primitives

**Prereqs:** [Curriculum Home](../../index.md)  
**Next:** [Clocking, Biasing & Power](../clocking-biasing-power/ROADMAP.md) · [Curriculum Home](../../index.md)

## Pathway Overview

Device physics → RSFQ cells → ERSFQ / AQFP family cards. Sibling tracks cover clocking/bias, EDA timing, I/O, and memory in more depth.

```mermaid
graph TD
    O1[Why SE] --> O2[History]
    O2 --> O3[Landscape]
    O3 --> Fields[Field guides]
    Fields --> O4[Logic families]
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
4. [Field guides hub](../../fundamentals/fields/README.md) (survey branches; [qubits](../../fundamentals/fields/superconducting-qubits-and-quantum-computing.md) · [QC platforms](../../fundamentals/fields/quantum-computing-hardware-platforms.md))
5. [Where SFQ sits among logic families](../../fundamentals/sfq-among-logic-families.md)
6. [Cryogenics for electronics](../../fundamentals/cryogenics-for-electronics.md)

### Device → cells

7. [How to read SFQ notation](../../fundamentals/reading-sfq-notation.md)
8. [Superconductivity Intuition](../../fundamentals/superconductivity-intuition.md)
9. [Josephson Junction (RCSJ)](../../fundamentals/josephson-junction-rcsj.md)
10. [Flux Quantization](../../fundamentals/flux-quantization.md)
11. [Superconducting Loop / SQUID](../../fundamentals/superconducting-loop-squid.md)
12. [Overdamped vs Underdamped JJ](../../fundamentals/overdamped-vs-underdamped-jj.md)
13. [Phase to Pulse](../../bridge/phase-to-pulse.md)
14. [Pulse to Logic State](../../bridge/pulse-to-logic-state.md)
15. [RSFQ Logic Overview](../../concepts/rsfq-logic.md)
16. [JTL Interconnects](../../concepts/jtl-interconnects.md)
17. [Splitter and Confluence](../../concepts/splitter-and-confluence.md)
18. [RSFQ DFF and Retiming](../../concepts/rsfq-dff-and-retiming.md)
19. [Resistive Bias to ERSFQ](../../bridge/resistive-bias-to-ersfq.md)
20. [ERSFQ Logic](../../concepts/ersfq-logic.md)
21. [AQFP Logic](../../concepts/aqfp-logic.md)

## Continue on sibling tracks

- [Clocking, Biasing & Power](../clocking-biasing-power/ROADMAP.md)
- [EDA Timing & Verification](../eda-timing-verification/ROADMAP.md)
- [Cryogenic Interfaces & I/O](../cryogenic-interfaces-io/ROADMAP.md)
- [Cryogenic Memory](../cryogenic-memory/ROADMAP.md)
