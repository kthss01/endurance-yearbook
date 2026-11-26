# GitHub Pages deployment

The yearbook is deployed as a static GitHub Pages site from the `main` branch.

## Published files

Only these paths are included in the deployment artifact:

- `index.html`
- `assets/`
- `data/`

Raw Strava exports, working documents, validation scripts, and repository history are not part of the published artifact.

## Deployment flow

1. A push to `main` starts `.github/workflows/pages.yml`.
2. `scripts/validate_data.py` checks the 2025 and 2026 JSON data.
3. Public files are copied into a clean `_site` directory.
4. GitHub Pages uploads and deploys the artifact.

The workflow can also be run manually from **Actions → Deploy GitHub Pages → Run workflow**.

Expected site URL: <https://kthss01.github.io/endurance-yearbook/>

## Local preview

From the repository root:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000/>. Opening `index.html` directly is not supported because the browser must fetch the JSON data files over HTTP.
