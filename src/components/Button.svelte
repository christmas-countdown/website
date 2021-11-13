<script>
	export let colour;
	export let text;
</script>

<button
	class="p-3 {colour} font-semibold rounded-lg transform hover:scale-105 hover:underline duration-300 shadow-xl hover:shadow-2xl"
	>{@html text}</button
>
