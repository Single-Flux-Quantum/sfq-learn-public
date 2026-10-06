# SFQ Symbol Card (five symbols)

**Prereqs:** none (cheatsheet) · best with [How to read SFQ notation](reading-sfq-notation.md)  
**Next:** [Superconductivity intuition](superconductivity-intuition.md) · [Home](../index.md)

**In one minute.** These five labels show up everywhere in SFQ sketches. Learn the *job* of each symbol; details live on the linked pages.

## The five symbols

```text
  Φ0     flux quantum          "one packet of magnetic flux"
  Ic     critical current      "how hard you can push before the JJ switches"
  φ      Josephson phase       "the junction's internal angle; 2π slip ↔ one packet"
  βC     McCumber parameter    "damping personality: pulse vs latch"
  ∫V dt  pulse area            "for one slip, area = Φ0"
```

| Symbol | Say it | Means (teaching) | Not |
|--------|--------|------------------|-----|
| $\Phi_0$ | “phi-zero” | One flux packet / pulse token size ($\approx 2.07\,\text{mV}\cdot\text{ps}$) | A CMOS voltage rail |
| $I_c$ | “I-sub-c” | Max supercurrent before the junction switches | Supply voltage $V_{DD}$ |
| $\phi$ | “phi” | Phase across the junction | Magnetic flux $\Phi$ (related but different letter) |
| $\beta_C$ | “beta-C” | Damping: small → short pulse; large → can latch | Transistor gain |
| $\int V\,dt$ | “integral V dt” | Voltage–time area of a pulse | Peak millivolts alone |

## Interactive lab

Try this in place. Prefer full-screen? Open the [lab page](../labs/sfq-symbol-card.html).

1. Tap a card to peek at the teaching gloss, then pick the matching meaning.
2. Cycle all five: $\Phi_0$, $I_c$, $\phi$, $\beta_C$, $\int V\,dt$.

<iframe
  src="../../labs/sfq-symbol-card.html"
  title="SFQ symbol card lab"
  style="width:100%;height:700px;border:1px solid rgba(0,0,0,0.12);border-radius:0.35rem;background:#fff;"
  loading="lazy"
></iframe>

## Tiny sketches

```text
Pulse (overdamped):     V
                        |  /\
                        |_/  \___   area ≈ Φ0

Stored bit (loop):      ( loop )  with Φ0 inside ↔ circulating current
```

## Analogy palette (used in this curriculum)

| Picture | Stands for |
|---------|------------|
| **Airport / terminals** | Branches of superconducting electronics |
| **Telegraph / clicks** | Classical SFQ pulses in timing windows |
| **Music hall** | Fragile superconducting *qubits* (not SFQ logic) |

## Next steps

- Full dialect lesson: [How to read SFQ notation](reading-sfq-notation.md)  
- Express lane continues: [Superconductivity intuition](superconductivity-intuition.md)
