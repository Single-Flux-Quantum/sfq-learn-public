# Field: Cryo-CMOS & Hybrid Systems

**Prereqs:** [Photon detectors](superconducting-photon-detectors.md) Â· [Field map hub](README.md)  
**Next:** [Logic families](../sfq-among-logic-families.md) Â· [Cryogenics](../cryogenics-for-electronics.md)

**In one minute.** Cryo-CMOS = silicon electronics run **cold**. Hybrids mix SFQ + CMOS + warm FPGAs by stage. â€œAt 4â€¯Kâ€ is placement, not a technology name.

## Job

Put CMOS closer to cold payloads (sensors, detectors, qubits) to cut cables/heat and reuse silicon tooling. **Hybrids** assign blocks to SFQ, cryo-CMOS, or room-temp by metric (speed, density, noise, design time).

**Analogy palette:** two crews on one ship (airport stack of temperature decks).

| | Cryo-CMOS | Classical SFQ |
|--|-----------|---------------|
| Device | MOSFETs cold | Josephson + superconductors |
| Bit style | Usual CMOS levels | Pulses / flux packets |
| Sketch strength | Density, IP, mixed-signal | Ultra-fast timed flux logic |

```text
  Pattern examples: SFQ â†” CMOS memory | qubit â†” cryo-CMOS â†” FPGA | SNSPD â†” SFQ tagger
```

## Relevance to this curriculum

Expect hybrids in later memory/I/O concepts. Express lane can skip this page; return when system papers appear.

## Check yourself

<details markdown="1">
<summary markdown="span">1. What is cryo-CMOS?</summary>

CMOS operated at cryogenic temperatures near cold payloads.
</details>

<details markdown="1">
<summary markdown="span">2. Does â€œ4â€¯K controllerâ€ tell you SFQ vs CMOS?</summary>

No â€” ask which device.
</details>

<details markdown="1">
<summary markdown="span">3. Why hybrids?</summary>

Different blocks prefer different physics and ecosystems under thermal constraints.
</details>

## Next steps

Express lane: [Logic families](../sfq-among-logic-families.md) â†’ [Cryogenics](../cryogenics-for-electronics.md).
