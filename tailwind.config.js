/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        portrait: { raw: "(max-aspect-ratio: 3/2)" },
        landscape: { raw: "(min-aspect-ratio: 3/2)" },
      },
      fontSize: {
        "custom-font": "clamp(0.8rem, min(2dvw, 2dvh), 8rem)",
      },
      fontFamily: {
        contents: ["Barlow", "sans-serif"],
        headings: ["Barlow Condensed", "sans-serif"],
      },
      colors: {
        "custom-red": "hsl(0, 100%, 68%)",
        "very-dark-blue": "hsl(230, 29%, 20%)",
        "dark-greyish-blue": "hsl(230, 11%, 40%)",
        "greyish-blue": "hsl(231, 7%, 65%)",
        "light-greyish-blue": "hsl(207, 33%, 95%)",
      },
    },
  },
  plugins: [],
};
