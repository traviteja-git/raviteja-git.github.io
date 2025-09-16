<div align="center">

# Raviteja | Data & Product Engineering Portfolio ⚡️

<strong>Cloud-native data platforms • Identity resolution • Apache Airflow & Spark • Performance-focused ETL</strong>

<br/>
<a href="https://traviteja.com" target="_blank"><b>Live Site → traviteja.com</b></a>

</div>

## Overview
This repository contains the source code for my personal developer & data engineering portfolio built with React (Create React App + SCSS). It pulls dynamic data (GitHub pinned repositories, Medium posts) at build/start time via a lightweight Node pre-fetch script (`fetch.js`) and renders structured sections defined declaratively in `src/portfolio.js`.

## Feature Highlights
- Config-driven content (`src/portfolio.js`) – no framework rewiring needed
- Splash screen with Lottie animation
- Themed skills & progress bars
- Education & multi-role work experience timeline
- Certifications & achievement badges (cards with images)
- Blog section (local data or live Medium feed)
- Podcast embeds (Spotify)
- Optional GitHub pinned repo integration (GraphQL API)
- Optional Twitter timeline embedding
- Fully static export (works on GitHub Pages / any static host)
- Dockerized development environment (Node 20 alpine)

## Tech Stack
- React 16 + react-scripts 5
- SCSS theming (`_globalColor.scss`)
- Lottie animations (`lottie-react`)
- GitHub GraphQL API (optional, via build-time fetch)
- Medium RSS → JSON (rss2json service)
- Emoji rendering (`react-easy-emoji`)
- Headroom header effects (`react-headroom`)
- Twitter embed (`react-twitter-embed`)
- Color extraction (`colorthief`)

## Project Structure (key paths)
```
src/
  portfolio.js          # Main declarative content & toggles
  _globalColor.scss     # Global color palette & theming
  assets/               # Images, fonts, lottie JSON
  components/           # Reusable presentational components
  containers/           # Section-level containers (greeting, skills, etc.)
  contexts/StyleContext # Basic styling context provider (future theming)
fetch.js                # Pre-build data fetch (GitHub + Medium)
public/profile.json     # Generated GitHub profile data (if enabled)
public/blogs.json       # Generated Medium blogs data (if enabled)
Dockerfile              # Containerized dev/runtime
env.example             # Template env vars
```

## Environment Configuration
Create `.env` from the template:
```
cp env.example .env
```
Available variables (all optional unless enabling a feature):
```
REACT_APP_GITHUB_TOKEN=ghp_xxx   # Classic token, no scopes required (for pinned repos)
GITHUB_USERNAME=traviteja-git    # Your GitHub username
USE_GITHUB_DATA=true             # Set to true to fetch profile/pinned repos
MEDIUM_USERNAME=yourMediumName   # Enable Medium blog fetch
```
Safety: Never commit `.env`. The fetch script only runs locally / in your controlled CI.

Toggle visibility of sections by setting `display: true/false` (or specific flags) inside `src/portfolio.js` (e.g. `blogSection.display`, `podcastSection.display`).

## Running Locally
```
git clone https://github.com/traviteja-git/raviteja-git.github.io.git
cd raviteja-git.github.io
cp env.example .env   # then edit as needed
npm install
npm start
```
The `start` script runs `node fetch.js` first, then launches the CRA dev server on port 3000.

## Build
```
npm run build
```
Outputs production assets to `build/` (includes fetched JSON data). You can deploy this folder to any static host.

## Docker Usage
```
# Build image
docker build -t raviteja-portfolio:latest .

# Run container (dev default)
docker run --rm -p 3000:3000 --env-file .env raviteja-portfolio:latest
```
Edit source locally & mount if you want hot reload inside container:
```
docker run --rm -p 3000:3000 -v "$PWD":/app -v /app/node_modules --env-file .env raviteja-portfolio:latest
```

## Customizing Content
Edit `src/portfolio.js` to update:
- Greeting / summary (`greeting`)
- Social links (`socialMediaLinks`)
- Skills & software skill icons (`skillsSection`)
- Progress bars (`techStack.experience`)
- Education (`educationInfo.schools`)
- Work history (`workExperiences.experience`)
- Certifications & achievements (`certificationSection`, `achievementSection`)
- Blogs & podcasts (`blogSection`, `podcastSection`)
- Contact info (`contactInfo`)

Icons use Font Awesome class names. Emojis: wrap text with `emoji("text 🚀")` helper.

### Resume
Place `resume.pdf` in `src/containers/greeting/` (same folder as `Greeting.js`). The resume button always triggers a direct download (filename `Raviteja-Resume.pdf`). External links are no longer used for viewing in-browser.

### Lottie Animations
Replace JSON under `src/assets/lottie/` and update import in `src/portfolio.js` if you change file names.

## GitHub Integration Notes
Pinned repositories use the GitHub GraphQL API. Requirements:
1. Set `REACT_APP_GITHUB_TOKEN`, `GITHUB_USERNAME`, `USE_GITHUB_DATA=true`
2. Ensure you have at least one pinned repository on your GitHub profile.
3. Re-run `npm start` or `npm run build` to refresh `profile.json` after changes.

Disable by setting `USE_GITHUB_DATA` to anything other than `true` (string).

## Medium Blogs Integration
Set `MEDIUM_USERNAME` in `.env`. The fetch script writes `blogs.json`. Toggle runtime display via `blogSection.displayMediumBlogs` in `portfolio.js`.

## Deployment
Static output (`build/`) works on:
- GitHub Pages (already using custom domain `traviteja.com` via `CNAME`)
- Netlify / Vercel / Cloudflare Pages
- Any S3 + CloudFront / Azure Static Web Apps / GCP Cloud Storage hosting

### GitHub Pages Quick Steps
1. Ensure `homepage` in `package.json` points to your domain or `https://<user>.github.io/`
2. `npm run build`
3. Serve `build/` (this repo deploys directly to `master` branch’s root via a custom flow; the `deploy` script uses `gh-pages` if desired)

### Continuous Deployment
Add a CI workflow that:
1. Installs dependencies
2. Runs `npm run build`
3. Publishes `build/` to target (Pages / artifact / bucket)

## Available NPM Scripts
```
npm start        # Fetch + start dev server
npm run build    # Fetch + optimized production build
npm run deploy   # (gh-pages) Deploy build/ (currently targets master branch)
npm test         # Run tests (Jest / React Testing Library setup)
npm run format   # Prettier write
npm run check-format # Prettier check only
```

## Theming
Adjust colors in `src/_globalColor.scss`. Future enhancements can leverage `StyleContext` for dynamic theme switching (dark/light) without a full reload.

## Data Fetch Logic
`fetch.js` runs before start/build:
- If `USE_GITHUB_DATA === "true"` it queries GitHub GraphQL API and writes `public/profile.json`
- If `MEDIUM_USERNAME` is set it requests RSS → JSON and writes `public/blogs.json`
Errors throw early to avoid silently shipping stale data.

## License
Personal content © Raviteja. Underlying starter derived from the MIT-licensed developerFolio; retain original license notices where applicable.

## Future Ideas
- Dark/light theme toggle
- Add unit tests for data fetch script
- Expand blog sources beyond Medium
- Add sitemap & structured data for SEO

---
Feel free to fork or reach out (see Contact section on the site) for collaboration.

