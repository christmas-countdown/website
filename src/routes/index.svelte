<script context="module">
	// import christmas from '@eartharoid/christmas';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export const load = async () => {
		return {
			props: {
				// sleeps: christmas.getSleeps()
				sleeps: 0
			}
		};
	};
</script>
<script>
	export let sleeps;

	import '../app.css';
	import Card from '../components/Card.svelte';

	// setInterval(() => {
	// 	sleeps = christmas.getSleeps();
	// }, 1000);
</script>

<svelte:head>
	<title>Christmas Countdown</title>
	<meta name="title" content="Christmas Countdown" />
	<meta name="og:title" content="Christmas Countdown" />
	<meta name="twitter:title" content="Christmas Countdown" />
	<meta
		name="description"
		content="Get the time left to Christmas with the decorative live online countdown or with the original Christmas countdown bot for Discord."
	/>
	<meta
		name="og:description"
		content="Get the time left to Christmas with the decorative live online countdown or with the original Christmas countdown bot for Discord."
	/>
	<meta
		name="twitter:description"
		content="Get the time left to Christmas with the decorative live online countdown or with the original Christmas countdown bot for Discord."
	/>
	<meta name="url" content="https://www.christmascountdown.live" />
	<meta name="og:url" content="https://www.christmascountdown.live" />
</svelte:head>

<h1 class="select-none font-christmas text-7xl m-10 text-center">Christmas Countdown</h1>

<div class="grid grid-rows-3 grid-cols-1 sm:grid-cols-2 gap-4">
	<div
		class="col-span-2 card-bg bg-fixed rounded-lg p-16 shadow-xl text-center"
		style="--url: url('https://img.eartharoid.me/insecure/pr:1080p/plain/s3://eartharoid/christmas-countdown/bg/legacy.jpg@webp');"
	>
		<div class="inner">
			<p class="text-3xl mb-4">Christmas is in</p>
			<p class="font-number text-6xl font-bold mb-4">{sleeps}</p>
			<p class="text-3xl">sleeps</p>
		</div>
	</div>
	<div class="mx-2">
		<Card background="bg-blurple" border="border-blurple">
			<div class="p-6">
				<h2>Get the Discord bot -&gt;</h2>
			</div>
		</Card>
	</div>
	<div class="mx-2">
		<Card background="bg-primary" border="border-primary">
			<div class="p-6">
				<h2>Customise your countdown -&gt;</h2>
			</div>
		</Card>
	</div>
</div>

<!-- <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" /> -->

<!-- backdrop-filter backdrop-blur-lg  -->
