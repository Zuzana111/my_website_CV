import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        border: "var(--border)",
        accent: {
          DEFAULT: "var(--accent)",
          deep: "var(--accent-deep)",
          soft: "var(--accent-soft)"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(92, 74, 84, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
