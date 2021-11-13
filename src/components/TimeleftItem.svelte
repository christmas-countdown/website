<script>
	export let name;
	export let value;

	let formatter = new Intl.NumberFormat('en-GB');
</script>

<div class="grid grid-cols-1 gap-0">
	<p class="font-number text-3xl">{formatter.format(value)}</p>
	<p class="text-xl">{value === 1 ? name.slice(0, -1) : name}</p>
</div>