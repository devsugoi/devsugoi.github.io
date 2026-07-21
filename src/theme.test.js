import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

/**
 * Guards the light/dark palette against WCAG regressions.
 *
 * The original site published sky-400 blue text on a light grey page — 1.6:1,
 * effectively invisible — and slate-200 hairlines at 1.07:1. Both looked fine
 * in dark mode, which is how they survived. These assertions read the real
 * values out of the stylesheet so they fail if someone edits the colours
 * without rechecking the maths.
 */

// Resolved against the project root, which is Vitest's working directory.
const css = readFileSync("src/index.css", "utf8");

const relativeLuminance = ([r, g, b]) => {
  const channel = (c) => {
    const v = c / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  return (
    0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b)
  );
};

const contrast = (a, b) => {
  const [light, dark] = [relativeLuminance(a), relativeLuminance(b)].sort(
    (x, y) => y - x,
  );
  return (light + 0.05) / (dark + 0.05);
};

/** Pull `--name: r g b;` out of a given selector block. */
const readVar = (selector, name) => {
  const block = css.slice(css.indexOf(selector));
  const match = block.match(new RegExp(`--${name}:\\s*([\\d\\s]+);`));
  if (!match) throw new Error(`--${name} not found under ${selector}`);
  return match[1].trim().split(/\s+/).map(Number);
};

// Page backgrounds, kept in step with `primary` in tailwind.config.js.
const LIGHT_PAGE = [248, 250, 252]; // #F8FAFC
const DARK_PAGE = [11, 17, 32]; // ink-900
const WHITE = [255, 255, 255];

describe("light theme contrast", () => {
  const accent = readVar(":root", "accent");
  const accentContrast = readVar(":root", "accent-contrast");
  const rule = readVar(":root", "rule");
  const ruleStrong = readVar(":root", "rule-strong");

  it("accent text is readable on the page background", () => {
    expect(contrast(accent, LIGHT_PAGE)).toBeGreaterThanOrEqual(4.5);
  });

  it("accent text is readable on white cards", () => {
    expect(contrast(accent, WHITE)).toBeGreaterThanOrEqual(4.5);
  });

  it("text on an accent-filled button is readable", () => {
    expect(contrast(accentContrast, accent)).toBeGreaterThanOrEqual(4.5);
  });

  it("hairlines are actually visible", () => {
    expect(contrast(rule, LIGHT_PAGE)).toBeGreaterThanOrEqual(1.5);
  });

  it("bullet dashes and timeline nodes are visible", () => {
    expect(contrast(ruleStrong, LIGHT_PAGE)).toBeGreaterThanOrEqual(3);
  });
});

describe("dark theme contrast", () => {
  const accent = readVar("html.dark", "accent");
  const accentContrast = readVar("html.dark", "accent-contrast");

  it("accent text is readable on the page background", () => {
    expect(contrast(accent, DARK_PAGE)).toBeGreaterThanOrEqual(4.5);
  });

  it("text on an accent-filled button is readable", () => {
    expect(contrast(accentContrast, accent)).toBeGreaterThanOrEqual(4.5);
  });
});

describe("the two themes are actually different", () => {
  it("uses a different accent per theme", () => {
    expect(readVar(":root", "accent")).not.toEqual(
      readVar("html.dark", "accent"),
    );
  });
});
