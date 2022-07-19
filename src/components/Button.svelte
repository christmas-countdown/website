<script>
	export let colour;
	export let icon;
	export let text;
</script>

<button
	class="p-3 {colour} font-semibold rounded-lg transform hover:scale-105 hover:underline duration-300 m-2"
	title={text}
>
	{#if icon}
		<i class="{icon}" />
	{/if}
	{text}
</button>
