<script>
	export let name;
	export let value;
</script>

<div class="grid grid-cols-1 gap-4">
	<p class="font-number text-5xl">{value}</p>
	<p class="font-christmas text-5xl">{value === 1 ? name.slice(0, -1) : name}</p>
</div>