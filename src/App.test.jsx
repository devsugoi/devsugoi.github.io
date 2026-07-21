import { describe, it, expect, beforeAll, afterEach, vi } from "vitest";
import { render, screen, within, cleanup } from "@testing-library/react";
import App from "./App";
import experience from "./data/experience";

beforeAll(() => {
  // jsdom implements neither of these, and the app reads both on mount.
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }));
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  // Keep the repos hook off the network; the static fallback should render.
  window.fetch = vi.fn(() => Promise.reject(new Error("offline")));
});

// Testing Library only auto-registers cleanup when vitest globals are on.
afterEach(cleanup);

describe("experience data", () => {
  it("marks exactly one role as current, and it is Yondu", () => {
    const current = experience.filter((role) => role.current);
    expect(current).toHaveLength(1);
    expect(current[0].company).toMatch(/Yondu/);
    expect(current[0].end).toBeNull();
  });

  it("closes out Fujitsu rather than leaving it open-ended", () => {
    const fujitsu = experience.find((role) => role.company === "Fujitsu");
    expect(fujitsu.end).toBe("November 2025");
    expect(fujitsu.current).toBe(false);
  });
});

describe("App", () => {
  it("renders the name as the page's only h1", () => {
    render(<App />);
    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0].textContent).toMatch(/Matthew Perez/i);
  });

  it("keeps the terminal hero", () => {
    render(<App />);
    expect(screen.getAllByText(/matt:~\$/).length).toBeGreaterThan(0);
    expect(screen.getByText(/matt@portfolio/)).toBeTruthy();
  });

  it("names the current role in the hero", () => {
    render(<App />);
    const hero = document.getElementById("top");
    expect(within(hero).getByText(/Currently .* at .*Yondu/)).toBeTruthy();
  });

  it("renders every section", () => {
    render(<App />);
    ["about", "skills", "experience", "projects", "contact"].forEach((id) => {
      expect(document.getElementById(id)).toBeTruthy();
    });
  });

  it("shows the current role as present", () => {
    render(<App />);
    const section = document.getElementById("experience");
    expect(within(section).getByText(/Yondu/)).toBeTruthy();
    expect(within(section).getByText(/November 2025 — Present/)).toBeTruthy();
  });

  it("falls back to the static project list when GitHub is unreachable", () => {
    render(<App />);
    const section = document.getElementById("projects");
    expect(
      within(section).getByRole("heading", { name: /Hotel Reservation/i }),
    ).toBeTruthy();
  });

  it("gives the theme toggle an accessible name", () => {
    render(<App />);
    expect(
      screen.getByRole("button", { name: /switch to .* theme/i }),
    ).toBeTruthy();
  });

  it("opens external links safely", () => {
    render(<App />);
    const external = screen
      .getAllByRole("link")
      .filter((link) => link.getAttribute("target") === "_blank");
    expect(external.length).toBeGreaterThan(0);
    external.forEach((link) => {
      expect(link.getAttribute("rel")).toMatch(/noopener/);
      expect(link.getAttribute("rel")).toMatch(/noreferrer/);
    });
  });

  it("no longer advertises a job hunt", () => {
    render(<App />);
    expect(screen.queryByText(/preferred job/i)).toBeNull();
    expect(screen.queryByText(/wanna give me a try/i)).toBeNull();
    expect(screen.queryByText(/might not be qualified/i)).toBeNull();
  });

  it("has no leftover design switcher", () => {
    render(<App />);
    expect(screen.queryByRole("button", { name: /classic|modern/i })).toBeNull();
  });
});
