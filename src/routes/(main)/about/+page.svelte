<script>
	import Box from '$components/Box.svelte';
	import Left from '$components/Timeline/Left.svelte';
	import Right from '$components/Timeline/Right.svelte';
	import { getContext } from 'svelte';
</script>

<svelte:head>
	<title>About • Christmas Countdown</title>
	<meta name="title" content="About • Christmas Countdown" />
	<meta name="og:title" content="About • Christmas Countdown" />
	<meta name="twitter:title" content="About • Christmas Countdown" />
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
</svelte:head>

<div class="container mx-auto">
	<Box>
		<div class="mt-16 p-8">
			<h1 class="text-2xl font-bold mb-2">About</h1>
			<p>
				This started as a single web page with smashed together code because I (eartharoid) wanted
				something pretty to put on my 7" Raspberry Pi touchscreen. The Christmas Countdown website
				now has thousands of visitors and the bot has been added to over 8000 servers.
			</p>
		</div>
	</Box>

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
				<p class="leading-tight">
					In early October, the Discord bot was rewritten for the third time. The v4 Discord bot was
					released in the week before Halloween, with Discord's slash commands, some new commands,
					and general user improvements.
					The new Svelte and TailwindCSS website was released less than 3 weeks later.
				</p>
			</Left>
			<Right>
				<h3 class="font-semibold text-lg mb-1">2022</h3>
				<p class="leading-tight">
					Not much yet.
				</p>
			</Right>
		</div>
	</div>
</div>
