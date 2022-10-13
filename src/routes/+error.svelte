<script>
	import Navbar from '$components/Navbar.svelte';
	import Footer from '$components/Footer.svelte';
	import { page } from '$app/stores';
	let message = $page.error?.message;
	if (message?.message) message = message.message;
</script>

<svelte:head>
	<title>Error {$page.status}</title>
	<meta name="url" content="https://christmascountdown.live{$page.url.pathname}" />
	<meta name="og:url" content="https://christmascountdown.live{$page.url.pathname}" />
</svelte:head>

<div
	class="container mx-auto text-white my-2 px-2 md:my-4 md:px-8 lg:my-8 lg:px-16 xl:my-10 xl:px-24 2xl:my-12 2xl:px-32"
>
	<Navbar active={$page.url.pathname} />

	<div class="text-center mt-20 pt-20">
		<h1 class="text-5xl font-bold">Error {$page.status}</h1>
		<h2 class="text-3xl font-semibold">{message ?? ''}</h2>
		<!-- <p>{error.stack}</p> -->
	</div>

	<Footer />
</div>
