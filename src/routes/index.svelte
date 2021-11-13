<script context="module">
	import christmas from '$lib/christmas.js';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export const load = async () => {
		return {
			props: {
				date: christmas.christmas(),
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
	export let date;
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

	import Button from '../components/Button.svelte';
	import Box from '../components/Box.svelte';
	import Countdown from '../components/LiveCountdown/Countdown.svelte';
	import Card from '../components/Card.svelte';
	import Link from '../components/Link.svelte';
	import Item from '../components/TimeleftItem.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		setInterval(() => {
			date = christmas.christmas();
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

<div>
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

	<div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
		<a href="/discord" class="transform hover:scale-105 duration-300">
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
		<a href="/options" class="transform hover:scale-105 duration-300">
			<Card background="bg-primary-dark" border="border-primary-dark">
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

	<div id="live" class="select-none text-center text-shadow-lg p-8 md:w-8/12 mx-auto">
		<div class="my-8 mb-12">
			<Countdown
				days={total.days}
				hours={total.hours}
				minutes={total.minutes}
				seconds={total.seconds}
			/>
		</div>
		<div class="my-4">
			<a href="/fullscreen"><Button colour="bg-primary" text="Fullscreen countdown" /></a>
		</div>
	</div>

	<div id="timeleft" class="grid grid-cols-1 sm:grid-cols-3 gap-4">
		<Box>
			<div class="p-6 text-xl text-center h-full flex flex-col justify-center items-center">
				<p class="p-2">Christmas Day is on a</p>
				<p class="p-2"><span class="font-bold text-3xl">{weekday}</span></p>
				<p class="p-2">in {date.getFullYear()}.</p>
			</div>
		</Box>
		<div class="col-span-2">
			<Box>
				<div class="p-6 text-center">
					<div
						class="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-4"
					>
						<Item name="months" value={Math.round(months * 10) / 10} />
						<Item name="weeks" value={Math.round(weeks * 10) / 10} />
						<Item name="sleeps" value={sleeps} />
						<Item name="days" value={Math.round(days * 10) / 10} />
						<Item name="hours" value={Math.floor(hours)} />
						<Item name="minutes" value={Math.floor(minutes)} />
						<Item name="seconds" value={Math.floor(seconds)} />
						<div class="sm:col-span-2  w-full">
							<div class="grid grid-cols-1 gap-0">
								<p class="font-number text-3xl">{Math.round(percentage * 100) / 100}%</p>
								<!-- <p class="text-xl">of the way there</p> -->
								<div class="bg-primary-dark w-full h-2 rounded-lg shadow-xl mt-4">
									<div class="bg-primary h-full rounded-lg shadow-xl" style="width: {Math.round(percentage * 100) / 100}%;" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</Box>
		</div>
	</div>
</div>
