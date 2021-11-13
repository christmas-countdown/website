<script>
	export let name;
	export let value;

	let formatter = new Intl.NumberFormat('en-GB');
</script>

<div class="grid grid-cols-1 gap-2">
	<p class="font-number text-5xl">{formatter.format(value)}</p>
	<p class="font-christmas text-5xl">{value === 1 ? name.slice(0, -1) : name}</p>
</div>