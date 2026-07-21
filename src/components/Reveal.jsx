import { useEffect, useRef, useState } from "react";

/** Reveal anything still hidden after this long. See the failsafe below. */
const FAILSAFE_MS = 2000;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Fades its children in once, when they first scroll into view.
 *
 * Content must never depend on this to be visible. An earlier version started
 * at opacity-0 and relied entirely on IntersectionObserver firing — when it
 * did not, whole sections rendered as blank bands that still occupied their
 * full height. Three guards now make that impossible:
 *
 *   1. Reduced motion, or no IntersectionObserver at all, renders visible.
 *   2. Anything already on screen at mount is revealed synchronously, without
 *      waiting for a scroll that may never come on a short page.
 *   3. A failsafe timer reveals everything if the observer never reports back.
 *      IntersectionObserver always invokes its callback once on observe, so a
 *      callback that never runs means it is not working — the animation is not
 *      worth an invisible page.
 */
const Reveal = ({ children, className = "", delay = 0, as: Tag = "div" }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(prefersReducedMotion);

  useEffect(() => {
    if (shown) return undefined;
    const element = ref.current;
    if (!element) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return undefined;
    }

    // Already on screen? Show it now rather than waiting for a scroll event.
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setShown(true);
      return undefined;
    }

    let reported = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        reported = true;
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0 },
    );
    observer.observe(element);

    const failsafe = window.setTimeout(() => {
      if (!reported) setShown(true);
    }, FAILSAFE_MS);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [shown]);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
