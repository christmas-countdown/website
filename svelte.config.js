import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		// https://kit.svelte.dev/docs/adapter-cloudflare#notes
		// _redirects doesn't work for SvelteKit/function-handled routes
		adapter: adapter(),
		alias: {
			$components: './src/components',
			$lib: './src/lib'
		}
		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte'
	},

	preprocess: [
		preprocess(),
		mdsvex(mdsvexConfig)
	]
};

export default config;
