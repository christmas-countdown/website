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
				primary: '#D5002C'
			}
		}
	},
	variants: { extend: {} }
};
