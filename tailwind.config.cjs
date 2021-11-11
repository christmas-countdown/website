module.exports = {
	darkMode: false, // or 'media' or 'class'
	plugins: [],
	purge: [
		'./src/**/*.html',
		'./src/**/*.svelte'
	],
	theme: {
		extend: {
			colors: {
				blurple: '#5865F2',
				original: '#090B44',
				primary: '#D5002C',
				'primary-dark': '#8F001D',
				'primary-light': '#D6A7B0'
			}
		}
	},
	variants: { extend: {} }
};
