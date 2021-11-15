<script>
	export let title;
	import Base from './Base.svelte';
</script>

<Base
	background="bg-pink-400"
	border="border-pink-400"
	icon="fas fa-fire"
	text="text-pink-400"
	title={title || 'Tip'}
>
	<slot />
</Base>
