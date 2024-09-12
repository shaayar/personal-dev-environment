/** @type {import('tailwindcss').Config} */
// const { gridAreas } = require('tailwindcss-grid-areas');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // gridTemplateAreas: {
      //   'layout': [
      //     'Dashboard',
      //     'PswdMngr',
      //     'Repos',
      //     'Diary',
      //     'Todo',
      //     'Links-',
      //   ],
      // },
    },
  },
  plugins: [
    // gridAreas({
    //   areas: {
    //     layout: [
    //       'Dashboard',
    //       'PswdMngr',
    //       'Repos',
    //       'Diary',
    //       'Todo',
    //       'Links',
    //     ],
    //   },
    // }),
  //   function ({ addUtilities }) {
  //     addUtilities({
  //       '.grid-areas': {
  //         'grid-template-areas': 'Dashboard Diary Repos Pswd-Mngr Links',
  //       },
  //       '.Dashboard': { 'grid-area': 'Dashboard' },
  //       '.Diary': { 'grid-area': 'Diary' },
  //       '.Repos': { 'grid-area': 'Repos' },
  //       '.Pswd-Mngr': { 'grid-area': 'Pswd-Mngr' },
  //       '.Links': { 'grid-area': 'Links' },
  //     });
  //   },
    ],
  darkMode: 'class',
};