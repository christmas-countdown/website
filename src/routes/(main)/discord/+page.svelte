<script>
	import Box from '$components/Box.svelte';
	import Button from '$components/Button.svelte';
	import Card from '$components/Card.svelte';
	import Feature from '$components/Feature.svelte';
	import Link from '$components/Link.svelte';
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
</svelte:head>

<div>
	<h1 class="select-none text-center my-8">
		<p class="text-xl uppercase p-2">The original</p>
		<p class="font-christmas text-7xl p-2">Christmas Countdown</p>
		<p class="text-2xl uppercase p-2">bot for Discord</p>
	</h1>

	<Box>
		<div class="my-8 p-8 text-center max-w-2xl mx-auto">
			<div class="my-6">
				<p>
					Added to over 8000 Discord servers since 2018, the Christmas Countdown bot for Discord has
					several core features to help you prepare for and enjoy the festive season, including:
					<b class="wavy">two types of countdown</b>, a <b class="wavy">Santa Tracker</b>,
					<b class="wavy">Secret Santa</b> event organisation, Christmas <b class="wavy">jokes</b>,
					and commands to tell you exactly how long is left until Christmas in your timezone.
				</p>
			</div>
			<div>
				<a href="/discord/add" class="umami--click--add1">
					<Button colour="bg-blurple" text="Add to Discord" icon="fab fa-discord" />
				</a>
				<a href="/discord/commands" class="umami--click--commands">
					<Button colour="bg-gray-600" text="View documentation" />
				</a>
			</div>
		</div>
	</Box>

	<h2 class="text-xl font-bold text-center mb-4">Features</h2>

	<div id="features" class="container mx-auto w-full m-8">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
			<Feature title="Daily countdown">
				<p>
					<i>The original feature -</i> use the <Link href="/discord/enable-the-countdown#webhook-countdown"
						>webhook countdown</Link
					>
					to get the number of sleeps left until Christmas sent to the selected channel every morning.
				</p>
				<img src="/daily-countdown.png" alt="Countdown" class="my-4" />
				<p class="text-right">
					<a
						href="/discord/enable-the-countdown#webhook-countdown"
						class="font-bold hover:underline">Learn more <i class="fas fa-arrow-right" /></a
					>
				</p>
			</Feature>
			<Box>
				<div class="p-6">
					<h3 class="font-bold text-xl mb-2">
						Santa tracker
						<span class="uppercase font-bold p-1 px-2 text-xs rounded-xl bg-primary">
							Experimental
						</span>
					</h3>
					<p>
						Check Santa's location with a message that updates every few minutes on Christmas Eve.
						<i>Requires the webhook countdown to be enabled.</i>
					</p>
					<img src="/santa-tracker.png" alt="Commands" class="my-4" />
				</div>
			</Box>
			<Box>
				<div class="p-6">
					<h3 class="font-bold text-xl mb-2">
						Countdown widget
						<span class="uppercase font-bold p-1 px-2 text-xs rounded-xl bg-primary"> New </span>
					</h3>
					<p>
						If you want a more subtle countdown, you can use the
						<Link href="/discord/enable-the-countdown#widget-countdown">widget countdown</Link>
						to display the number of sleeps or hours left until Christmas at the top of your server's
						channel list.
					</p>
					<img
						src="https://static.eartharoid.me/x/2022/11/DiscordPTB_B1tbcBraex.png"
						alt="Widget"
						class="my-4"
					/>
					<img
						src="https://static.eartharoid.me/x/2022/11/puQNAIq8rp.png"
						alt="Widget"
						class="my-4"
					/>
					<p class="text-right">
						<a
							href="/discord/enable-the-countdown#widget-countdown"
							class="font-bold hover:underline">Learn more <i class="fas fa-arrow-right" /></a
						>
					</p>
				</div>
			</Box>
			<Feature title="Time left to Christmas in...">
				<p>months, weeks, sleeps, days, hours, minutes, seconds, or the total time left.</p>
				<img
					src="https://static.eartharoid.me/sharex/21/10/bot-total-cmd.png"
					alt="Total"
					class="my-4"
				/>
				<!-- <img
					src="https://static.eartharoid.me/sharex/21/10/bot-hours-cmd.png"
					alt="Hours"
					class="my-4"
				/> -->
			</Feature>
			<Box>
				<div class="p-6">
					<h3 class="font-bold text-xl mb-2">
						Secret Santa
						<span class="uppercase font-bold p-1 px-2 text-xs rounded-xl bg-primary">
							Experimental
						</span>
					</h3>
					<p>
						Whether it's for a small group of friends who are sharing physical presents, or a large
						community exchanging virtual gifts (such as in-game items), this <span class="italic"
							>experimental</span
						> feature makes it easy to organise a Secret Santa event.
					</p>
					<p class="text-right">
						<a href="/discord/secret-santa" class="font-bold hover:underline"
							>Learn more <i class="fas fa-arrow-right" /></a
						>
					</p>
				</div>
			</Box>
			<a href="/discord/rpc" class="transform hover:scale-105 duration-300 umami--click--rpc">
				<!-- hover:-translate-y-2 -->
				<Card background="bg-blurple" border="border-blurple">
					<div class="p-6">
						<h2 class="font-bold text-xl mb-2">Discord RPC <i class="fas fa-arrow-right" /></h2>
						<p>
							Add a Christmas Countdown to your Discord presence/status and unlock additional
							features.
							<a href="/discord/rpc" class="font-bold hover:underline"
								>Learn more <i class="fas fa-arrow-right" /></a
							>
							<img src="https://static.eartharoid.me/k/22/06/30011959.png" alt="Screenshot" />
						</p>
					</div>
				</Card>
			</a>

			<Feature title="Jokes">
				<p>
					Use the <Link href="/discord/commands#joke"><code class="text-primary">/joke</code></Link>
					command to get a random Christmas joke.
				</p>
				<img
					src="/joke.png"
					alt="Joke"
					class="my-4"
				/>
			</Feature>
			<Feature title="In your timezone and language">
				<p>
					Set your server's and your personal timezone to make the countdown and commands more
					accurate.
				</p>
				<p>You can also customise the bot by changing your server's and personal language.</p>
				<br />
				<p>
					All timezones are supported, and there are currently 9 supported languages. You can
					<Link href="https://hosted.weblate.org/engage/christmas-countdown/">
						contribute on Weblate
					</Link>
					to improve translations.
				</p>
				<br />
				<p class="text-right">
					<a href="/discord/timezones" class="font-bold hover:underline">
						Learn more <i class="fas fa-arrow-right" />
					</a>
				</p>
			</Feature>
		</div>
	</div>
	<div class="text-center my-12">
		<p class="my-4">All of these features are available for free.</p>
		<p>
			<a href="/discord/add" class="umami--click--add2">
				<Button colour="bg-blurple" text="Add to Discord" icon="fab fa-discord" />
			</a>
			<a href="https://actiniumcloud.com" class="font-semibold text-sm hover:underline m-2">
				<img src="/actinium.png" alt="ActiniumCloud" class="h-8 inline" />Powered by ActiniumCloud
			</a>
		</p>
	</div>
	<div class="grid grid-cols-1 gap-4 sm:w-1/2 mx-auto mt-12">
		<a
			href="https://top.gg/bot/648134637654114309"
			class="mx-2 transform hover:scale-105 duration-300 umami--click--radio"
			target="_blank"
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
						Play Christmas music 24/7 in your Discord server with the
						<Link href="https://top.gg/bot/648134637654114309">Christmas Radio bot.</Link>
					</p>
				</div>
			</Card>
		</a>
	</div>
</div>
