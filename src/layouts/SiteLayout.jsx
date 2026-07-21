import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import TopNav from "../components/TopNav";
import {
  About,
  Skills,
  Experience,
  Projects,
  Contact,
} from "../components/sections";
import profile from "../data/profile";
import experience from "../data/experience";

const currentRole = experience.find((role) => role.current) ?? experience[0];

/**
 * Terminal-window hero, carried over from the classic design and rebuilt at
 * this layout's larger scale. The starfield sits behind it — every section
 * below is opaque, so the stars only ever show through here.
 */
const Hero = () => (
  <header
    id="top"
    className="relative flex min-h-[calc(100vh-5rem)] items-center px-6 py-20 sm:px-10 lg:px-20"
  >
    <div className="mx-auto w-full max-w-6xl">
      <div className="max-w-3xl overflow-hidden rounded-xl bg-ink-900 shadow-2xl ring-1 ring-white/10">
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-ink-800 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
          <span className="ml-3 font-mono text-xs text-slate-400">
            matt@portfolio: ~
          </span>
        </div>

        <div className="px-6 py-8 font-mono text-slate-100 sm:px-10 sm:py-12">
          <p className="text-sm sm:text-base">
            <span className="text-green-400">matt:~$</span> whoami
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-4 text-xl text-sky-300 sm:text-2xl">
            {profile.role}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {profile.tagline}
          </p>

          <p className="mt-6 text-sm text-slate-400">
            <span className="text-green-400">matt:~$</span> Currently{" "}
            {currentRole.title} at {currentRole.company}
          </p>

          <p className="mt-6 text-sm sm:text-base">
            <span className="text-green-400">matt:~$</span>{" "}
            <span
              aria-hidden="true"
              className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-slate-100 motion-reduce:animate-none"
            />
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:bg-white dark:text-ink-900"
        >
          View work
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-rule text-slate-700 transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-rule/20 dark:text-slate-300"
        >
          <FaLinkedin size={19} aria-hidden="true" />
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-rule text-slate-700 transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-rule/20 dark:text-slate-300"
        >
          <FaGithub size={19} aria-hidden="true" />
        </a>

        <a
          href="#about"
          className="ml-auto inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-500 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-slate-400"
        >
          <FaArrowDown
            aria-hidden="true"
            className="animate-bounce motion-reduce:animate-none"
          />
          Scroll
        </a>
      </div>
    </div>
  </header>
);

const SiteLayout = ({ darkTheme, onToggleTheme }) => (
  <>
    <TopNav darkTheme={darkTheme} onToggleTheme={onToggleTheme} />
    <main id="main">
      <Hero />
      <About index={0} />
      <Skills index={1} />
      <Experience index={2} />
      <Projects index={3} />
      <Contact index={4} />

      <footer className="border-t border-rule bg-primary px-6 py-10 sm:px-10 lg:px-20 dark:border-rule/10 dark:bg-ink-900">
        <p className="mx-auto max-w-6xl text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {profile.name}. Built with React, Vite
          and Tailwind.
        </p>
      </footer>
    </main>
  </>
);

export default SiteLayout;
