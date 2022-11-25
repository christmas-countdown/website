<script>
	import Document from '$components/Document.svelte';
	import Info from '$components/Admonitions/Info.svelte';
	import Tip from '$components/Admonitions/Tip.svelte';
	import pages from '../pages.json'
</script>

<svelte:head>
<title>Enable the countdown • Christmas Countdown</title>
<meta name="title" content="Enable the countdown • Christmas Countdown" />
<meta name="og:title" content="Enable the countdown • Christmas Countdown" />
<meta name="twitter:title" content="Enable the countdown • Christmas Countdown" />
<meta
		name="description"
		content="Enable the Discord bot's countdown feature to get the number of sleeps left until Christmas sent to a selected channel every morning."
	/>
<meta
		name="og:description"
		content="Enable the Discord bot's countdown feature to get the number of sleeps left until Christmas sent to a selected channel every morning."
	/>
<meta
		name="twitter:description"
		content="Enable the Discord bot's countdown feature to get the number of sleeps left until Christmas sent to a selected channel every morning."
	/>
</svelte:head>

<Document active="/discord/enable-the-countdown" {pages}>

# Enable the countdown

<Tip title="TL;DR">
**Use the [`/setup`](./commands#setup) command**:
`/setup countdown: webhook`, or
`/setup countdown: widget`
</Tip>

There are currently two types of countdown:

- [Webhook](#webhook-countdown): the original countdown, where a message is sent to the countdown channel every morning
- [Widget](#widget-countdown): where the name of a voice channel is updated every hour

Both countdowns can be used simultaneously.
You may want to set up both at the same time but <abbr title="/server set enabled: false auto_toggle: true">disable the countdown and set it to automatically toggle</abbr>.
If you do this, you'll have a widget all-year round, and the more prominent webhook will only be enabled between 1st-26th December.

## Webhook countdown

To enable the webhook countdown:

1. Create a new text channel in which @everyone can read but not write (e.g. "#countdown")
2. **Type `/setup countdown: webhook` in the new channel.**
    This will create a webhook *in the channel you use it in*.

The bot will keep sending messages to this channel until you use `/toggle`.
If you want it to stop automatically on th 26th December (and start again on the 1st December next year),
type `/server set auto_toggle: true`.

## Widget countdown

To enable the widget countdown, **type `/setup countdown: widget`.**
This will create a new (locked) voice channel at the top of your server's channel list.

<Info>
If the majority of your server members are from the same place, you should **[change the server timezone](./timezones)**.
</Info>

</Document>
