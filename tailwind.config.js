/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		safeList: [],
		extend: {
			boxShadow: {
				'inset-sm-dark': '0px 0px 10px 1px rgba(255, 255, 255, 0.3) inset;',
				'inset-sm-light': '0px 0px 10px 1px rgba(1, 1, 1, 0.2) inset;',
				'volume': '-407px 0 0 400px var(--tw-shadow-color)',
				'cover': '0px 0px 20px 10px var(--tw-shadow-color)',
				'preset-title': '0px 0px 10px 5px var(--tw-shadow-color)'
			},
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				lg: '0 0 25px var(--tw-shadow-color)'
			},
			screens: {
				'sm': {'min': '100px', 'max': '767px'},
				'md': {'min': '768px', 'max': '1023px'},
				'lg': {'min': '1024px', 'max': '1279px'},
				'xl': {'min': '1280px', 'max': '1535px'},
				'2xl': {'min': '1536px'},
			}
		}
	},
	plugins: [
		plugin(function({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value
					})
				},
				{ values: theme('textShadow') }
			)
		})
	]
}
