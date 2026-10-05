# Rapid Single Flux Quantum (RSFQ) Logic Primitives

**Prereqs:** [Phase to Pulse](../bridge/phase-to-pulse.md)  
**Next:** [Track Roadmap](../tracks/sfq-logic-primitives/ROADMAP.md)  
**Tracks:** `sfq-logic-primitives`

## Intuition

Unlike CMOS logic where voltage levels (0 V / 1 V) represent Boolean states, Rapid Single Flux Quantum (RSFQ) logic uses **pulse presence or absence** within a clock period to represent binary data:

- **Logic 1**: Presence of an SFQ pulse ($\int V dt = \Phi_0$) in the clock cycle.
- **Logic 0**: Absence of an SFQ pulse in the clock cycle.

## Basic Building Blocks

1. **Josephson Transmission Line (JTL)**: Cascaded overdamped junctions storing and forwarding SFQ pulses with regenerative amplification.
2. **SFQ Splitter**: Fanout-2 tree replicating an incoming SFQ pulse to two destination lines.
3. **RSFQ DFF (Data Flip-Flop)**: A superconducting quantum interferometer storing a circulating flux quantum until a clock pulse arrives to read out the state.

## Next steps

- Explore the complete track in [SFQ Logic Primitives Roadmap](../tracks/sfq-logic-primitives/ROADMAP.md).
