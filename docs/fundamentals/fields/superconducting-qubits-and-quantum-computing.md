# Field: Superconducting Qubits & Quantum Computing

**Prereqs:** [Digital SFQ overview](digital-sfq-overview.md) · [Field map hub](README.md)  
**Next:** [QC hardware platforms](quantum-computing-hardware-platforms.md) · [SQUID sensing](squid-sensing-magnetometry.md)

**Learning goals.** After this page you should be able to (1) say what a **qubit** is for at a teaching level, (2) place **superconducting qubits** as one hardware platform inside **quantum computing**, (3) explain why this is a **different branch** from classical SFQ digital logic (**canonical contrast for the whole curriculum**), and (4) describe how SFQ or cryo-CMOS may appear as **classical helpers** without becoming the qubit.

**In one minute.** Qubit ≠ classical SFQ. Qubits store quantum states (often mK); SFQ sends classical flux pulses (often ~4 K). SFQ may help control a fridge — it is not the qubit. Other hardwares: [platforms](quantum-computing-hardware-platforms.md).

## Why this field exists

**Quantum computing** aims to process information in ways that use quantum states — superposition, entanglement, and carefully engineered gate operations — to attack certain computational problems differently from classical bits.

A **qubit** is the basic quantum information unit (the quantum analogue of a bit, but with a richer state space). Many physical platforms can host qubits. **Superconducting qubits** are circuits built from Josephson junctions and superconducting resonators/wires that encode quantum information in engineered energy levels.

This field shares cryogenics and Josephson vocabulary with classical SFQ, which is exactly why newcomers confuse them. The jobs differ:

| Classical SFQ | Superconducting qubits |
|---------------|------------------------|
| Reliable classical bits | Fragile quantum states |
| Pulse timing / BER | Coherence / gate fidelity |
| Often ~4 K digital Nb demos | Often millikelvin device stages |

## Analogy: a quiet music hall vs a click telegraph

Classical SFQ is like a **telegraph**: loud, timed clicks that mean 0/1 if they arrive in the right window.

A superconducting qubit processor is more like a **music hall**: you carefully prepare delicate tones (quantum states). Any extra noise, heat, or clumsy cable can ruin the performance. You may still station telegraph operators (classical SFQ / cryo-CMOS) in side rooms to send instructions and write down results — but the concert is not the telegraph.

```text
  mK stage:   qubit chip (the "music")
  warmer:     amplifiers, filters, maybe SFQ/cryo-CMOS helpers
  300 K:      control electronics, servers
```

## Picture 1 — Quantum computing ⊃ superconducting qubits

```mermaid
flowchart TD
  QC[Quantum computing as a field]
  QC --> SC[Superconducting qubits]
  QC --> Other[Other platforms: ions, photonics, atoms, dots, topological…]
  SC --> Ctrl[Classical control & readout stack]
  Ctrl --> SFQh[Possible SFQ helpers]
  Ctrl --> CMOSh[Possible cryo-CMOS helpers]
  Ctrl --> RT[Room-temperature electronics]
  Other --> Map[See QC hardware platforms map]
```

**Teaching sentence:** quantum computing is the discipline; superconducting qubits are one hardware choice; SFQ is usually classical electronics that might support that hardware.

**Other platforms (ions, photonics, neutral atoms, quantum dots, topological):** see the comparison map → [Quantum computing hardware platforms](quantum-computing-hardware-platforms.md).

## Picture 2 — What “good” means here

```text
  Metric people obsess over     Rough meaning (teaching)
  --------------------------    ---------------------------------
  T1 / T2 / coherence           How long the quantum state survives
  Gate fidelity                 How accurately you rotate/entangle
  Readout fidelity              How correctly you measure 0/1
  Crosstalk / scalability       Many qubits without ruining each other
  Heat load / wiring            Can the fridge and cables keep up?
```

Contrast with SFQ metrics (clock rate, path balance, pulse BER). Different scoreboard.

### Light device intuition (no full QC course)

Many teaching superconducting qubits use Josephson junctions to create a **nonlinear circuit** whose quantum energy levels can be addressed with microwave pulses. Names you will hear (transmon and relatives) are engineering trade-offs among anharmonicity, charge noise sensitivity, and manufacturability.

You do **not** need Hamiltonian homework to finish orientation. You need:

1. Qubit ≠ classical bit.  
2. Superconducting qubit ≠ RSFQ gate.  
3. Same fridge can host both a quantum chip and classical helpers.

## Worked example 1 — Title triage

