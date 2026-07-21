import {
  SiJavascript,
  SiCss,
  SiPhp,
  SiPython,
  SiOpenjdk,
  SiSpringboot,
  SiHtml5,
  SiMysql,
  SiLaravel,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiGit,
  SiReact,
  SiThreedotjs,
  SiCplusplus,
  SiDotnet,
  SiBlender,
} from "react-icons/si";
import { FaDatabase, FaTools, FaDesktop, FaPaintBrush } from "react-icons/fa";

/**
 * Skills grouped by depth rather than scored out of five. A self-assigned
 * "2 / 5" next to your name reads as "cannot use this"; a tier does the same
 * job without the own goal.
 *
 * ── To change a skill's tier, edit its `tier` field below. That's it. ──
 *
 * Valid tiers are the ids in TIERS. Order within a tier follows this list, so
 * put what you most want seen first. Adding a skill: copy a line, pick an icon
 * from react-icons (https://react-icons.github.io/react-icons/).
 */

export const TIERS = [
  {
    id: "core",
    label: "Core",
    caption: "What I reach for first and use day to day.",
  },
  {
    id: "working",
    label: "Working knowledge",
    caption: "Comfortable building and shipping with these.",
  },
  {
    id: "familiar",
    label: "Familiar",
    caption: "Used on projects; I can find my way around.",
  },
  {
    id: "hardware",
    label: "Beyond the editor",
    caption: "Where I started, and still enjoy.",
  },
];

const SKILLS = [
  // ── Core ────────────────────────────────────────────────────────────────
  { name: "Python", tier: "core", icon: SiPython, color: "#3776AB" },
  { name: "SQL", tier: "core", icon: FaDatabase, color: "#4479A1" },
  { name: "MySQL", tier: "core", icon: SiMysql, color: "#4479A1" },
  { name: "HTML", tier: "core", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", tier: "core", icon: SiCss, color: "#663399" },

  // ── Working knowledge ───────────────────────────────────────────────────
  { name: "Java", tier: "working", icon: SiOpenjdk, color: "#ED8B00" },
  { name: "Spring Boot", tier: "working", icon: SiSpringboot, color: "#6DB33F" },
  { name: "JavaScript", tier: "working", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", tier: "working", icon: SiReact, color: "#61DAFB" },
  { name: "C++", tier: "working", icon: SiCplusplus, color: "#00599C" },
  { name: "Visual Basic .NET", tier: "working", icon: SiDotnet, color: "#512BD4" },
  { name: "Git", tier: "working", icon: SiGit, color: "#F05032" },
  { name: "MongoDB", tier: "working", icon: SiMongodb, color: "#47A248" },
  { name: "Bootstrap", tier: "working", icon: SiBootstrap, color: "#7952B3" },

  // ── Familiar ────────────────────────────────────────────────────────────
  { name: "PHP", tier: "familiar", icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", tier: "familiar", icon: SiLaravel, color: "#FF2D20" },
  { name: "Tailwind", tier: "familiar", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Three.js", tier: "familiar", icon: SiThreedotjs, color: "#8E8E8E" },
  { name: "Blender", tier: "familiar", icon: SiBlender, color: "#E87D0D" },
  { name: "Photoshop", tier: "familiar", icon: FaPaintBrush, color: "#31A8FF" },

  // ── Beyond the editor ───────────────────────────────────────────────────
  { name: "PC Assembly", tier: "hardware", icon: FaDesktop, color: "#94A3B8" },
  { name: "Troubleshooting", tier: "hardware", icon: FaTools, color: "#94A3B8" },
];

/** Grouped for rendering. Tiers with no skills are dropped automatically. */
export const skillGroups = TIERS.map((tier) => ({
  ...tier,
  skills: SKILLS.filter((skill) => skill.tier === tier.id),
})).filter((group) => group.skills.length > 0);

export { SKILLS };
export default skillGroups;
