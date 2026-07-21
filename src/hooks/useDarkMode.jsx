import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "dark-theme";

const readStoredPreference = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored !== null) return JSON.parse(stored);
  } catch {
    /* Storage can be unavailable in private mode; fall through to the OS. */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

/**
 * Dark mode, defaulting to the operating system preference and persisted once
 * the user makes an explicit choice.
 *
 * The class goes on <html>, matching Tailwind's `darkMode: "class"` default and
 * the inline script in index.html that applies it before first paint.
 */
const useDarkMode = () => {
  const [darkTheme, setDarkTheme] = useState(readStoredPreference);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkTheme);
  }, [darkTheme]);

  // Follow the OS until the user overrides it in this browser.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event) => {
      let hasExplicitChoice = false;
      try {
        hasExplicitChoice = window.localStorage.getItem(STORAGE_KEY) !== null;
      } catch {
        /* treat as no stored choice */
      }
      if (!hasExplicitChoice) setDarkTheme(event.matches);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  // Only an explicit toggle is persisted — that is what stops the OS listener
  // above from overriding a deliberate choice.
  const toggle = useCallback(() => {
    setDarkTheme((value) => {
      const next = !value;
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* Persistence is a nicety, not a requirement. */
      }
      return next;
    });
  }, []);

  return [darkTheme, toggle];
};

export default useDarkMode;
