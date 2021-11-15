<script>
	export let title;
	import Base from './Base.svelte';
</script>

<Base
	background="bg-yellow-400"
	border="border-yellow-400"
	icon="fas fa-exclamation-triangle"
	text="text-yellow-400"
	title={title || 'Warning'}
>
	<slot />
</Base>
