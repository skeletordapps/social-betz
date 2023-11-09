import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-betz": "#5627FF",
        "purple-betz-2": "#663CFF",
      },
      backgroundImage: {
        main: "url('/bg-main.png')",
        main2: "url('/bg-main-2.png')",
        section: "url('/bg-section.png')",
        inverted: "url('/bg-main-inverted.png')",
        numbers: "url('/bg-numbers.png')",
        soccer: "url('/bg-soccer.png')",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
