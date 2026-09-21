/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        arabic: ["Tajawal", "sans-serif"],
      },
      colors: {
        amberx: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        },
        ink: {
          DEFAULT: "var(--bg-body)",
          card: "var(--bg-card)",
          nav: "var(--bg-nav)",
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(217, 119, 6, 0.2)",
        gold: "0 10px 30px -10px rgba(217, 119, 6, 0.3)",
        card: "var(--shadow-card)",
      },
    },
  },
  plugins: [],
};
