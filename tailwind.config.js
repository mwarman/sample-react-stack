/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      amber: {
        light: colors.amber[300],
        DEFAULT: colors.amber[500],
        dark: colors.amber[800],
      },
      blue: {
        light: colors.blue[300],
        DEFAULT: colors.blue[500],
        dark: colors.blue[800],
      },
      green: {
        light: colors.green[300],
        DEFAULT: colors.green[500],
        dark: colors.green[800],
      },
      indigo: {
        light: colors.indigo[300],
        DEFAULT: colors.indigo[500],
        dark: colors.indigo[800],
      },
      orange: {
        light: colors.orange[300],
        DEFAULT: colors.orange[500],
        dark: colors.orange[800],
      },
      red: {
        light: colors.red[300],
        DEFAULT: colors.red[500],
        dark: colors.red[800],
      },
      slate: colors.slate,
      violet: {
        light: colors.violet[300],
        DEFAULT: colors.violet[500],
        dark: colors.violet[800],
      },
      yellow: {
        light: colors.yellow[300],
        DEFAULT: colors.yellow[500],
        dark: colors.yellow[800],
      },
    },
    extend: {
      colors: {
        slate: {
          light: colors.slate[300],
          DEFAULT: colors.slate[500],
          dark: colors.slate[800],
        },
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
