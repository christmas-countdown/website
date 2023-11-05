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
	return json(christmas.isToday(timezone));
}

