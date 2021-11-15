<script>
	export let title;
	import Base from './Base.svelte';
</script>

<Base
	background="bg-blue-400"
	border="border-blue-400"
	icon="fas fa-info-circle"
	text="text-blue-400"
	title={title || 'Information'}
>
	<slot />
</Base>
