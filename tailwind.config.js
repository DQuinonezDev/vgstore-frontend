/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "custom" : "#733FFF"
      },
      fontFamily:{
        "customRegular" : ["regular"],
        "customMed" : ["med"],
        "customSB" : ["semibold"],
        "customLight" : ["light"],
      }
    },
  },
  plugins: [],
}

