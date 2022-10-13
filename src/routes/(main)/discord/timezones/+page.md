<script>
	import Document from '$components/Document.svelte';
	import Note from '$components/Admonitions/Note.svelte';
	import pages from '../pages.json'
</script>

<svelte:head>

<title>Timezones • Christmas Countdown</title>
<meta name="title" content="Timezones • Christmas Countdown" />
<meta name="og:title" content="Timezones • Christmas Countdown" />
<meta name="twitter:title" content="Timezones • Christmas Countdown" />
<meta
		name="description"
		content="Change your server's or personal timezone to make the countdown more accurate."
	/>
<meta
		name="og:description"
		content="Change your server's or personal timezone to make the countdown more accurate."
	/>
<meta
		name="twitter:description"
		content="Change your server's or personal timezone to make the countdown more accurate."
	/>
</svelte:head>

<Document active="/discord/timezones" {pages}>

# Timezones

## Server timezones

<Note>
If you have an international community it is better to leave the timezone as the default (`UTC`).
</Note>

The server timezone will be used for the automatic countdown, and as a default for commands if a user does not have a personal timezone set.

Type **`/server set timezone:`** followed by your preferred [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

## User timezones

Your user timezone overrides the server's timezone when using commands.

Type **`/user set timezone:`** followed by your preferred [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

</Document>
