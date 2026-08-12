import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f2f5f8",
          100: "#e2e9f0",
          200: "#c3d3e2",
          300: "#95b2cb",
          400: "#5f89ad",
          500: "#3d6a90",
          600: "#2c5276",
          700: "#1f3d5c",
          800: "#152c46",
          900: "#0f2036",
          950: "#0a1626",
        },
        steel: {
          50: "#f4f6f7",
          100: "#e5e9eb",
          200: "#ccd4d8",
          300: "#a6b3ba",
          400: "#798c96",
          500: "#5e727c",
          600: "#4c5d66",
          700: "#404d55",
          800: "#394349",
          900: "#333b40",
        },
        clay: {
          400: "#e0925a",
          500: "#cf7538",
          600: "#b1602d",
        },
        canvas: "#f1f4f6",
        panel: "#ffffff",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,32,54,0.06), 0 1px 8px rgba(15,32,54,0.06)",
        pop: "0 8px 24px rgba(15,32,54,0.14)",
      },
      borderRadius: {
        xl2: "1.1rem",
      },
    },
  },
  plugins: [],
};
export default config;
