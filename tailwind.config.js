/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset-sm-dark': '0px 0px 10px 1px rgba(255, 255, 255, 0.3) inset;',
        'inset-sm-light': '0px 0px 10px 1px rgba(1, 1, 1, 0.2) inset;',
        'volume': '-407px 0 0 400px var(--tw-shadow-color)',
        'cover': '0px 0px 20px 10px var(--tw-shadow-color)'
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 0 25px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
