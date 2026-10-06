# Field: SQUID Sensing & Magnetometry

**Prereqs:** [QC hardware platforms](quantum-computing-hardware-platforms.md) Â· [Field map hub](README.md)  
**Next:** [Josephson metrology](josephson-metrology-voltage-standards.md)

**In one minute.** SQUID sensing **measures** tiny magnetic signals. Digital SFQ **uses** flux as bits. Same SQUID word â‰  same job. Metrics: noise floor, bandwidth â€” not ALU GHz.

## Job

A **SQUID** loop with junctions responds strongly to magnetic **flux**. Sensing/magnetometry turns that into a transducer for lab, geophysics, or biomedical (e.g. MEG-style) magnetic signals.

**Analogy palette:** microphone (sensor) vs telegraph key (SFQ gate).

| | Sensing SQUID | Digital SFQ loop/SQUID |
|--|---------------|-------------------------|
| Flux isâ€¦ | The **measurand** | An **information token** |
| Hero plot | Noise vs frequency | Timing / cell diagram |

```text
  B-field â†’ pickup â†’ SQUID â†’ readout (often warmer) â†’ digitize
```

## Relevance to this curriculum

Orientation only. Device path still teaches loops/SQUIDs for **bits** in [loop / SQUID](../superconducting-loop-squid.md).

## Check yourself

<details markdown="1">
<summary markdown="span">1. What is SQUID sensing for?</summary>

Measuring tiny magnetic flux/field with low noise.
</details>

<details markdown="1">
<summary markdown="span">2. Does â€œSQUIDâ€ in a title prove SFQ logic or quantum computing?</summary>

No â€” ask whether flux is measured or used as a bit.
</details>

<details markdown="1">
<summary markdown="span">3. Name one sensing metric rare in RSFQ ALU papers.</summary>

Examples: field noise density, MEG shielding performance.
</details>

## Next steps

[Josephson metrology](josephson-metrology-voltage-standards.md) Â· [Hub](README.md)
