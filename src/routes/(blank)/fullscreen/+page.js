/* eslint-disable sort-keys */
import christmas from '$lib/christmas.js';
/**
 * @type {import('@sveltejs/kit').Load}
 */
export const load = async () => ({
	total: christmas.getTotal(),
	isToday: christmas.isToday()
});