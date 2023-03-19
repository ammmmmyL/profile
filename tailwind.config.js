/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      lavender: '#9BAED8',
    },
    extend: {},
  },
  plugins: [],
};
