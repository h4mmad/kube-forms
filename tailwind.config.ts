import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInFromTop: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideOutToBottom: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        slideInFromTop: "slideInFromTop 1.2s ease-in",
        slideOutToBottom: "slideOutToBottom 1.2s ease-out",
      },
    },
  },

  plugins: [],
};
export default config;

// keyframes: {
//   slideInFromTop: {
//     "0%": { transform: "translateY(-100%)", opacity: "0" },
//     "100%": { transform: "translateY(0)", opacity: "1" },
//   },
//   slideOutToBottom: {
//     "0%": { transform: "translateY(0)", opacity: "1" },
//     "100%": { transform: "translateY(100%)", opacity: "0" },
//   },
// },
