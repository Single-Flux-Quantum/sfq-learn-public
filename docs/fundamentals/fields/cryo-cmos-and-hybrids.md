# Field: Cryo-CMOS & Hybrid Systems

**Prereqs:** [Photon detectors](superconducting-photon-detectors.md) · [Field map hub](README.md)  
**Next:** [Logic families](../sfq-among-logic-families.md) · [Cryogenics](../cryogenics-for-electronics.md)

**In one minute.** Cryo-CMOS = silicon electronics run **cold**. Hybrids mix SFQ + CMOS + warm FPGAs by stage. “At 4 K” is placement, not a technology name.

## Job

Put CMOS closer to cold payloads (sensors, detectors, qubits) to cut cables/heat and reuse silicon tooling. **Hybrids** assign blocks to SFQ, cryo-CMOS, or room-temp by metric (speed, density, noise, design time).

**Analogy palette:** two crews on one ship (airport stack of temperature decks).

| | Cryo-CMOS | Classical SFQ |
|--|-----------|---------------|
| Device | MOSFETs cold | Josephson + superconductors |
| Bit style | Usual CMOS levels | Pulses / flux packets |
| Sketch strength | Density, IP, mixed-signal | Ultra-fast timed flux logic |

```text
  Pattern examples: SFQ ↔ CMOS memory | qubit ↔ cryo-CMOS ↔ FPGA | SNSPD ↔ SFQ tagger
```

## Relevance to this curriculum

Expect hybrids in later memory/I/O concepts. Express lane can skip this page; return when system papers appear.

## Check yourself

<details>
<summary>1. What is cryo-CMOS?</summary>

CMOS operated at cryogenic temperatures near cold payloads.
</details>

<details>
<summary>2. Does “4 K controller” tell you SFQ vs CMOS?</summary>

No — ask which device.
</details>

<details>
<summary>3. Why hybrids?</summary>

Different blocks prefer different physics and ecosystems under thermal constraints.
</details>

## Next steps

Express lane: [Logic families](../sfq-among-logic-families.md) → [Cryogenics](../cryogenics-for-electronics.md).
