/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
	return ['months', 'weeks', 'sleeps', 'days', 'hours', 'minutes', 'seconds'].includes(param);
}