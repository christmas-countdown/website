<script>
	import Box from '../Box.svelte';
</script>

<div class="flex md:contents">
	<div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
		<div class="h-full w-6 flex items-center justify-center">
			<div class="h-full w-1 bg-primary-dark pointer-events-none" />
		</div>
		<div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow" />
	</div>
	<div class="col-start-6 col-end-10 my-4 mr-auto">
		<Box>
			<div class="p-6">
				<slot />
			</div>
		</Box>
	</div>
</div>
