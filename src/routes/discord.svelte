<script>
	import Button from '..//components/Button.svelte';
	import Card from '..//components/Card.svelte';
	import Feature from '..//components/Feature.svelte';
	import Link from '..//components/Link.svelte';
</script>

<svelte:head>
	<title>Discord bot • Christmas Countdown</title>
	<meta name="title" content="Discord bot • Christmas Countdown" />
	<meta name="og:title" content="Discord bot • Christmas Countdown" />
	<meta name="twitter:title" content="Discord bot • Christmas Countdown" />
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
	<meta name="url" content="https://www.christmascountdown.live/discord" />
	<meta name="og:url" content="https://www.christmascountdown.live/discord" />
</svelte:head>

<div class="container mx-auto">
	<h1 class="select-none text-center">
		<p class="text-xl uppercase p-2">The original</p>
		<p class="font-christmas text-7xl p-2">Christmas Countdown</p>
		<p class="text-2xl uppercase p-2">bot for Discord</p>
	</h1>

	<div
		class="my-8 text-center backdrop-filter backdrop-blur-lg backdrop-saturate-150 bg-black bg-opacity-40 rounded-lg p-8 shadow-xl"
	>
		<div class="my-6">
			<p>
				Add the Christmas Countdown bot for Discord to your server to get the number of sleeps left
				until Christmas sent to a selected channel every morning. The bot has been added to over
				8000 Discord servers since 2018.
			</p>
		</div>

		<a href="/invite">
			<Button colour="bg-blurple" text="Add to Discord" />
		</a>
	</div>
	<h2 class="text-xl font-bold text-center mb-4">Features</h2>

	<div id="features" class="container mx-auto w-full m-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
		<Feature title="Server and user timezones">
			<p>
				Make the commands more accurate by setting your user timezone. This will be used when you
				use a Christmas command on any server.
			</p>
			<p>
				The server's timezone is used for the automatic countdown in the morning, and will be used
				as the default when a user who has not set a personal timezone uses a command.
			</p>
			<br />
			<p class="text-right">
				<Link href="https://docs.christmascountdown.live/discord/timezones">
					Learn more <i class="fas fa-arrow-right" />
				</Link>
			</p>
		</Feature>
		<Feature title="Server and user locales">
			<p>
				Similarly to the timezones, users can set their own language, and administrators can set the
				server's default.
			</p>
			<p>
				If the bot hasn't been translated to your language yet, you can contribute on <Link
					href="https://github.com/christmas-countdown/bot">GitHub</Link
				>.
			</p>
			<br />
			<p class="text-right">
				<Link href="https://i18n.capestar.net/engage/christmas-countdown/"
					>Translate <i class="fas fa-arrow-right" /></Link
				>
			</p>
		</Feature>
		<Feature title="Logical commands">
			<p>The bot is very easy to use and has over 20 well-documented commands.</p>
			<img
				src="https://static.eartharoid.me/sharex/21/10/bot-help-cmd.png"
				alt="Commands"
				class="my-4"
			/>
			<p class="text-right">
				<Link href="https://docs.christmascountdown.live/discord/commands"
					>Learn more <i class="fas fa-arrow-right" /></Link
				>
			</p>
		</Feature>
		<Feature title="Time left to Christmas in...">
			<p>months, weeks, sleeps, days, hours, minutes, seconds, or the total time left.</p>
			<img
				src="https://static.eartharoid.me/sharex/21/10/bot-total-cmd.png"
				alt="Total"
				class="my-4"
			/>
			<img
				src="https://static.eartharoid.me/sharex/21/10/bot-hours-cmd.png"
				alt="Hours"
				class="my-4"
			/>
		</Feature>
		<Feature title="Daily countdown">
			<p>
				<Link href="https://docs.christmascountdown.live/discord/enable-the-countdown"
					>Set the countdown channel</Link
				> and get a countdown message ready for when you wake up every morning.
			</p>
			<img
				src="https://static.eartharoid.me/sharex/21/10/bot-countdown.png"
				alt="Countdown"
				class="my-4"
			/>
			<p class="text-right">
				<Link href="https://docs.christmascountdown.live/discord/enable-the-countdown"
					>Learn more <i class="fas fa-arrow-right" /></Link
				>
			</p>
		</Feature>
		<Feature title="Jokes">
			<p>
				Use the <Link href="https://docs.christmascountdown.live/discord/commands#joke"
					><code class="text-primary">/joke</code></Link
				> command to get a random Christmas joke.
			</p>
			<img
				src="https://static.eartharoid.me/sharex/21/10/bot-joke-cmd.png"
				alt="Joke"
				class="my-4"
			/>
		</Feature>
	</div>
	<div class="text-center">
		<a href="/invite">
			<Button colour="bg-blurple" text="Add to Discord" />
		</a>
	</div>
	<div class="grid grid-cols-1 gap-4 sm:w-1/2 mx-auto mt-8">
		<a
			href="https://top.gg/bot/648134637654114309"
			class="mx-2 transform hover:scale-105 duration-300"
		>
			<Card background="bg-blurple" border="border-blurple">
				<div class="p-6">
					<h2 class="font-bold text-xl mb-2">
						<img
							src="https://images.discordapp.net/avatars/648134637654114309/6d6986c735dec65ba5e2e731db15909c.png?size=48"
							alt="Logo"
							class="rounded-3xl mr-4 inline"
						/>Christmas Radio <i class="fas fa-external-link-alt" />
					</h2>
					<p>
						Play Christmas music 24/7 in your Discord server with the <Link
							href="https://top.gg/bot/648134637654114309">Christmas Radio bot.</Link
						>
					</p>
				</div>
			</Card>
		</a>
	</div>
</div>
