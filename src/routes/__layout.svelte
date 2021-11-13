<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export const load = async ({ page }) => {
		return {
			props: {
				page: page.path
			}
		};
	};
</script>

<script>
	export let page;

	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="container mx-auto text-white my-2 px-2 md:my-4 md:px-8 lg:my-8 lg:px-16 xl:my-10 xl:px-24 2xl:my-12 2xl:px-32"> <!-- m-2 md:m-10 md:my-5 lg:m-20 lg:my-10 xl:m-40 xl:my-14 2xl:m-80 2xl:my-20 -->
	<Navbar active={page} />

	<slot />

	<Footer />
</div>
