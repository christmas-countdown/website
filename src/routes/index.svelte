<script context="module">
	import christmas from '$lib/christmas.js';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export const load = async () => {
		return {
			props: {
				seconds: christmas.getSeconds(),
				minutes: christmas.getMinutes(),
				hours: christmas.getHours(),
				days: christmas.getDays(),
				sleeps: christmas.getSleeps(),
				weeks: christmas.getWeeks(),
				months: christmas.getMonths(),
				total: christmas.getTotal(),
				weekday: christmas.getWeekday(),
				percentage: christmas.getPercentage(),
				isToday: christmas.isToday(),
				isTomorrow: christmas.isTomorrow()
			}
		};
	};
</script>

<script>
	export let seconds;
	export let minutes;
	export let hours;
	export let days;
	export let sleeps;
	export let weeks;
	export let months;
	export let total;
	export let weekday;
	export let percentage;
	export let isToday;
	export let isTomorrow;

	import Countdown from '../components/LiveCountdown/Countdown.svelte';
	import Card from '../components/Card.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		setInterval(() => {
			seconds = christmas.getSeconds();
			minutes = christmas.getMinutes();
			hours = christmas.getHours();
			days = christmas.getDays();
			sleeps = christmas.getSleeps();
			weeks = christmas.getWeeks();
			months = christmas.getMonths();
			total = christmas.getTotal();
			weekday = christmas.getWeekday();
			percentage = christmas.getPercentage();
			isToday = christmas.isToday();
			isTomorrow = christmas.isTomorrow();
		}, 1000);
	});
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

<div class="container mx-auto">
	<h1 class="select-none font-christmas text-7xl m-10 text-center">Christmas Countdown</h1>

	<div
		class="card-bg bg-original bg-fixed rounded-lg bg-clip-border shadow-xl text-center"
		style="--url: url('https://img.eartharoid.me/insecure/pr:1080p/plain/s3://eartharoid/christmas-countdown/bg/legacy.jpg@webp');"
	>
		<div class="inner p-2 sm:p-0">
			<p class="text-3xl mb-4">Christmas is in</p>
			<p class="font-number text-6xl font-bold mb-4">{sleeps}</p>
			<p class="text-3xl">sleeps</p>
		</div>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
		<a href="/discord" class="mx-2 transform hover:scale-105 duration-300">
			<!-- hover:-translate-y-2 -->
			<Card background="bg-blurple" border="border-blurple">
				<div class="p-6">
					<h2 class="font-bold text-xl">Get the Discord bot <i class="fas fa-arrow-right" /></h2>
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
		<a href="/options" class="mx-2 transform hover:scale-105 duration-300">
			<Card background="bg-primary" border="border-primary">
				<div class="p-6">
					<h2 class="font-bold text-xl">
						Customise your countdown <i class="fas fa-arrow-right" />
					</h2>
					<p>
						Manage your website preferences and configure options for snow, custom backgrounds, and
						more.
					</p>
				</div>
			</Card>
		</a>
	</div>

	<div
		class="select-none text-center m-2 mt-8 backdrop-filter backdrop-blur-lg backdrop-saturate-150 bg-black bg-opacity-40 rounded-lg p-6 shadow-xl"
	>
		<Countdown
			days={total.days}
			hours={total.hours}
			minutes={total.minutes}
			seconds={total.seconds}
		/>
	</div>
</div>
