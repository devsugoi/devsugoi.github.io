import { describe, it, expect } from "vitest";
import { skillGroups, SKILLS, TIERS } from "./skills";

const tierOf = (name) => SKILLS.find((skill) => skill.name === name)?.tier;

describe("skills data", () => {
  it("assigns every skill to a real tier", () => {
    const ids = TIERS.map((tier) => tier.id);
    SKILLS.forEach((skill) => {
      expect(ids, `${skill.name} has an unknown tier`).toContain(skill.tier);
    });
  });

  it("gives every skill an icon and a unique name", () => {
    SKILLS.forEach((skill) => expect(skill.icon).toBeTruthy());
    const names = SKILLS.map((skill) => skill.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it("groups skills without losing or duplicating any", () => {
    const grouped = skillGroups.flatMap((group) => group.skills);
    expect(grouped).toHaveLength(SKILLS.length);
  });

  it("drops empty tiers rather than rendering a bare heading", () => {
    skillGroups.forEach((group) => expect(group.skills.length).toBeGreaterThan(0));
  });

  // The current stack, as stated in the About copy.
  it("puts the primary stack front and centre", () => {
    expect(tierOf("Java")).toBe("working");
    expect(tierOf("Spring Boot")).toBe("working");
    expect(tierOf("Python")).toBe("core");
  });

  it("keeps the older stack in Familiar", () => {
    expect(tierOf("PHP")).toBe("familiar");
    expect(tierOf("Laravel")).toBe("familiar");
    expect(tierOf("Tailwind")).toBe("familiar");
  });
});
