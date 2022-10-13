/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset-sm': '0px 0px 10px 1px rgba(255, 255, 255, 0.3) inset;',
        'volume': '-407px 0 0 400px var(--tw-shadow-color)'
      },
    },
  },
  plugins: [],
}
