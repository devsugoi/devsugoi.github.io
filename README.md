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

One layout: `src/layouts/SiteLayout.jsx`. A terminal-window hero over an
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

## Contact section

Email address and social links, no form — there is no backend and no form
service wired up. The workflow still passes a `VITE_WEB3FORMS_KEY` secret to the
build; nothing reads it. Remove it from the workflow, or add a form that uses
it, but do not assume one exists.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which lints, tests,
builds, and publishes to GitHub Pages. That workflow is the only deploy path —
Pages is set to **GitHub Actions** as its source.

The `gh-pages` branch still holds the 2022 Create React App version of this
site. Nothing serves it. Do not run `gh-pages -d dist` against it: if Pages is
ever switched back to branch-based publishing it would put the old site live.

### When a change does not appear

`index.html` is served with `Cache-Control: max-age=600`, and old hashed assets
stay on the server, so a browser holding the previous `index.html` renders the
entire previous build for up to ten minutes. Confirm what is actually published
before debugging the code:

```bash
curl -s https://devsugoi.github.io/ | grep assets/
md5sum dist/assets/index-*.js       # compare against the deployed file
```

If the hashes match, the deploy is current and the difference is in the browser
— check a private window with extensions disabled before changing anything.
