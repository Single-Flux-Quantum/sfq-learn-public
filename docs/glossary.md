# Glossary (plain English)

**Prereqs:** none  
**Next:** [How to read SFQ notation](fundamentals/reading-sfq-notation.md) · [Home](index.md)

Jump here whenever a word feels fuzzy. Definitions stay public and field-fundamental — not paper-specific results.

| Term | Plain English |
|------|----------------|
| **AQFP** | Adiabatic Quantum Flux Parametron — logic family using multiphase AC excitation and adiabatic switching. |
| **Bias current** | Steady current that holds a Josephson junction near its switching threshold so a small trigger can launch an SFQ pulse. |
| **β_C (McCumber)** | Damping parameter. Small → overdamped (pulse); large → underdamped (can latch). |
| **Clock window / epoch** | Time slot in which the presence or absence of an SFQ pulse means logic 1 or 0. |
| **Confluence** | Cell that merges pulses from two lines onto one (with timing rules). |
| **Concurrent-flow clocking** | Clock pulses travel roughly in the same direction as data. |
| **Counter-flow clocking** | Clock pulses travel roughly opposite to data. |
| **Critical current $I_c$** | Largest supercurrent a Josephson junction can carry before it switches. |
| **Critical temperature $T_c$** | Temperature below which a material can superconduct. |
| **DFF (RSFQ)** | Data flip-flop — stores one flux quantum until a clock pulse reads it out. |
| **ERSFQ** | Energy-efficient RSFQ — pulse logic with bias networks aimed at near-zero static resistor power. |
| **Flux quantum $\Phi_0$** | Smallest stable flux packet in a superconducting loop; $\approx 2.07\,\text{mV}\cdot\text{ps}$. |
| **Fluxon** | A discrete flux quantum treated as a mobile information token. |
| **4JL / Suzuki stack** | Latching underdamped junction stacks used to boost voltage for I/O. |
| **Gate-level pipelining** | Almost every logic cell is also a timed pipeline stage (RSFQ default). |
| **Ground island** | Circuit block with its own local ground potential (needed in serial biasing). |
| **JTL** | Josephson Transmission Line — active chain that regenerates SFQ pulses. |
| **Josephson junction (JJ)** | Weak link between superconductors; heart of SFQ switching. |
| **Latching** | Junction stays at a large voltage until reset (often underdamped I/O). |
| **Overdamped** | Junction emits a short pulse and returns to $V\approx 0$ (RSFQ gates). |
| **Path balancing** | Equalizing stage counts on reconvergent paths so pulses share an epoch. |
| **Phase $\phi$** | Superconducting phase difference across a junction; a $2\pi$ slip ↔ one $\Phi_0$. |
| **PTL** | Passive Transmission Line — long superconducting interconnect needing driver/receiver. |
| **RCSJ** | Resistively and Capacitively Shunted Junction model (JJ + $R$ + $C$). |
| **RSFQ** | Rapid Single Flux Quantum — pulse-based superconducting digital logic family. |
| **Serial biasing / current recycling** | Reusing one bias current through series-stacked ground islands. |
| **SFQ pulse** | Picosecond voltage spike with area $\int V\,dt = \Phi_0$. |
| **Splitter** | Cell that copies one SFQ pulse onto two outputs (fanout). |
| **SQUID** | Superconducting Quantum Interference Device — loop with junctions; flux sensor / building block. |
| **SQUID stack** | Series SQUID stages that add voltage for interface drive. |
| **STA** | Static timing analysis — check setup/hold-like windows without full pattern simulation. |
| **Supercurrent** | Current through a superconductor with essentially zero DC resistance. |
| **Underdamped** | Junction can latch at large voltage; used in some drivers, not typical RSFQ gates. |
| **VT-RAM** | Vortex transitional memory — stores bits as flux/vortex states in loops. |

**More wording elsewhere:** prefer the linked fundamentals / bridges when a one-liner is not enough.
