# sfq-learn-public

Public curriculum repository for the Single Flux Quantum (SFQ) learning platform.

Field-fundamental teaching (including foundational technical ideas such as Josephson junctions, $\Phi_0$, and RSFQ cells) lives here. Paper-specific technical depth lives in [sfq-learn-private](https://github.com/single-flux-quantum/sfq-learn-private).

- **Live site:** https://single-flux-quantum.github.io/sfq-learn-public/
- **Website source:** `docs/`
- **Configuration:** `mkdocs.yml`
- **Deploy:** GitHub Actions (`.github/workflows/deploy-pages.yml`) builds MkDocs Material on every push to `main`
- **Local preview:** `pip install -r requirements.txt && mkdocs serve`
- **Start:** `docs/index.md` (who-this-is-for → fundamentals → bridge → concepts → tracks)
- **Lookup:** `docs/glossary.md` · `docs/paper-map.md`

Pedagogy style aligns with long, intentional wording (PQC Learn–like). Maintained via `research-sfq-learn` in [sfq-lab](https://github.com/single-flux-quantum/sfq-lab).
