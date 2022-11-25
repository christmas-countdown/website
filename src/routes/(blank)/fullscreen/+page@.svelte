<script>
	export let data;
	import christmas from '$lib/christmas.js';

	import { onMount } from 'svelte';

	onMount(() => {
		setInterval(() => {
			data.total = christmas.getTotal();
			data.isToday = christmas.isToday();
		}, 1000);
	});
</script>

<svelte:head>
	<title>Fullscreen countdown • Christmas Countdown</title>
	<meta name="title" content="Fullscreen countdown • Christmas Countdown" />
	<meta name="og:title" content="Fullscreen countdown • Christmas Countdown" />
	<meta name="twitter:title" content="Fullscreen countdown • Christmas Countdown" />
	<meta
		name="description"
		content="Display a beautiful and distraction-free fullscreen live Christmas countdown on the big screen."
	/>
	<meta
		name="og:description"
		content="Display a beautiful and distraction-free fullscreen live Christmas countdown on the big screen."
	/>
	<meta
		name="twitter:description"
		content="Display a beautiful and distraction-free fullscreen live Christmas countdown on the big screen."
	/>
	<meta name="url" content="https://christmascountdown.live/fullscreen" />
	<meta name="og:url" content="https://christmascountdown.live/fullscreen" />
</svelte:head>

<div class="container mx-auto text-white text-center select-none flex justify-center items-center h-screen">
	{#if data.isToday}
		<p class="font-christmas text-5xl lg:text-7xl 2xl:text-9xl">Merry Christmas!</p>
	{:else}
		<div>
			<p class="font-christmas text-5xl lg:text-7xl 2xl:text-9xl mb-12 sm:mb-16 xl:mb-24">There are only</p>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-28">
				{#each Object.keys(data.total) as t}
					<div class="grid grid-cols-1 sm:gap-2">
						<p class="font-number text-5xl lg:text-7xl 2xl:text-9xl">{data.total[t]}</p>
						<p class="font-christmas text-5xl lg:text-7xl 2xl:text-9xl">{@html data.total[t] === 1 ? t.slice(0, -1) + '&nbsp;' : t}</p>
					</div>
				{/each}
			</div>
			<p class="font-christmas text-5xl lg:text-7xl 2xl:text-9xl mt-12 sm:mt-16 xl:mt-24">until Christmas!</p>
		</div>
	{/if}
</div>
