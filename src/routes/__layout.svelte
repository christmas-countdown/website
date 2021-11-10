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

<div id="main" class="text-white m-2 md:m-10 md:my-5 lg:m-20 lg:my-10 xl:m-60 xl:my-14 2xl:m-80 2xl:my-20"> <!-- md:my-10 -->
	<Navbar active={page} />

	<slot />

	<Footer />
</div>
