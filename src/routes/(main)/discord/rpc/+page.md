<script>
	import Document from '$components/Document.svelte';
	import Button from '$components/Button.svelte';
	import Warning from '$components/Admonitions/Warning.svelte';
	import Question from '$components/Admonitions/Question.svelte';
	import pages from '../pages.json'
</script>

<svelte:head>

<title>RPC • Christmas Countdown</title>
<meta name="title" content="RPC • Christmas Countdown" />
<meta name="og:title" content="RPC • Christmas Countdown" />
<meta name="twitter:title" content="RPC • Christmas Countdown" />
<meta
		name="description"
		content="Get Christmas Countdown RPC for Discord to unlock additional features."
	/>
<meta
		name="og:description"
		content="Get Christmas Countdown RPC for Discord to unlock additional features."
	/>
<meta
		name="twitter:description"
		content="Get Christmas Countdown RPC for Discord to unlock additional features."
	/>
</svelte:head>

<Document active="/discord/rpc" {pages}>

# RPC

## What is this?

Christmas Countdown RPC is a tiny program you can run in the background on your PC to make it appear you are "Playing Christmas Countdown",
adding the number of sleeps left until Christmas to your Discord presence:

![](https://static.eartharoid.me/k/22/06/30134055.png)

### Why should I use it?

You can use Christmas Countdown RPC as an alternative to voting to unlock additional bot features.

<Warning>
This doesn't unlock any additional bot features yet, but you can still use it if you love Christmas.
New bot features may be added soon.
</Warning>

## Instructions

To get started, download the appropriate file for your system from [the GitHub repository](https://github.com/christmas-countdown/rpc).

<a href="https://github.com/christmas-countdown/rpc#installation">
	<Button colour="bg-primary" text="Download from GitHub" icon="fa-solid fa-download" />
</a>

You can find installation instructions, a troubleshooting guide, and more information on [GitHub](https://github.com/christmas-countdown/rpc#readme).

<Question title="Help">
Need help? [Join the Discord support server](https://lnk.earth/discord).
</Question>

</Document>
