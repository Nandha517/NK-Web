/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#38bdf8",
        secondary: "#22c55e",
        darkbg: "#020617",
      },
    },
  },
  plugins: [],
}
