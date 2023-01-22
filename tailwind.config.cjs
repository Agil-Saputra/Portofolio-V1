/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "title" : "#FFA047"
      },
      screens: {
      "lg" : "1200px",
      }
    },
  },
  plugins: [],
}
