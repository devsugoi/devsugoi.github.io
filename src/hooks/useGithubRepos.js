import { useEffect, useState } from "react";
import { projects, excludedRepos } from "../data/projects";

const CACHE_KEY = "gh-repos-cache";
const CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours

const readCache = () => {
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { at, repos } = JSON.parse(raw);
    if (Date.now() - at > CACHE_TTL_MS) return null;
    return repos;
  } catch {
    return null;
  }
};

const writeCache = (repos) => {
  try {
    window.localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ at: Date.now(), repos }),
    );
  } catch {
    /* Cache is an optimisation; a full localStorage is not an error here. */
  }
};

const shape = (repo) => ({
  repo: repo.name,
  title: repo.name.replace(/[-_]/g, " "),
  blurb: repo.description || "",
  language: repo.language,
  stars: repo.stargazers_count,
  updated: repo.pushed_at,
  url: repo.html_url,
});

/**
 * Live repository list, merged over the curated entries in data/projects.js.
 *
 * The curated copy always wins for title/blurb/stack — GitHub descriptions are
 * thin — while stars, language and last-pushed come from the API. The static
 * list is the fallback whenever the request fails or the unauthenticated rate
 * limit (60/hour per IP) is exhausted, so the section is never empty.
 */
const useGithubRepos = (username) => {
  const [repos, setRepos] = useState(projects);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    const merge = (live) => {
      const byName = new Map(live.map((repo) => [repo.repo, repo]));
      const curated = projects.map((project) => ({
        ...project,
        ...byName.get(project.repo),
        // Curated copy is better than the one-line GitHub description.
        title: project.title,
        blurb: project.blurb,
        stack: project.stack,
      }));
      const curatedNames = new Set(projects.map((project) => project.repo));
      const extras = live
        .filter(
          (repo) =>
            !curatedNames.has(repo.repo) &&
            !excludedRepos.includes(repo.repo) &&
            repo.blurb,
        )
        .sort((a, b) => b.stars - a.stars);
      return [...curated, ...extras];
    };

    const cached = readCache();
    if (cached) {
      setRepos(merge(cached));
      setStatus("ready");
      return () => {
        cancelled = true;
      };
    }

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      { headers: { Accept: "application/vnd.github+json" } },
    )
      .then((response) => {
        if (!response.ok) throw new Error(`GitHub responded ${response.status}`);
        return response.json();
      })
      .then((data) => {
        if (cancelled) return;
        const live = data.filter((repo) => !repo.fork).map(shape);
        writeCache(live);
        setRepos(merge(live));
        setStatus("ready");
      })
      .catch(() => {
        if (cancelled) return;
        // Static fallback is already in state; just stop showing a spinner.
        setStatus("fallback");
      });

    return () => {
      cancelled = true;
    };
  }, [username]);

  return { repos, status };
};

export default useGithubRepos;
