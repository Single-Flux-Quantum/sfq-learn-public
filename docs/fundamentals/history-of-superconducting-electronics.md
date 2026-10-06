# History of Superconducting Electronics

**Prereqs:** [Why superconducting electronics?](why-superconducting-electronics.md)  
**Next:** [Superconducting electronics landscape](superconducting-electronics-landscape.md)

**In one minute.** Latching era → RSFQ pulse tokens → efficiency/systems wave (+ quantum/detector customers). Vocabulary still encodes those eras. Next: landscape.

**Learning goals.** After this page you should be able to (1) place the Josephson effect and early digital Josephson projects on a simple timeline, (2) explain why Rapid Single Flux Quantum (RSFQ) logic became a landmark idea, (3) describe the later “energy-efficient” wave (ERSFQ, AQFP, and kin) without memorizing paper titles, and (4) see today’s activity as a revival with new companions (quantum, detectors, cryo-CMOS) — not as a brand-new invention from nowhere.

## Why this matters

Device pages can make SFQ feel eternal — as if Josephson junctions and flux pulses always existed for computers. Historically, the field **rose, stumbled, reinvented itself, and rose again** with different goals.

Knowing that arc helps you:

- forgive “old” vocabulary that still appears in papers,
- understand why some groups obsess over **static power**, and
- recognize that **quantum computing interfaces** are a new demand signal layered on older classical Josephson digital work.

This is a teaching history, not a complete historiography. Dates are approximate anchors.

## Analogy: three eras of the same workshop

Imagine one workshop that rebuilds its flagship product three times:

1. **Latching era** — try to build digital logic with Josephson junctions that switch to a voltage and stay there (like a latching relay).
2. **Pulse era (RSFQ)** — stop latching for internals; send tiny flux packets as bits.
3. **Efficiency / systems era** — keep pulse (or adiabatic) logic, but attack bias power, scaling, EDA, and cryogenic system integration; also serve quantum and detector customers.

Same physical ingredients (superconductors, junctions, cryogenics); different product definitions.

```text
  1960s           1970s–80s           late 1980s–90s        2000s–today
  Josephson       latching digital    RSFQ pulse logic      energy + EDA +
  effect          projects            classical peak        quantum/detectors
```

## Picture 1 — Timeline sketch (teaching, not exhaustive)

```mermaid
flowchart LR
  J1962[1962 Josephson effect] --> Early[1970s latching JJ digital]
  Early --> Dip[Challenges vs CMOS path]
  Dip --> RSFQ[Late 1980s RSFQ idea]
  RSFQ --> Classic[1990s classical SFQ demos]
  Classic --> Eff[2000s+ ERSFQ / AQFP / low static power]
  Eff --> Today[EDA, memory, I/O, quantum & detectors]
```

### Era 1 — Prediction and latching ambitions

Brian Josephson predicted tunneling supercurrents through a weak barrier in **1962**. Experimental confirmation followed quickly. The junction became not only a physics curiosity but a possible **electronic switch**.

In the **1970s–early 1980s**, major efforts (often summarized as the IBM Josephson computer project and related work elsewhere) explored **latching** Josephson logic: underdamped junctions that switch to a finite voltage and remain there until reset. The vision was a superconducting mainframe-class machine.

Those projects taught the community enormous practical lessons — fabrication, packaging, margins — but they also collided with a moving target: room-temperature semiconductor technology was advancing rapidly in density and tooling. Latching Josephson digital did not become the mainstream computer.

**Teaching moral:** early failure modes were often **ecosystem and scaling politics**, not “Josephson physics is fake.”

### Era 2 — RSFQ and the pulse token

In the late **1980s**, the **Rapid Single Flux Quantum** approach reshaped the digital story. Instead of holding a latching voltage inside every gate, overdamped junctions emit a short voltage pulse whose area is one flux quantum $\Phi_0$. Logic becomes about **whether a pulse appears in a timing window**, and storage becomes about **trapping a flux quantum in a loop**.

That design style unlocked:

- natural **gate-level pipelining**,
- very high internal clock ambitions, and
- a clean link between device physics ($\Phi_0$) and the digital bit.

Through the **1990s**, RSFQ became the reference classical SFQ family in many research groups: ALUs, shift registers, simple microprocessors in demonstration form, and a growing cell vocabulary (JTL, splitter, DFF, and friends).

**Teaching moral:** when this curriculum says “SFQ pulse,” it is speaking the RSFQ-era language that still dominates much of the classical literature.

### Era 3 — Energy, variants, and new customers

Classic resistively biased RSFQ pays a **static power** cost: bias resistors continuously dissipate even when idle. As cryogenic systems and large gate counts became more serious conversations, the field pushed variants and siblings:

- **ERSFQ** and related ideas — keep pulse logic, redesign bias networks toward near-zero static resistor dissipation.
- **AQFP** and adiabatic families — different excitation (often multiphase AC) and energy-reuse intuition.
- Other named families (you will meet them lightly on the [logic families](sfq-among-logic-families.md) page).

At the same time, **demand signals multiplied**:

