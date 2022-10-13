<script>
	import Button from '$components/Button.svelte';
	import Link from '$components/Link.svelte';
</script>

<svelte:head>
	<title>Donate • Christmas Countdown</title>
	<meta name="title" content="Donate • Christmas Countdown" />
	<meta name="og:title" content="Donate • Christmas Countdown" />
	<meta name="twitter:title" content="Donate • Christmas Countdown" />
	<meta
		name="description"
		content="Send a donation and unlock premium features for the Christmas Countdown Discord bot."
	/>
	<meta
		name="og:description"
		content="Send a donation and unlock premium features for the Christmas Countdown Discord bot."
	/>
	<meta
		name="twitter:description"
		content="Send a donation and unlock premium features for the Christmas Countdown Discord bot."
	/>
</svelte:head>

<div class="text-center sm:px-8">
	<h1 class="select-none font-christmas text-7xl m-10 text-center">Donate</h1>

	<p>
		Donators can enable premium features on their Discord servers. Please contact me on <Link
			href="https://lnk.earth/discord">Discord</Link
		> before donating and tell me which servers you want to enable premium on.
	</p>
	<p class="my-4">
		<a href="https://lnk.earth/xmas-premium">
			<Button colour="bg-yellow-500" text="Donate on Ko-fi" />
		</a>
	</p>
</div>
