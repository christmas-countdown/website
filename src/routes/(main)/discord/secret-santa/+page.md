<script>
	import Document from '$components/Document.svelte';
	import Warning from '$components/Admonitions/Warning.svelte';
	import Tip from '$components/Admonitions/Tip.svelte';
	import pages from '../pages.json'
</script>

<svelte:head>

<title>Secret Santa • Christmas Countdown</title>
<meta name="title" content="Secret Santa • Christmas Countdown" />
<meta name="og:title" content="Secret Santa • Christmas Countdown" />
<meta name="twitter:title" content="Secret Santa • Christmas Countdown" />
<meta
		name="description"
		content="Use the Christmas Countdown bot for Discord's Secret Santa feature to organise your gift exchange."
	/>
<meta
		name="og:description"
		content="Use the Christmas Countdown bot for Discord's Secret Santa feature to organise your gift exchange."
	/>
<meta
		name="twitter:description"
		content="Use the Christmas Countdown bot for Discord's Secret Santa feature to organise your gift exchange."
	/>
</svelte:head>

<Document active="/discord/secret-santa" {pages}>

# Secret Santa

## How it works

Secret Santa uses Discord's Events feature.
An administrator creates a scheduled event and server members can use the "Interested" button to join.
At the scheduled time, the bot will take all of the members who have registered interest and assign each another member to give a gift to.

<Warning>
Make sure you read the guide carefully.
The location **must** be `Christmas Countdown`,
and **the event start time is when users will be paired** by the bot, not when users will give or open their gifts.  
</Warning>

## Setting it up

This guide is for server administrators.

1. First, [navigate to the event creation screen](https://static.eartharoid.me/sharex/21/11/DiscordPTB_22S13DlCJS.png).

2. Then select "Somewhere Else" and enter `Christmas Countdown` as the location. **This is required for the bot to recognise the event.**
![](https://static.eartharoid.me/sharex/21/11/qRjD13f1xx.png)

3. Give the event a name such as the example below.

4. Select a start date for the event. **This is when members will no longer be able to join and the bot will start matching members.**
You should give your members at least 2 weeks to prepare and deliver their gift, and a few days to enter before the event date if possible.

1. Enter an event description. If you are doing Secret Santa on a small server with just your friends, use this space to set the spending limit.
For large communities where only virtual gifts are being exchanged, describe what gifts are acceptable and where they are to be exchanged.
For example, a Minecraft server could organise a Secret Santa event for exchanging precious items or building something for each other.
![](https://static.eartharoid.me/sharex/21/11/DiscordPTB_7tLCMzy5ho.png)

1. Optionally, copy the event link given by Discord and make an announcement in your Discord server so everyone knows about it.
![](https://static.eartharoid.me/sharex/21/11/DiscordPTB_2yiQDHklZH.png)


<Tip>
Depending on the nature of your Discord server,
you may also want to **schedule a second event** (in a voice channel, on a Minecraft server etc) on or before Christmas Day **to exchange gifts**.
</Tip>

## How members view who they are assigned to

When the event starts, the bot will assign each member someone to give a gift to.

**Members can use [`/secret-santa show`](/discord/commands#secret-santa-show) to see who they are assigned to.**

## Moderation

If a member doesn't receive their gift, an administrator can use [`/secret-santa list`](/discord/commands#secret-santa-list) to check who didn't give a gift.

Members can also be [blacklisted](/discord/commands#secret-santa-blacklist). This won't prevent them from pressing the button to join, but the bot will simply ignore them from the list.

</Document>
