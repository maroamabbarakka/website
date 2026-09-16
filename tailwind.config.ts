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
        maroa: {
          red: "var(--maroa-red, #ff171f)",
          "red-dark": "var(--maroa-red-dark, #d90d16)",
          black: "var(--maroa-black, #090909)",
          charcoal: "var(--maroa-charcoal, #171717)",
          ink: "var(--maroa-ink, #202124)",
          "gray-700": "var(--maroa-gray-700, #4b4f55)",
          "gray-500": "var(--maroa-gray-500, #7a7f87)",
          "gray-300": "var(--maroa-gray-300, #d9dce1)",
          "gray-100": "var(--maroa-gray-100, #f4f5f7)",
          white: "var(--maroa-white, #ffffff)",
        },
      },
      borderRadius: {
        "maroa-sm": "var(--radius-sm, 10px)",
        "maroa-md": "var(--radius-md, 16px)",
        "maroa-lg": "var(--radius-lg, 24px)",
      },
      maxWidth: {
        container: "var(--container, 1280px)",
      },
      boxShadow: {
        card: "var(--shadow-card, 0 12px 36px rgba(0,0,0,0.08))",
        lift: "0 18px 40px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
