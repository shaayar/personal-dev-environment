/** @type {import('tailwindcss').Config} */
// const { gridAreas } = require('tailwindcss-grid-areas');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'bright': '"Very Bright"',
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
};