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
    },
  },
  plugins: [],
};
