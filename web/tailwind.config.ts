import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        wb: {
          red: "var(--red)",
          "red-dk": "var(--red-dk)",
          "red-lt": "var(--red-lt)",
          ai: "var(--ai)",
          "ai-dk": "var(--ai-dk)",
          "ai-lt": "var(--ai-lt)",
          navy: "var(--navy)",
          navy2: "var(--navy2)",
          navy3: "var(--navy3)",
          navy4: "var(--navy4)",
          white: "var(--white)",
          off: "var(--off)",
          cream: "var(--cream)",
          silver: "var(--silver)",
          stone: "var(--stone)",
          txt: "var(--txt)",
          txtb: "var(--txtb)",
          txtm: "var(--txtm)",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        body: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

