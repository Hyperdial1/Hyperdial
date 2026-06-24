import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // HyperDial brand — purple + indigo SaaS
        brand: {
          DEFAULT: "#7C3AED", // primary purple
          dark: "#6D28D9",
          light: "#A78BFA",
          indigo: "#4F46E5", // secondary indigo
          "indigo-dark": "#4338CA",
        },
        // Neutrals
        ink: "#1E293B",
        muted: "#64748B",
        faint: "#94A3B8",
        line: "#E2E8F0",
        surface: "#F8FAFC",
        // Dark sections (deep indigo)
        deep: {
          DEFAULT: "#1E1B4B",
          800: "#262261",
          700: "#2E2A75",
          600: "#3730A3",
        },
        "slate-soft": "#C7CBE0",

        // ---- Back-compat aliases (old class names → new palette) ----
        teal: { DEFAULT: "#7C3AED", dark: "#7C3AED", bright: "#A78BFA" },
        navy: { DEFAULT: "#1E1B4B", 800: "#262261", 700: "#2E2A75", 600: "#3730A3" },
        electric: { DEFAULT: "#4F46E5", dark: "#4338CA" },
      },
      fontFamily: {
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      maxWidth: { wrap: "1140px" },
      borderRadius: { xl2: "1.25rem" },
      boxShadow: {
        soft: "0 1px 2px rgba(30,41,59,0.04), 0 8px 24px -12px rgba(30,41,59,0.12)",
        lift: "0 24px 60px -28px rgba(124,58,237,0.45)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(12px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        blink: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0.25" } },
        "pulse-ring": { "0%": { transform: "scale(0.9)", opacity: "0.7" }, "100%": { transform: "scale(1.6)", opacity: "0" } },
        grow: { "0%": { transform: "scaleY(0)" }, "100%": { transform: "scaleY(1)" } },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        blink: "blink 1.2s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        grow: "grow 0.8s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