| Title fragment | Likely emphasis |
|----------------|-----------------|
| “transmon $T_1$ improvement” | Qubit device physics |
| “SFQ pulse generator for qubit control” | Classical SFQ helper for QC |
| “20 GHz RSFQ microprocessor” | Classical digital SFQ (often no qubits) |
| “cryo-CMOS qubit controller at 4 K” | Hybrid classical control for QC |

## Worked example 2 — “Is SFQ a type of quantum computer?”

**Short answer:** **No.**

**Longer answer:** SFQ processors discussed in classical literature are **classical**. Some research explores quantum information ideas with Josephson circuits, but the mainstream RSFQ/ERSFQ/AQFP teaching path in this curriculum is classical digital. When SFQ appears in quantum labs, ask whether the paper’s hero is the **qubit** or the **classical interface**.

## Comparison table — three layers people blur

| Layer | Question it answers |
|-------|---------------------|
| Quantum computing (field) | What algorithms / information model? |
| Superconducting qubits (platform) | What physical object holds the qubit? |
| SFQ / cryo-CMOS (classical helpers) | How do we control, readout, serialize, thermalize? |

## Common misconceptions

1. **“Josephson junction ⇒ qubit.”**  
   Junctions also make classical SFQ gates, SQUIDs, and standards.

2. **“SFQ is quantum because flux is quantized.”**  
   Flux quantization appears in classical SFQ too; “quantum computing” means quantum *information processing*.

3. **“All superconducting electronics is millikelvin.”**  
   Classical Nb SFQ often lives near ~4 K; qubits often need colder stages.

4. **“If I learn SFQ, I have learned quantum computing.”**  
   You learned a possible classical neighbor skill — not qubit physics or QC algorithms.

5. **“Qubit control must be SFQ.”**  
   Many stacks use room-temp electronics + cryo-CMOS; SFQ is one option among helpers.

6. **“Quantum computing replaced classical SFQ historically.”**  
   Classical SFQ is older as a digital program; QC is a major new demand signal.

## CMOS contrast

| CMOS digital learner habit | Qubit-field habit |
|----------------------------|-------------------|
| Bits are robust voltage levels | States are fragile; noise is the enemy |
| Clock domains and setup/hold | Microwave control pulses and decoherence |
| Bring-up on a bench | Dilution fridge schedules and wiring budgets |

Classical SFQ sits between these worlds: more “digital” than qubits, more “cryo-specialized” than room-temp CMOS.

## Bridge to SFQ circuits

This curriculum will **not** turn into a full quantum computing course. It will:

- keep teaching classical SFQ deeply, and  
- treat qubit systems as an important **customer/neighbor** in I/O and systems tracks.

If your goal is qubit device physics, use this page as orientation, then seek a dedicated QC curriculum. If your goal is SFQ, continue the field survey and return to [logic families](../sfq-among-logic-families.md).

## Check yourself

<details>
<summary>1. What is a qubit in one teaching sentence?</summary>

A physical system that stores quantum information (richer than a classical 0/1), used as the building block of quantum computers.
</details>

<details>
<summary>2. Are superconducting qubits the same as RSFQ logic?</summary>

No. Qubits are quantum hardware; RSFQ is a classical pulse-logic family.
</details>

<details>
<summary>3. Why do qubit setups emphasize millikelvin stages?</summary>

To reduce thermal noise and operate the quantum devices as designed — colder than typical ~4 K Nb SFQ digital demos.
</details>

<details>
<summary>4. How can classical SFQ still appear in a quantum lab?</summary>

As a helper for control, readout, serialization, or reducing cable heat — optimizing classical metrics beside the qubit chip.
</details>

<details>
<summary>5. Name two non-superconducting qubit platforms (awareness only).</summary>

Examples: trapped ions, photonic qubits, neutral atoms, quantum dots. Full map: [QC hardware platforms](quantum-computing-hardware-platforms.md).
</details>

<details>
<summary>6. What is next in the fields survey?</summary>

[QC hardware platforms](quantum-computing-hardware-platforms.md), then [SQUID sensing](squid-sensing-magnetometry.md).
</details>

## Glossary spot-links

Glossary: qubit, quantum computing, Josephson junction, cryogenic, SFQ, cryo-CMOS.

## Next steps

- Map other QC hardwares: [Quantum computing hardware platforms](quantum-computing-hardware-platforms.md).  
- Then continue survey: [SQUID sensing](squid-sensing-magnetometry.md).  
- Thermal map reminder: [Cryogenics for electronics](../cryogenics-for-electronics.md).
