<script>
	export let title;

	import Box from './Box.svelte';
</script>

<Box>
	<div class="p-6">
		<h3 class="font-bold text-xl mb-2">{@html title}</h3>
		<div><slot /></div>
	</div>
</Box>
