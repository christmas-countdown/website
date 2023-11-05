/* eslint-disable sort-keys */
import {
	error,
	json
} from '@sveltejs/kit';
import { getTZ } from '$lib/timezones';
import christmas from '@eartharoid/christmas';

/** @type {import('@sveltejs/kit').RequestHandler} */
export function GET({ url }) {
	const timezone = getTZ(url);
	if (!timezone) throw error(400, 'Invalid timezone');
	return json(
		['months', 'weeks', 'sleeps', 'days', 'hours', 'minutes', 'seconds']
			.reduce((o, p) => {
				o[p] = christmas[`get${p[0].toUpperCase()}${p.slice(1)}`](timezone);
				return o;
			}, {})
	);
}

