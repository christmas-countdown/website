import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import { markdown } from 'svelte-preprocess-markdown';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter(),
		alias: {
			$components: './src/components',
			$lib: './src/lib'
		}
		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte'
	},
	preprocess: [preprocess(), markdown({
		gfm: true,
		headerIds: true
		// headerPrefix: 'jt:'
	})]
};

export default config;
