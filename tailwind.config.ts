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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#FF723B",
          orange100: "#ff723b54",
          orange200: "#F16D39",
          orange400: "#D15E32",
          orange500: "#592B19",
          orange600: "#73422E"
        },
        dark: {
          DEFAULT: "#0E0E0E",
          dark100: "#090909",
          dark900: "#030410"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
