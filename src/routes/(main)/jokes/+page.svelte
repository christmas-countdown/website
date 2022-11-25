<script>
	export let data;
	import Box from '$components/Box.svelte';
	import Button from '$components/Button.svelte';

	let { joke } = data;
	let flipped = false;

	function flip() {
		flipped = !flipped;
	}

	async function getJoke() {
		flipped = false;
		const res = await fetch('/api/joke');
		joke = await res.json();
		console.log(joke);
	}
</script>

<svelte:head>
	<title>Jokes • Christmas Countdown</title>
	<meta name="title" content="Jokes • Christmas Countdown" />
	<meta name="og:title" content="Jokes • Christmas Countdown" />
	<meta name="twitter:title" content="Jokes • Christmas Countdown" />
	<meta
		name="description"
		content="Get a random joke from a collection of over 100 Christmas jokes."
	/>
	<meta
		name="og:description"
		content="Get a random joke from a collection of over 100 Christmas jokes."
	/>
	<meta
		name="twitter:description"
		content="Get a random joke from a collection of over 100 Christmas jokes."
	/>
</svelte:head>

<div class="my-2 sm:my-4 sm:mx-12 md:mx-32 lg:mx-48 2xl:mx-72 text-center">
	<div
		id="joke-card"
		class="sm:m-8 transform transition duration-700 ease-in-out cursor-pointer hover:rotate-180 {flipped ? 'rotate-180' : ''}"
	>
		<Box>
			<div class="text-center text-lg font-semibold p-8">
				<!-- <p class="transition duration-700 ease-in-out {flipped ? 'text-gray-400' : ''}">
					{joke.question}
				</p>
				<p
					class="transition duration-700 ease-in-out transform rotate-180 {flipped
						? ''
						: 'text-gray-400'}"
				>
					{joke.answer}
				</p> -->
				<p class="p-2 transition duration-700 ease-in-out">
					{joke.question}
				</p>
				<p class="p-2 transition duration-700 ease-in-out transform rotate-180 text-green-400">
					{joke.answer}
				</p>
			</div>
		</Box>
	</div>

	<div class="my-2">
		<span on:click={flip}>
			<Button colour="bg-green-600" text={flipped ? 'Show question' : 'Reveal answer'} />
		</span>
		<span on:click={getJoke}>
			<Button colour="bg-primary" text="Get another joke" />
		</span>
	</div>
</div>
