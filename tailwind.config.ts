import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A962",
          light: "#E8D5A3",
          dark: "#9A7B3C",
        },
        champagne: "#F5EDE0",
        cream: "#FAF7F2",
        navy: "#1B2A4A",
        burgundy: "#6B1D2A",
        forest: "#1E3D2F",
        parchment: "#F0E6D6",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "silk-gradient":
          "radial-gradient(ellipse at 70% 20%, rgba(232, 213, 163, 0.4) 0%, transparent 50%), radial-gradient(ellipse at 30% 80%, rgba(201, 169, 98, 0.15) 0%, transparent 50%)",
        "fabric-texture":
          "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(201, 169, 98, 0.03) 2px, rgba(201, 169, 98, 0.03) 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
