<script>
	import Box from '$components/Box.svelte';
	import Note from '$components/Admonitions/Note.svelte';
	import Tip from '$components/Admonitions/Tip.svelte';

	const seconds_in_one_day = 86400;

	const now = new Date();
	const christmas = new Date(`December 25, ${now.getFullYear()} 00:00:00`);
	
	const difference_in_milliseconds = christmas - now;
	const difference_in_seconds = difference_in_milliseconds / 1000;
	
	const unrounded = difference_in_seconds / seconds_in_one_day;
	const sleeps = Math.ceil(unrounded); // round up
	const days = Math.floor(unrounded); // round down
</script>

<svelte:head>

<title>Days vs sleeps • Christmas Countdown</title>
<meta name="title" content="Days vs sleeps • Christmas Countdown" />
<meta name="og:title" content="Days vs sleeps • Christmas Countdown" />
<meta name="twitter:title" content="Days vs sleeps • Christmas Countdown" />
<meta name="description" content="The Christmas Countdown projects give two values for the number of days left until Christmas; both numbers are correct but in different circumstances." />
<meta name="og:description" content="The Christmas Countdown projects give two values for the number of days left until Christmas; both numbers are correct but in different circumstances." />
<meta name="twitter:description" content="The Christmas Countdown projects give two values for the number of days left until Christmas; both numbers are correct but in different circumstances." />
</svelte:head>

<div class="max-w-2xl mx-auto">

<div class="m-4 sm:m-8 prose sm:prose-lg">

# Days vs sleeps

<Note title="TL;DR">
**The number of sleeps left is always one more than the number of days** as it is rounded up instead of down.
</Note>

The Christmas Countdown projects give two values for the number of days left until Christmas:

- `days left` - rounded down
- `sleeps left` - rounded up

Both numbers are correct but in different circumstances.

For example, if you are saying "there are _d_ days and _h_ hours left", **the rounded down value (`days`)** would be correct.

However, if you just want the number of days left until Christmas, it makes more sense to **use the value that is rounded up (`sleeps`)**.
This way there will be 1 sleep left on Christmas Eve, instead of saying 0 days.

<Tip>
**The number of sleeps left _is_ the number of days left, but rounded up.**
It is just a different name to avoid confusion between the two numbers.
</Tip>

The [_Christmas Countdown bot for Discord_](/discord)'s countdown feature gives the number of **sleeps** left as the message is sent early in the morning at the start of each day.
Using the rounded down value would ignore what is left of today, which is the majority of the day.

## Technical explanation

The number of days and sleeps left are both calculated by dividing the number of seconds until Christmas by the number of seconds in one day.
This gives a floating point number which is then rounded up or down to give sleeps or days.

### Calculations

Here's an example:

![Code screenshot](/carbon.png)


#### Result
<Box>
<p class="p-6 font-mono text-sm">
Unrounded: <span style='color:tomato;'>{unrounded}</span>
<br>
Rounded up: <span style='color:greenyellow;'>"{sleeps} sleeps"</span>
<br>Rounded down: <span style='color:greenyellow;'>"{days} days"</span>
</p>
</Box>

</div>

</div>
