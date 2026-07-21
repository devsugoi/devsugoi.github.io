import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently occupying the viewport, for
 * highlighting the matching nav item.
 *
 * Picks the entry closest to the top of the viewport rather than the first
 * intersecting one, so short sections between two tall ones still register.
 */
const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids[0] ?? null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          );
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids]);

  return active;
};

export default useActiveSection;
