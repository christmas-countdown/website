import { error } from '@sveltejs/kit';
/**
 * @type {import('@sveltejs/kit').Load}
 */
export const load = async ({ fetch }) => {
	const res = await fetch('/api/joke');
	if (!res.ok) throw error(500, 'API failure');
	return { joke: await res.json() };
};