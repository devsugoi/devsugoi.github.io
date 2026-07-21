# devsugoi.github.io

Personal portfolio — React + Vite + Tailwind, deployed to GitHub Pages.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
```

| Script            | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Dev server with hot reload            |
| `npm run build`   | Production build into `dist/`         |
| `npm run preview` | Serve the built `dist/` locally       |
| `npm run test`    | Vitest suite                          |
| `npm run lint`    | ESLint                                |
| `npm run format`  | Prettier                              |

## Editing the content

All copy lives in `src/data/` — you should not need to touch a component to
update the site.

| File             | Holds                                          |
| ---------------- | ---------------------------------------------- |
| `profile.js`     | Name, tagline, about text, email, social links |
| `experience.js`  | Jobs, dates, and the bullets under each        |
| `skills.js`      | Skills, grouped by depth                       |
| `projects.js`    | Featured projects and their descriptions       |
| `education.js`   | Degree and academic achievements               |

### Adding a job

Add an entry to the top of the array in `src/data/experience.js`. Set
`current: true` and `end: null` for the role you are in now — that drives the
"Present" badge. Set the previous role's `end` to the month you left.

## Layout

One layout: `src/layouts/ModernLayout.jsx`. A terminal-window hero over an
animated starfield, then full-width alternating section bands with the heading
pinned in a sticky left column.

The starfield (`src/components/Starfield/index.jsx`) is fixed behind the whole
page, but every section paints an opaque background, so it is only ever visible
through the hero. If you add a section, give it an opaque background or the
stars will show through it.

It is lazy-loaded, skipped entirely when the visitor prefers reduced motion, and
pauses when the tab is hidden.

## Projects list

`src/hooks/useGithubRepos.js` pulls live repository data (stars, language) from
the GitHub API and merges it over the curated descriptions in
`src/data/projects.js`. The API call is unauthenticated, so responses are cached
in `localStorage` for six hours; if GitHub is unreachable or the rate limit is
hit, the static list renders instead.

## Colours

Accent and hairline colours are CSS variables in `src/index.css`, defined once
for light mode and again under `html.dark`. A single fixed colour cannot serve
both themes — the original site published sky-400 blue text that measured 1.6:1
against its light background.

`src/theme.test.js` recomputes the WCAG contrast ratios from those variables, so
editing them without rechecking the maths fails the build.

## Contact form

The form is hidden unless `VITE_WEB3FORMS_KEY` is set. To enable it:

1. Get a free access key at <https://web3forms.com>.
2. Locally: put `VITE_WEB3FORMS_KEY=your-key` in a `.env` file.
3. For deploys: add it as a repository secret of the same name.

Without the key the section still shows the email address, copy button, and
social links.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which lints, tests,
builds, and publishes to GitHub Pages.

> **One-time setup:** in Settings → Pages, set Source to **GitHub Actions**.
> Until that is done the workflow will not publish, and `npm run deploy`
> (which pushes `dist/` to the `gh-pages` branch) remains the working path.
