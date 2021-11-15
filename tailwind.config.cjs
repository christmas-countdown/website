const typography = require('@tailwindcss/typography');

module.exports = {
	darkMode: 'class', // or 'media' or 'class'
	plugins: [typography],
	purge: [
		'./src/**/*.html',
		'./src/**/*.svelte',
		'./src/**/*.md'
	],
	theme: {
		extend: {
			colors: {
				blurple: '#5865F2',
				original: '#090B44',
				primary: '#D5002C',
				'primary-dark': '#8F001D',
				'primary-light': '#D6A7B0'
			},
			typography: {
				DEFAULT: {
					css: {
						a: {
							color: 'white',
							fontWeight: '700',
							// textDecoration: 'none',
							textDecoration: 'underline',
							textDecorationStyle: 'dotted'
						},
						'a code': { color: '#D5002C' },
						'a:hover': { textDecorationStyle: 'solid' },
						blockquote: { color: 'white' },
						code: { color: '#D5002C' },
						color: 'white',
						h1: { color: 'white' },
						h2: { color: 'white' },
						h3: { color: 'white' },
						h4: { color: 'white' },
						h5: { color: 'white' },
						h6: { color: 'white' },
						strong: {
							color: 'white',
							fontWeight: '800'
						},
						'th': { color: 'white' }
					}
				}
			}
		}
	},
	variants: { extend: {} }
};
