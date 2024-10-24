/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          primary100: "#D2EEE8",
          primary200: "#A4DCD0",
          primary300: "#77CBB9",
          primary400: "#4F877B",
          primary500: "#28443E",
        },
        background: {
          background100: "#56606C",
          background200: "#4C5662",
          background300: "#303B49",
          background400: "#1E2630",
        },
        accent:{
          accent100: "#DAA210",
          accent200: "#00C48C",
          accent300: "#0ACBF1",
          accent400: "#00579A",
          accent500: "#022541",
        },
        fontColor:{
          fontColor100: "#F4FBF9",
          fontColor200: "#8391A1",
          fontColor300: "#4F5864",
          fontColor400: "#0A110F",
        },
      },
    },
  },
  plugins: [],
}