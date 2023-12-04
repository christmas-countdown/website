/** @type {import('@sveltejs/kit').Handle} */
export async function handle({
	event,
	resolve
}) {
	const response = await resolve(event);
	if (event.url.pathname.startsWith('/api/')) {
		response.headers.set('access-control-allow-origin', '*');
	}
	return response;
}