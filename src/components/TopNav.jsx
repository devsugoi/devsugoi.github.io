import { FaMoon, FaSun } from "react-icons/fa";
import useActiveSection from "../hooks/useActiveSection";
import { SECTIONS } from "../data/sections";
import profile from "../data/profile";

const SECTION_IDS = SECTIONS.map((section) => section.id);

/**
 * Modern navigation: a horizontal sticky bar with text labels, rather than the
 * icon rail the classic design uses.
 */
const TopNav = ({ darkTheme, onToggleTheme }) => {
  const active = useActiveSection(SECTION_IDS);

  return (
    <header className="sticky top-0 z-40 border-b border-rule/70 bg-primary/80 backdrop-blur-md dark:border-rule/10 dark:bg-ink-900/80">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-4 sm:px-10 lg:px-20">
        <a
          href="#top"
          className="font-mono text-sm font-bold tracking-tight text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-white"
        >
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Sections" className="ml-auto hidden md:block">
          <ul className="flex items-center gap-1">
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    active === id
                      ? "bg-slate-900 text-white dark:bg-white dark:text-ink-900"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={
            darkTheme ? "Switch to light theme" : "Switch to dark theme"
          }
          aria-pressed={darkTheme}
          className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:ml-2 dark:border-white/20 dark:text-slate-300"
        >
          {darkTheme ? <FaSun size={15} /> : <FaMoon size={15} />}
        </button>
      </div>

      {/* Small screens: labels scroll horizontally under the bar. */}
      <nav aria-label="Sections" className="border-t border-rule/70 md:hidden dark:border-rule/10">
        <ul className="flex gap-1 overflow-x-auto px-4 py-2">
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`block whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  active === id
                    ? "bg-slate-900 text-white dark:bg-white dark:text-ink-900"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default TopNav;
