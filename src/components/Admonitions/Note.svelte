<script>
	export let title;
	import Base from './Base.svelte';
</script>

<Base
	background="bg-white"
	border="border-white"
	icon="fas fa-info-circle"
	text="text-white"
	title={title || 'Note'}
>
	<slot />
</Base>
