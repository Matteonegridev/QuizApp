/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        headers: "DM Sans",
        paragr: "Lato",
      },
      boxShadow: {
        "custom-light": "5px 8px 0 0 rgb(115, 0, 192)", // shadow  light mode
        "custom-dark": "5px 8px 0 0 rgb(231, 231, 231)", // shadow  dark mode
      },
      colors: {
        orangeAccent: "#FF8C00",
      },
      screens: {
        sm: { max: "650px" },

        md: { min: "651px", max: "1023px" },

        lg: { min: "1024px", max: "1279px" },

        xl: { min: "1280px", max: "1535px" },

        "2xl": { min: "1536px" },
      },
    },
  },
  plugins: [],
};
