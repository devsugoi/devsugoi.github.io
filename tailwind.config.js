/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Light page background. The old #E0E0E0 was dark enough that
        // hairlines and pale blues disappeared into it.
        primary: "#F8FAFC",
        ink: {
          900: "#0b1120",
          800: "#111a2e",
          700: "#1c2740",
        },
        // Theme-aware: a dark blue reads on white, a light blue reads on ink.
      // Values live in src/index.css. `accent-contrast` is the text colour to
      // use *on top of* an accent background.
      accent: "rgb(var(--accent) / <alpha-value>)",
      "accent-contrast": "rgb(var(--accent-contrast) / <alpha-value>)",
      // Hairlines — rails, dividers, bullet dashes.
      rule: "rgb(var(--rule) / <alpha-value>)",
      "rule-strong": "rgb(var(--rule-strong) / <alpha-value>)",
      },
      fontFamily: {
        mono: ["Courier New", "ui-monospace", "monospace"],
        sans: [
          "Century Gothic",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};
