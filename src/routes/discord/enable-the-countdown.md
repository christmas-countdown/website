<script>
	import Document from '../../components/Document.svelte';
	import Info from '../../components/Admonitions/Info.svelte';
	import { getContext } from 'svelte';

	let pages = getContext('pages');
</script>

<svelte:head>
<title>Enable the countdown • Christmas Countdown</title>
<meta name="title" content="Enable the countdown • Christmas Countdown" />
<meta name="og:title" content="Enable the countdown • Christmas Countdown" />
<meta name="twitter:title" content="Enable the countdown • Christmas Countdown" />
<meta
		name="description"
		content="Enable the Discord bot's countdown feature to get the number of sleeps left until Christmas send to a selected channel every morning."
	/>
<meta
		name="og:description"
		content="Enable the Discord bot's countdown feature to get the number of sleeps left until Christmas send to a selected channel every morning."
	/>
<meta
		name="twitter:description"
		content="Enable the Discord bot's countdown feature to get the number of sleeps left until Christmas send to a selected channel every morning."
	/>
</svelte:head>

<Document active="/discord/enable-the-countdown" {pages}>

# Enable the countdown

1. Create a new text channel which @everyone can read but not write (e.g. `#countdown`)
2. Type **`/countdown`** in the new channel
3. Type **`/toggle`** to enable the countdown

To disable the countdown after Christmas, simply type **`/toggle`** again.

<Info>
If the majority of your server members are from the same place, you should **[change the server timezone](./timezones)**.
</Info>

</Document>
