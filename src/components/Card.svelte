<script>
	export let background;
	export let border;
</script>

<div class="backdrop-filter backdrop-blur-lg backdrop-saturate-150 {background} bg-opacity-40 {border} border-2 rounded-lg p-2 shadow-xl w-full h-full">
	<slot />
</div>