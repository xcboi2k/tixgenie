/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#D2EEE8",
          200: "#A4DCD0",
          300: "#77CBB9",
          400: "#4F877B",
          500: "#28443E",
        },
        background: {
          100: "#56606C",
          200: "#4C5662",
          300: "#303B49",
          400: "#1E2630",
        },
        accent:{
          100: "#DAA210",
          200: "#00C48C",
          300: "#0ACBF1",
          400: "#00579A",
          500: "#022541",
        },
        fontColor:{
          100: "#F4FBF9",
          200: "#8391A1",
          300: "#4F5864",
          400: "#0A110F",
        },
      },
    },
  },
  plugins: [],
}