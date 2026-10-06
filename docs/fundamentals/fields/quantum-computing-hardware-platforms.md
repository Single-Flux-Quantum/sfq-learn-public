# Field: Quantum Computing Hardware Platforms

**Prereqs:** [Superconducting qubits & quantum computing](superconducting-qubits-and-quantum-computing.md) Â· [Field map hub](README.md)  
**Next:** [SQUID sensing & magnetometry](squid-sensing-magnetometry.md) Â· [Field map hub](README.md)

**In one minute.** QC field â‰  one hardware. Algorithmic speedup (when it exists) uses superposition, entanglement, interference â€” see [qubits page](superconducting-qubits-and-quantum-computing.md#how-quantum-mechanics-can-accelerate-some-computations). Superconducting overlaps SFQ toolbox; ions/atoms weak; photonics via detectors; dots via cryo-CMOS; topological awareness-only.

**Learning goals.** After this page you should be able to (1) name major **qubit hardware platforms** beyond superconducting circuits, (2) separate the **quantum computing field** from any one platform, (3) rank each platformâ€™s relevance to *this* SFQ / superconducting-electronics curriculum, and (4) triage talk titles without assuming â€œquantum = Josephson qubits = SFQ.â€

## Why this matters

People say â€œquantum computingâ€ as if it were one machine. In practice it is a **field** implemented on several **hardware platforms**: trapped ions, superconducting circuits, photonics, neutral atoms, semiconductor quantum dots, topological proposals, and more.

Only the **superconducting** platform shares Josephson junctions and deep cryogenics tightly with classical SFQ. The others are still â€œrelatedâ€ as QC siblings â€” but usually **not** as SFQ cell-library cousins.

This page is an **orientation map**. It is not a course in ion trapping, integrated photonics, or topological materials.

## Analogy: one sport, many vehicles

Quantum computing is the **sport** (the rules of quantum information).

Hardware platforms are different **vehicles**:

- superconducting circuits â†’ a cryogenic microwave race car,
- trapped ions â†’ a precision laser-guided craft,
- photonics â†’ a light-based flyer,
- â€¦and so on.

Hardware platforms are different **vehicles** for the same sport rules (including superposition / entanglement / interference on the algorithm side). Classical SFQ is often a **pit-crew telegraph** â€” it does not play the quantum-algorithm sport itself.

```text
  Quantum computing (field / algorithms / information model)
           |
           +-- Superconducting qubits     â† strongest link to SFQ toolbox
           +-- Trapped ions
           +-- Photonics
           +-- Neutral atoms
           +-- Quantum dots
           +-- Topological (early / research)
```

## Picture 1 â€” Three layers (do not collapse them)

```mermaid
flowchart TD
  Field[Quantum computing field]
  Field --> SC[Superconducting]
  Field --> Ion[Trapped ion]
  Field --> Ph[Photonics]
  Field --> NA[Neutral atom]
  Field --> QD[Quantum dots]
  Field --> Top[Topological]
  SC --> Help[Classical helpers: SFQ / cryo-CMOS / RT electronics]
  Ph --> Det[Often needs detectors e.g. SNSPD]
```

| Layer | Question |
|-------|----------|
| Field | What information model / algorithms? |
| Platform | What physical object is the qubit? |
| Classical helpers | How do we control, readout, serialize, thermalize? |

Classical SFQ lives mainly in the **helpers** row for superconducting (and sometimes detector) systems â€” not as a sixth â€œSFQ qubit platformâ€ in the list above.

## Picture 2 â€” Platforms at teaching resolution

### Superconducting qubits

**Physical idea:** Josephson circuits + resonators encode quantum states; microwave control/readout; typically millikelvin device stages.

**Relevance to us:** **Strong.** Same Josephson/cryogenic neighborhood as classical SFQ. Deep page: [Superconducting qubits & quantum computing](superconducting-qubits-and-quantum-computing.md).

### Trapped ions

**Physical idea:** Individual ions held in electromagnetic traps; quantum states in internal energy levels; gates and readout often use lasers.

**Relevance to us:** **Weak.** Important QC sibling; little overlap with RSFQ cell design. Shared only at the abstract â€œclassical control computerâ€ layer.

### Photonics

**Physical idea:** Quantum information in photonic states (modes, polarization, time bins, cluster states, etc.); heavy use of sources, interferometers, and detectors.

**Relevance to us:** **Medium (via detectors / readout).** Superconducting nanowire detectors ([SNSPD page](superconducting-photon-detectors.md)) often appear in photonic and quantum-optics experiments. Classical SFQ may help time-tag or serialize â€” the photonic qubit is still not an RSFQ gate.

### Neutral atoms

**Physical idea:** Arrays of neutral atoms (often in optical tweezers); interactions engineered (e.g. Rydberg) for gates; laser control.

**Relevance to us:** **Weak.** QC sibling; not a Josephson digital family.

### Quantum dots

**Physical idea:** Semiconductor nanostructures confine charge/spin states used as qubits; often cryogenic; closer to the semiconductor ecosystem.

**Relevance to us:** **Weakâ€“medium.** More kinship with [cryo-CMOS / hybrids](cryo-cmos-and-hybrids.md) and semiconductor thinking than with RSFQ pulse logic. Still not â€œSFQ.â€

### Topological qubits

**Physical idea:** Seek qubits protected by topological properties of engineered quantum matter (popular teaching pointer: Majorana-based proposals and related research). Still largely a research frontier rather than a routine cell-library platform.

**Relevance to us:** **Mostly none for SFQ gates.** Awareness only â€” do not import â€œtopologicalâ€ buzzwords into RSFQ schematics.

## Comparison table â€” relevance to this curriculum

| Platform | Holds the qubit how? (sketch) | Typical control flavor | Link to SFQ / this lab |
|----------|-------------------------------|------------------------|------------------------|
| Superconducting | JJ circuit levels | Microwaves + mK fridge | **Strong** sibling; SFQ as possible helper |
| Trapped ion | Ion internal states in a trap | Lasers + vacuum apparatus | Weak â€” QC field only |
| Photonics | Photonic degrees of freedom | Optics + detectors | Medium â€” SNSPD / readout overlap |
| Neutral atom | Atom array states | Lasers / tweezers | Weak â€” QC field only |
| Quantum dots | Semiconductor confined states | Electrical / MW + cryo | Weakâ€“medium â€” cryo-CMOS story |
| Topological | Proposed protected modes | Platform-specific / research | Mostly out of scope |

## Worked example 1 â€” Title triage

| Title fragment | Platform guess | Our takeaway |
|----------------|----------------|--------------|
| â€œtransmon $T_1$ at 20â€¯mKâ€ | Superconducting | Read [qubits page](superconducting-qubits-and-quantum-computing.md); SFQ may appear in control papers |
| â€œion shuttling QCCDâ€ | Trapped ion | QC sibling; not SFQ curriculum deep path |
| â€œsilicon spin qubit in a quantum dotâ€ | Quantum dots | Semi/cryo story; not RSFQ |
| â€œRydberg gates in atom arraysâ€ | Neutral atom | QC sibling only |
| â€œSNSPD for photonic boson samplingâ€ | Photonics + detectors | Detector field + possible SFQ helper |
| â€œSFQ microwave pulse generator for qubitsâ€ | Helper for superconducting QC | **Classical SFQ**, not a qubit platform |
| â€œMajorana zero mode candidateâ€ | Topological research | Awareness; not SFQ cells |

## Worked example 2 â€” â€œAre these related to us?â€

**Short answer:** Related as **quantum computing context**, especially superconducting + photonic-detector overlap.  

**Not related as:** alternate RSFQ/ERSFQ/AQFP logic families. Those stay on [digital SFQ](digital-sfq-overview.md) and [logic families](../sfq-among-logic-families.md).

## Common misconceptions

1. **â€œAll quantum computing is superconducting.â€**  
   False â€” several platforms compete and coexist.

2. **â€œSFQ is one of the qubit platforms.â€**  
   False in the usual classical-SFQ sense â€” SFQ is classical digital electronics.

3. **â€œPhotonic quantum computing means we must teach RSFQ.â€**  
   False â€” teach detectors/interfaces if needed; not pulse-logic ALUs by default.

4. **â€œQuantum dots are Josephson SFQ.â€**  
   False â€” semiconductor nanostructures â‰  Nb RSFQ cells.

5. **â€œTopological qubits replace the need to learn coherence.â€**  
   Over-simplified marketing; still a research story.

6. **â€œIf I master all platforms, I have mastered SFQ.â€**  
   False â€” SFQ deep path is classical Josephson digital design.

## CMOS contrast

| CMOS learner habit | QC platforms habit |
|--------------------|--------------------|
| One dominant digital device family (MOSFET) | Multiple qubit modalities in parallel |
| â€œProcess nodeâ€ tells much of the story | Platform choice changes lasers vs microwaves vs traps |
| Room-temp default | Many platforms need vacuum, cryogenics, or both |

## Bridge to SFQ circuits

After this map:

- Stay on the **superconducting** QC sibling if you care about Josephson overlap.  
- Use [SNSPD](superconducting-photon-detectors.md) / [cryo-CMOS](cryo-cmos-and-hybrids.md) when titles mention detectors or cold silicon control.  
- Return to the SFQ deep path via [logic families](../sfq-among-logic-families.md) â†’ [cryogenics](../cryogenics-for-electronics.md) â†’ [notation](../reading-sfq-notation.md).

We **defer** full courses for ions, atoms, photonics, dots, and topological hardware â€” on purpose.

## Check yourself

<details markdown="1">
<summary markdown="span">1. Name three qubit platforms besides superconducting circuits.</summary>

Examples: trapped ions, photonics, neutral atoms, quantum dots, topological proposals.
</details>

<details markdown="1">
<summary markdown="span">2. Which platform shares the strongest toolbox overlap with classical SFQ?</summary>

Superconducting qubits (Josephson + cryogenics).
</details>

<details markdown="1">
<summary markdown="span">3. Why might photonics still show up in this labâ€™s orbit?</summary>

Because superconducting photon detectors (SNSPD/SSPD) and cryogenic readout helpers often support photonic/quantum-optics experiments.
</details>

<details markdown="1">
<summary markdown="span">4. Is a paper titled â€œSFQ controller for transmonsâ€ about a new qubit platform called SFQ?</summary>

No â€” classical SFQ helper for a superconducting qubit system.
</details>

<details markdown="1">
<summary markdown="span">5. Should this curriculum teach a full trapped-ion course?</summary>

No â€” orientation awareness only; deep path stays SFQ digital.
</details>

<details markdown="1">
<summary markdown="span">6. What is next in the fields survey?</summary>

[SQUID sensing & magnetometry](squid-sensing-magnetometry.md), or return to the [hub](README.md).
</details>

## Glossary spot-links

Glossary: qubit, quantum computing, trapped ion, photonic qubit, neutral atom, quantum dot, topological qubit, SNSPD, SFQ, cryo-CMOS.

## Next steps

- Continue fields: [SQUID sensing](squid-sensing-magnetometry.md).  
- Or deepen superconducting QC only: re-read [qubits & QC](superconducting-qubits-and-quantum-computing.md).
