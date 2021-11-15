<script>
	export let title;
	import Base from './Base.svelte';
</script>

<Base
	background="bg-red-600"
	border="border-red-600"
	icon="fas fa-exclamation-triangle"
	text="text-red-600"
	title={title || 'Danger'}
>
	<slot />
</Base>
