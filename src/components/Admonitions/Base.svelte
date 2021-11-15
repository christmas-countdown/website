<script>
	export let background;
	export let border;
	export let icon;
	export let text;
	export let title;
</script>

<div class="{background} bg-opacity-10 backdrop-filter backdrop-blur-lg backdrop-saturate-150 {border} border-0 border-l-4 p-6 rounded-lg my-2 max-w-prose">
	<span class="{text} font-semibold text-lg"><i class={icon}></i> {title}</span>
	<div>
		<slot />
	</div>
</div>
