import {
	error,
	json
} from '@sveltejs/kit';
import en from './en.json';

const jokes = { en };

/** @type {import('@sveltejs/kit').RequestHandler} */
export function GET({ url }) {
	let lang = url.searchParams.get('language');
	if (lang && !Object.keys(jokes).includes(lang)) throw error(400, `Error: "${lang}" is not a supported language. Must be one of: ${Object.keys(jokes).join()}`);
	else lang = 'en';
	const random = jokes[lang][Math.floor(Math.random() * jokes[lang].length)];
	return json(random);
}

