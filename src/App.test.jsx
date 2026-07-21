import { describe, it, expect, beforeAll, afterEach, vi } from "vitest";
import { render, screen, within, cleanup } from "@testing-library/react";
import App from "./App";
import experience from "./data/experience";
import profile from "./data/profile";
import education from "./data/education";

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

  /**
   * The tests above only proved the <section> elements exist. That is exactly
   * what a blank band looks like: heading in the sticky left column, nothing
   * in the content column beside it.
   *
   * `textContent` alone is not enough — it counts text inside a hidden element
   * too — so this also asserts the body is visible. jsdom applies no Tailwind,
   * so `toBeVisible` catches `hidden`, inline `display:none` and `visibility`,
   * but not a utility class. Reveal's opacity states are covered separately in
   * Reveal.test.jsx.
   */
  it("gives every section a visible body beside its heading", () => {
    render(<App />);
    ["about", "skills", "experience", "projects", "contact"].forEach((id) => {
      const section = document.getElementById(id);
      // SectionShell renders a grid whose second child is the content column.
      const body = section.querySelector("div").children[1];
      expect(
        body.textContent.trim().length,
        `the "${id}" section rendered its heading but an empty body`,
      ).toBeGreaterThan(100);
      expect(body).toBeVisible();
      // A body whose every child is hidden is a blank band with full height.
      [...body.children].forEach((child) => expect(child).toBeVisible());
    });
  });

  it("renders the About prose and education block", () => {
    render(<App />);
    const section = document.getElementById("about");
    profile.about.forEach((paragraph) => {
      expect(section.textContent).toContain(paragraph);
    });
    expect(section.textContent).toContain(education.degree);
    expect(section.textContent).toContain(education.school);
    education.achievements.forEach((achievement) => {
      expect(section.textContent).toContain(achievement);
    });
  });

  it("renders the Contact email and social links", () => {
    render(<App />);
    const section = document.getElementById("contact");
    const mailto = within(section).getByRole("link", { name: profile.email });
    expect(mailto.getAttribute("href")).toBe(`mailto:${profile.email}`);
    expect(
      within(section).getByRole("link", { name: /linkedin/i }).href,
    ).toContain(profile.links.linkedin);
    expect(
      within(section).getByRole("link", { name: /github/i }).href,
    ).toContain(profile.links.github);
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
