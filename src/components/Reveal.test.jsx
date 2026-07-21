import { describe, it, expect, afterEach, vi } from "vitest";
import { render, screen, cleanup, act } from "@testing-library/react";
import Reveal from "./Reveal";

/**
 * Regression guard. Reveal once started at opacity-0 and depended entirely on
 * IntersectionObserver firing; when it did not, entire sections rendered as
 * blank bands that still took up their full height. Content must always end up
 * visible, whatever the browser does.
 */

const opacityClassOf = (text) => {
  const el = screen.getByText(text).closest("[style]");
  return el.className.includes("opacity-100") ? "visible" : "hidden";
};

const stubMatchMedia = (reduced) => {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: reduced,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }));
};

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("Reveal", () => {
  it("renders visible when the browser has no IntersectionObserver", () => {
    stubMatchMedia(false);
    const original = window.IntersectionObserver;
    delete window.IntersectionObserver;

    render(<Reveal>no observer</Reveal>);
    expect(opacityClassOf("no observer")).toBe("visible");

    window.IntersectionObserver = original;
  });

  it("renders visible immediately when reduced motion is requested", () => {
    stubMatchMedia(true);
    window.IntersectionObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    };

    render(<Reveal>reduced motion</Reveal>);
    expect(opacityClassOf("reduced motion")).toBe("visible");
  });

  it("reveals via the failsafe when the observer never reports back", () => {
    stubMatchMedia(false);
    vi.useFakeTimers();
    // An observer that accepts observe() but never invokes its callback.
    window.IntersectionObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    };

    render(<Reveal>silent observer</Reveal>);
    expect(opacityClassOf("silent observer")).toBe("hidden");

    act(() => vi.advanceTimersByTime(2500));
    expect(opacityClassOf("silent observer")).toBe("visible");
  });

  it("reveals as soon as the observer reports an intersection", () => {
    stubMatchMedia(false);
    let trigger;
    window.IntersectionObserver = class {
      constructor(cb) {
        trigger = cb;
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    };

    render(<Reveal>observed</Reveal>);
    expect(opacityClassOf("observed")).toBe("hidden");

    act(() => trigger([{ isIntersecting: true }]));
    expect(opacityClassOf("observed")).toBe("visible");
  });
});
