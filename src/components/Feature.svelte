<script>
	export let title;
</script>

<div
	class="backdrop-filter backdrop-blur-lg backdrop-saturate-150 bg-black bg-opacity-40 rounded-lg p-6 shadow-xl"
>
	<h3 class="font-bold text-xl mb-2">{title}</h3>
	<div><slot /></div>
</div>
