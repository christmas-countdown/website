<script>
	import Left from '../components/Timeline/Left.svelte';
	import Right from '../components/Timeline/Right.svelte';
</script>

<svelte:head>
	<title>About • Christmas Countdown</title>
	<meta name="title" content="About • Christmas Countdown" />
	<meta name="og:title" content="About • Christmas Countdown" />
	<meta name="twitter:title" content="About • Christmas Countdown" />
	<meta
		name="description"
		content="Get the number of sleeps left until Christmas sent to a selected channel every morning - in your language and your timezone."
	/>
	<meta
		name="og:description"
		content="Get the number of sleeps left until Christmas sent to a selected channel every morning - in your language and your timezone."
	/>
	<meta
		name="twitter:description"
		content="Get the number of sleeps left until Christmas sent to a selected channel every morning - in your language and your timezone."
	/>
	<meta name="url" content="https://www.christmascountdown.live/about" />
	<meta name="og:url" content="https://www.christmascountdown.live/about" />
</svelte:head>

<div class="container mx-auto">
	<div
		class="mt-16 p-8 backdrop-filter backdrop-blur-lg backdrop-saturate-150 bg-black bg-opacity-40 rounded-lg shadow-xl"
	>
		<h1 class="text-2xl font-bold mb-2">About</h1>
		<p>
			This started as a single web page with smashed together code because I (eartharoid) wanted
			something pretty to put on my 7" Rapsberry Pi touchscreen. The Christmas Countdown website now
			has thousands of visitors and the bot has been added to over 8000 servers.
		</p>
	</div>

	<div class="2xl:m-16 mt-8">
		<h2 class="text-xl font-bold text-center mb-4">History</h2>
		<div class="flex flex-col md:grid grid-cols-9 mx-auto p-2">
			<Left>
				<h3 class="font-semibold text-lg mb-1">2017</h3>
				<p class="leading-tight">
					<!-- text-justify -->
					The CountdownToXMAS (countdowntoxmas.tk) website was released. It featured copy-and-pasted
					jQuery code and it sucked, but looked nice.
				</p>
			</Left>
			<Right>
				<h3 class="font-semibold text-lg mb-1">2018</h3>
				<p class="leading-tight">
					The orginal Christmas Countdown Discord bot was released in November with the Santa hat
					icon. It was a single JavaScript file. The website got a couple of new pages, which were
					white text on a dark blue background.
				</p>
			</Right>
			<Left>
				<h3 class="font-semibold text-lg mb-1">2019</h3>
				<p class="leading-tight">
					Version 2 of the Discord bot was released, with not many new features, but "better" code.
					Version 2 of the website was developed but never released. The bot and website got a new
					Santa logo, and the website was renamed to Christmas Countdown (christmascountdown.live).
				</p>
			</Left>
			<Right>
				<h3 class="font-semibold text-lg mb-1">2020</h3>
				<p class="leading-tight">
					In the first week of September development started on v3 of the Discord bot, which was
					released on October 24th. The bot was completely rewritten and had new features, including
					translations and much needed timezone support for users and servers. Work on the new
					website started the day after the bot was released.
				</p>
			</Right>
			<Left>
				<h3 class="font-semibold text-lg mb-1">2021</h3>
				<p class="leading-tight">Svelte!</p>
			</Left>
		</div>
	</div>
</div>
