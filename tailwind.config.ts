import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blueBlack: "#0e1d29",
        blueGreen: "#192935",
        red: "#ef4863",
        green: "#02e0ba",
        black: "#404040",
        ash: "#68615c",
      },
    },
  },
  plugins: [],
} satisfies Config;
