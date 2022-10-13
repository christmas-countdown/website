<script>

	import Navbar from '$components/Navbar.svelte';
	import Footer from '$components/Footer.svelte';
	import { page } from '$app/stores';

</script>

<svelte:head>
	<meta name="url" content="https://christmascountdown.live{$page.url.pathname}" />
	<meta name="og:url" content="https://christmascountdown.live{$page.url.pathname}" />
</svelte:head>

<div
	class="container mx-auto text-white my-2 px-2 md:my-4 md:px-8 lg:my-8 lg:px-16 xl:my-10 xl:px-24 2xl:my-12 2xl:px-32"
>
	<!-- m-2 md:m-10 md:my-5 lg:m-20 lg:my-10 xl:m-40 xl:my-14 2xl:m-80 2xl:my-20 -->

	<Navbar active={$page.url.pathname} />

	<slot />

	<Footer />
</div>
