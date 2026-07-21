import { describe, it, expect, beforeAll, afterEach, vi } from "vitest";
import { render, cleanup } from "@testing-library/react";
import Starfield from "./index";

/**
 * Regression guard for a bug that emptied two whole sections.
 *
 * The canvas is `position: fixed` and paints an opaque clear colour. At `z-0`
 * it sat in the z-index:0 layer, which CSS paints *above* the backgrounds and
 * text of non-positioned blocks — so the starfield covered the section bands.
 * Only positioned or transformed content stayed visible (the sticky nav, the
 * relative hero, anything inside Reveal), which is why the About and Contact
 * bodies were the ones that vanished.
 *
 * jsdom does no compositing, so paint order cannot be asserted here — the
 * z-index is the thing to pin. A real hit-test needs a browser with WebGL; see
 * the "Starfield" note in README.md.
 */

beforeAll(() => {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }));
});

afterEach(cleanup);

describe("Starfield", () => {
  it("renders a canvas that stays behind in-flow content", () => {
    // No WebGL in jsdom: the component catches that and renders the bare
    // canvas, which is all this assertion needs.
    const { container } = render(<Starfield />);
    const canvas = container.querySelector("canvas");

    expect(canvas).toBeTruthy();
    expect(canvas.className).toContain("-z-10");
    expect(canvas.className).toContain("fixed");
  });

  it("is hidden from assistive technology", () => {
    const { container } = render(<Starfield />);
    expect(container.querySelector("canvas")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });
});