- cryogenic **memory** and hybrid Josephson–CMOS ideas,
- **I/O** into warm electronics,
- **EDA** (timing analysis, placement, routing) so chips can grow beyond hand layout,
- **quantum** control/readout and **detector** digitization needs.

**Teaching moral:** today’s papers are not only “faster ALU demos.” Many are about making the platform **buildable and integrable**.

## Picture 2 — What each era optimized

```text
  Era              Bit style              Main headache remembered
  ---------------  ---------------------  ----------------------------
  Latching         held voltage           margins, reset, vs CMOS race
  RSFQ classic     Φ0 pulses + loops      static bias power, timing
  Efficiency wave  pulses / adiabatic     bias, AC clocks, EDA scale
  Systems today    all of the above       I/O, memory, cryo integration
```

## Worked example 1 — Reading an old vs new abstract

**Old-flavored abstract keywords:** “20 GHz,” “RSFQ,” “Nb,” “pipeline,” “bit-energy.”  
**New-flavored abstract keywords:** “ERSFQ,” “zero static power,” “qSTA,” “cryogenic memory,” “qubit control,” “SNSPD readout.”

**Exercise:** classify the paper’s *era of concern* without reading the PDF.

- Speed demo language → often classical RSFQ pride.
- Static power / bias elimination → efficiency-wave concern.
- Timing tools / routers → EDA maturation.
- mK / qubit / SNSPD → co-location customer.

## Worked example 2 — Why mention IBM’s Josephson project at all?

**Prompt:** If latching logic “lost,” why teach it?

**Answer:** Because (1) underdamped latching still appears in **I/O and driver** stories, (2) many misconceptions (“Josephson logic = latching voltage”) come from that era, and (3) the RSFQ invention is easier to appreciate as a **deliberate alternative** to latching, not as the first idea anyone had.

## Comparison table — eras at a glance

| Era | Rough time | Signature idea | Still relevant? |
|-----|------------|----------------|-----------------|
| Josephson discovery | 1960s | Weak-link supercurrent / phase physics | Yes — device foundation |
| Latching digital | 1970s–80s | Voltage-state logic | Yes — I/O, history, misconceptions |
| RSFQ classical | late 1980s–1990s | $\Phi_0$ pulse tokens | Yes — core curriculum vocabulary |
| Efficiency + systems | 2000s–today | Low static power, EDA, memory, quantum/detector links | Yes — modern paper landscape |

## Common misconceptions

1. **“SFQ started in the 2010s with quantum hype.”**  
   Classical RSFQ is decades older; quantum is a major *new customer*, not the sole origin.

2. **“Latching Josephson failed because superconductivity failed.”**  
   The physics worked; the product race and ecosystem story is more complicated.

3. **“ERSFQ replaced RSFQ, so ignore old papers.”**  
   You still need RSFQ pulse intuition; ERSFQ is largely a bias/energy evolution of that world.

4. **“History is only for historians.”**  
   Paper vocabulary and design defaults still encode era assumptions (resistive bias vs inductive bias, AC vs DC excitation).

5. **“One country / one lab owns the timeline.”**  
   The field is international and multi-lab; this page deliberately stays schematic.

## CMOS contrast

| CMOS history habit | Superconducting digital history habit |
|--------------------|----------------------------------------|
| Continuous process-node march | Smaller specialty process community |
| MOS → CMOS → FinFET narrative | Latching → RSFQ pulses → efficiency variants |
| Software stack co-evolves massively | Tooling still catching up (EDA, PDKs) |
| Room-temp product continuity | Cryogenic system story always present |

## Bridge to SFQ circuits

History tells you **why the vocabulary looks the way it does**. Next:

- [Landscape](superconducting-electronics-landscape.md) — SFQ is one branch among sensors, standards, detectors, and hybrids.  
- Later device pages will show *how* a junction makes a $\Phi_0$ pulse — the RSFQ-era trick that still anchors this curriculum.

## Check yourself

<details>
<summary>1. What changed conceptually from latching Josephson logic to RSFQ?</summary>

From holding a switched voltage state toward representing bits as short $\Phi_0$-area pulses and stored flux in loops.
</details>

<details>
<summary>2. Name one reason classic RSFQ invited an “energy-efficient” follow-on wave.</summary>

Resistive bias networks dissipate static power even when idle; later families attack that cost.
</details>

<details>
<summary>3. Is quantum computing the origin of SFQ?</summary>

No. Classical RSFQ predates the modern quantum engineering boom; quantum is an important modern application/neighbor.
</details>

<details>
<summary>4. Why does latching still matter pedagogically?</summary>

It explains older ambitions, still appears in some I/O/driver contexts, and clarifies what RSFQ deliberately stopped doing internally.
</details>

<details>
<summary>5. What “era of concern” is a paper about cryogenic STA and routers likely in?</summary>

The systems/EDA maturation wave — making larger SFQ designs buildable.
</details>

<details>
<summary>6. What should you read next?</summary>

[Superconducting electronics landscape](superconducting-electronics-landscape.md).
</details>

## Glossary spot-links

Glossary: RSFQ, ERSFQ, AQFP, Josephson junction, latching, SFQ pulse, $\Phi_0$.

## Next steps

- Map the wider field: [Superconducting electronics landscape](superconducting-electronics-landscape.md).
