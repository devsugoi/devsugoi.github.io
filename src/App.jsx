import { Suspense, lazy, useState } from "react";
import SiteLayout from "./layouts/SiteLayout";
import useDarkMode from "./hooks/useDarkMode";

// three.js is ~465KB and purely decorative — keep it out of the initial bundle.
const Starfield = lazy(() => import("./components/Starfield"));

function App() {
  const [darkTheme, toggleTheme] = useDarkMode();
  const [showStars] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  return (
    // No background here — the body provides the base colour and the starfield
    // paints over it. Content sits above both.
    <div className="relative z-10 min-h-screen text-slate-900 dark:text-slate-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-accent-contrast"
      >
        Skip to content
      </a>

      {/* Sits behind everything; only visible through the hero, since every
          section below paints an opaque background. */}
      {showStars ? (
        <Suspense fallback={null}>
          <Starfield dark={darkTheme} />
        </Suspense>
      ) : null}

      <SiteLayout darkTheme={darkTheme} onToggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
