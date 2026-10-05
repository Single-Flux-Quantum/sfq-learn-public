# Magnetic Flux Quantization in Superconductors

**Prereqs:** none  
**Next:** [Phase to Pulse](../bridge/phase-to-pulse.md)

## Why this matters

Superconducting Single-Flux-Quantum (SFQ) circuits store and process digital information not as continuous voltage levels, but as discrete quantum packets of magnetic flux known as **fluxons**.

## The Flux Quantum

In a closed superconducting loop, the magnetic flux $\Phi$ is strictly quantized in integer multiples of the magnetic flux quantum $\Phi_0$:

$$\Phi_0 = \frac{h}{2e} \approx 2.0678 \times 10^{-15}\text{ Wb} = 2.0678\text{ mV}\cdot\text{ps}$$

When a Josephson junction switches (phases slip by $2\pi$), it transfers exactly one $\Phi_0$ through the circuit, generating an ultra-short voltage pulse whose time-integral is:

$$\int V(t)\,dt = \Phi_0$$

## Next steps

- Learn how Josephson junctions turn phase slips into voltage pulses in [Phase to Pulse](../bridge/phase-to-pulse.md).
