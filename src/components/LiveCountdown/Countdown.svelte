<script>
	export let days;
	export let hours;
	export let minutes;
	export let seconds;

	import Item from './Item.svelte';
</script>

<div>
	<p class="font-christmas text-5xl mb-10">There {days === 1 ? 'is' : 'are'} only</p>
	<div class="grid grid-cols-2 sm:grid-cols-4 gap-12 sm:gap-1">
		<Item name="days" value={Math.floor(days)} />
		<Item name="hours" value={Math.floor(hours)} />
		<Item name="minutes" value={Math.floor(minutes)} />
		<Item name="seconds" value={Math.floor(seconds)} />
	</div>
	<p class="font-christmas text-5xl mt-10">until Christmas!</p>
</div>
