# Paper map (public)

**Prereqs:** [Curriculum Home](index.md)  
**Next:** [Fundamentals](fundamentals/reading-sfq-notation.md) · [Glossary](glossary.md)

## What this page is

A **public map** into the lab's analyzed SFQ paper corpus. It helps you find **publisher pages and in-repo digests**. It is **not** a dump of paper methods or results into the learning site.

| Layer | Where | What you get |
|-------|--------|--------------|
| Public learning | This site (`sfq-learn-public`) | Fundamentals, bridges, concepts |
| Paper index | [docs/PAPERS.md](https://github.com/Single-Flux-Quantum/sfq-lab/blob/main/docs/PAPERS.md) in [sfq-lab](https://github.com/Single-Flux-Quantum/sfq-lab) | Titles, venues, links to `analysis.md` |
| Expert digests | `papers/<slug>/analysis.md` in the lab repo | Structured paper notes |
| Beginner paper explainers | `share/private` (private submodule) | Long guided readings (after public must-concepts) |

## How to use the index

1. Open the [PAPERS.md index](https://github.com/Single-Flux-Quantum/sfq-lab/blob/main/docs/PAPERS.md).  
2. Skim **Primary Domain** (Circuits & Logic, EDA Tools, Cryogenic Memory, ...).  
3. Open **Analysis** for a structured digest --- still expert-oriented.  
4. Come back to this site's [bridges](bridge/README.md) and [concepts](concepts/rsfq-logic.md) when a digest assumes vocabulary you lack.  
5. Private explainers (story-first paper walkthroughs) are written only after public must-concepts exist.

## Topic → public pages (before diving into papers)

| If the paper is about... | Learn first |
|------------------------|-------------|
| RSFQ / ERSFQ cells, libraries | [Primitives track](tracks/sfq-logic-primitives/ROADMAP.md) |
| Clocking, bias current, recycling | [Clocking & bias track](tracks/clocking-biasing-power/ROADMAP.md) |
| STA, path balancing, PTL routing | [EDA timing track](tracks/eda-timing-verification/ROADMAP.md) |
| Drivers, SFQ↔CMOS I/O | [I/O track](tracks/cryogenic-interfaces-io/ROADMAP.md) |
| VT-RAM, hybrid memory | [Memory track](tracks/cryogenic-memory/ROADMAP.md) |

## Honesty rule

Public pages teach **field fundamentals**. Paper-specific margins, novel topologies, and measured tables stay in **analysis / private explainers** --- same split as the lab's `research-sfq-learn` skill.
