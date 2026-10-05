# From Josephson Phase to Picosecond SFQ Pulses

**Prereqs:** [Flux Quantization](../fundamentals/flux-quantization.md)  
**Next:** [RSFQ Logic Primitives](../concepts/rsfq-logic.md)

**Learning goals.** Understand how the AC Josephson relation converts a $2\pi$ phase slip into a $\sim 1\text{–}5\text{ ps}$ voltage pulse with $\sim 1\text{ mV}$ peak amplitude.

## Intuition

A Josephson junction is governed by the second Josephson relation:

$$V(t) = \frac{\hbar}{2e} \frac{d\phi}{dt} = \frac{\Phi_0}{2\pi} \frac{d\phi}{dt}$$

When a junction is biased near its critical current $I_c$ and receives a trigger pulse, the superconducting phase $\phi$ rotates rapidly by $2\pi$ radians (a phase slip). Integrating voltage across time:

$$\int_{-\infty}^{\infty} V(t)\,dt = \frac{\Phi_0}{2\pi} \int_0^{2\pi} d\phi = \Phi_0 \approx 2.07\text{ mV}\cdot\text{ps}$$

For typical niobium junctions ($I_c R_n \sim 1\text{ mV}$), this produces a Gaussian-like pulse with full-width at half-maximum (FWHM) of a few picoseconds.

## Next steps

- Explore how these pulses are stored and routed in logic gates in [RSFQ Logic Primitives](../concepts/rsfq-logic.md).
