import Reveal from "../Reveal";

/**
 * Section chrome: full-bleed alternating bands, with the heading in a sticky
 * left column beside the content rather than stacked above it.
 *
 * The grid's second child is the content column. App.test.jsx reaches for it by
 * position to assert each section renders a body and not just a heading — a
 * blank band is the failure this layout makes easy to ship unnoticed.
 */
const SectionShell = ({ id, index, title, children }) => (
  <section
    id={id}
    aria-labelledby={`${id}-heading`}
    // Opaque on purpose: the starfield is fixed behind the whole page, and
    // these bands are what confine it to the hero.
    className={`scroll-mt-8 px-6 py-24 sm:px-10 lg:px-20 ${
      index % 2 === 1
        ? "bg-slate-100 dark:bg-ink-800"
        : "bg-primary dark:bg-ink-900"
    }`}
  >
    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-20">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-accent">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h2
            id={`${id}-heading`}
            className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white lg:text-4xl"
          >
            {title}
          </h2>
        </Reveal>
      </div>

      <div className="min-w-0">{children}</div>
    </div>
  </section>
);

export default SectionShell;
