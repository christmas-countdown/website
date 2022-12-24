<script>
	export let data;

	import Button from '$components/Button.svelte';
	import Box from '$components/Box.svelte';
	import Countdown from '$components/LiveCountdown/Countdown.svelte';
	import Card from '$components/Card.svelte';
	import Link from '$components/Link.svelte';
	import Item from '$components/TimeleftItem.svelte';
	import christmas from '$lib/christmas.js';
	import { getContext, onMount } from 'svelte';

	onMount(() => {
		setInterval(() => {
			data.date = christmas.christmas();
			data.seconds = christmas.getSeconds();
			data.minutes = christmas.getMinutes();
			data.hours = christmas.getHours();
			data.days = christmas.getDays();
			data.sleeps = christmas.getSleeps();
			data.weeks = christmas.getWeeks();
			data.months = christmas.getMonths();
			data.total = christmas.getTotal();
			data.weekday = christmas.getWeekday();
			data.percentage = christmas.getPercentage();
			data.isToday = christmas.isToday();
			data.isTomorrow = christmas.isTomorrow();
		}, 1000);
	});

	let page = getContext('page');
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
	<meta name="url" content="https://christmascountdown.live" />
	<meta name="og:url" content="https://christmascountdown.live" />
</svelte:head>

<div>
	<h1 class="select-none font-christmas text-7xl m-10 text-center">Christmas Countdown</h1>

	<div
		class="card-bg bg-original bg-fixed rounded-lg bg-clip-border shadow-xl text-center"
		style="--url: url('https://img.eartharoid.me/insecure/pr:1080p/plain/s3://eartharoid/christmas-countdown/bg/legacy.jpg@webp');"
	>
		<div class="inner p-2 sm:p-0">
			<p class="text-3xl mb-4">Christmas is in</p>
			<p class="font-number text-6xl font-bold mb-4">{data.sleeps}</p>
			<p class="text-3xl">{data.sleeps === 1 ? 'sleep' : 'sleeps'}</p>
		</div>
	</div>

	<div class="flex flex-col-reverse sm:flex-col justify-items-center">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
			<a href="/discord" class="transform hover:scale-105 duration-300 umami--click--discord">
				<!-- hover:-translate-y-2 -->
				<Card background="bg-blurple" border="border-blurple">
					<div class="p-6">
						<h2 class="font-bold text-xl">Add the Discord bot <i class="fas fa-arrow-right" /></h2>
						<p>
							Add the Christmas Countdown bot for Discord to your server to get the number of sleeps
							left until Christmas sent to the text channel of your choice every morning.
							<a href="/discord" class="font-semibold hover:underline"
								>Learn more <i class="fas fa-arrow-right" /></a
							>
						</p>
					</div>
				</Card>
			</a>
			<a href="/jokes" class="transform hover:scale-105 duration-300 umami--click--jokes">
				<Card background="bg-primary-dark" border="border-primary-dark">
					<div class="p-6">
						<h2 class="font-bold text-xl">
							Get Christmas jokes <i class="fas fa-arrow-right" />
						</h2>
						<p>
							Get a random joke from a collection of over 100 Christmas jokes, and avoid awkwardly trying to think of one yourself.
						</p>
					</div>
				</Card>
			</a>
		</div>

		<div>
			<div id="live" class="select-none text-center text-shadow-lg p-8 md:w-8/12 mx-auto">
				<div class="my-8 mb-12">
					<Countdown
						days={data.total.days}
						hours={data.total.hours}
						minutes={data.total.minutes}
						seconds={data.total.seconds}
					/>
				</div>
				<div class="my-4">
					<a href="/fullscreen"><Button colour="bg-primary" text="Fullscreen countdown" /></a>
				</div>
			</div>

			<div id="timeleft" class="grid grid-cols-1 sm:grid-cols-3 sm:gap-4 my-4 sm:m-0">
				<div class="col-span-1 m-2 sm:m-0">
					<Box>
						<div class="p-6 text-xl text-center h-full flex flex-col justify-center items-center">
							<span class="p-2">Christmas Day is on a</span>
							<span class="p-2"><span class="font-bold text-3xl">{data.weekday}</span></span>
							<span class="p-2">in {data.date.getFullYear()}.</span>
						</div>
					</Box>
				</div>
				<div class="col-span-2 m-2 sm:m-0">
					<Box>
						<div class="p-6 text-center">
							<div class="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-4">
								<Item name="months" value={Math.round(data.months * 10) / 10} />
								<Item name="weeks" value={Math.round(data.weeks * 10) / 10} />
								<Item name="sleeps" value={data.sleeps} />
								<Item name="days" value={Math.floor(data.days)} />
								<Item name="hours" value={Math.floor(data.hours)} />
								<Item name="minutes" value={Math.floor(data.minutes)} />
								<Item name="seconds" value={Math.floor(data.seconds)} />
								<div class="sm:col-span-2  w-full">
									<div class="grid grid-cols-1 gap-0">
										<p class="font-number text-3xl">{Math.round(data.percentage * 100) / 100}%</p>
										<!-- <p class="text-xl">of the way there</p> -->
										<div class="bg-primary-dark w-full h-2 rounded-lg shadow-xl mt-4">
											<div
												class="bg-primary h-full rounded-lg shadow-xl"
												style="width: {Math.round(data.percentage * 100) / 100}%;"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Box>
				</div>
			</div>
		</div>
	</div>
</div>
