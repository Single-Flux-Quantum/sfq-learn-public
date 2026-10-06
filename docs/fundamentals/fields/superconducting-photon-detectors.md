# Field: Superconducting Photon Detectors (SNSPD / SSPD)

**Prereqs:** [Josephson metrology](josephson-metrology-voltage-standards.md) · [Field map hub](README.md)  
**Next:** [Cryo-CMOS & hybrids](cryo-cmos-and-hybrids.md)

**In one minute.** SNSPDs detect **single photons** (efficiency, dark counts, jitter). That click is not an RSFQ logic token. SFQ/cryo-CMOS may appear later as **readout helpers**.

## Job

A biased superconducting nanowire can fire an electrical pulse when a photon is absorbed. Used in quantum optics, communications testbeds, and other photon-starved measurements.

**Analogy palette:** tripwire (detector) vs telegraph office (SFQ sorting/serialization).

| Metric | Meaning |
|--------|---------|
| PDE / efficiency | Photons caught |
| Dark counts | False clicks |
| Jitter | Timing uncertainty |
| Array scale | Many pixels → cable/readout problem |

```text
  Photon → SNSPD click → amp → (optional SFQ time-tag) → warm FPGA
```

## Relevance to this curriculum

Sibling that creates demand for cryogenic classical electronics. Deep SFQ path stays pulse logic; see also [QC platforms](quantum-computing-hardware-platforms.md) (photonics row).

## Check yourself

<details markdown="1">
<summary markdown="span">1. What are SNSPDs for?</summary>

Detecting single photons with high timing resolution.
</details>

<details markdown="1">
<summary markdown="span">2. Is an SNSPD an SFQ gate?</summary>

No.
</details>

<details markdown="1">
<summary markdown="span">3. How might SFQ still appear?</summary>

As classical cryogenic readout / time-encoding helpers.
</details>

## Next steps

[Cryo-CMOS & hybrids](cryo-cmos-and-hybrids.md) · [Hub](README.md)
