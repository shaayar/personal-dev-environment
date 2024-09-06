/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.grid-areas': {
          'grid-template-areas': 'Dashboard Diary Repos Pswd-Mngr Links',
        },
        '.Dashboard': { 'grid-area': 'Dashboard' },
        '.Diary': { 'grid-area': 'Diary' },
        '.Repos': { 'grid-area': 'Repos' },
        '.Pswd-Mngr': { 'grid-area': 'Pswd-Mngr' },
        '.Links': { 'grid-area': 'Links' },
      });
    },
  ],
  darkMode: 'class',  
};
