import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakartaSans: "var(--font-plus-jakarta)", // Google font Plus Jakarta Sans
      },
      colors: {
        customOrange: "#F56E0F", // Custom orange color for text
      },
    },
  },
  plugins: [],
};
export default config;
