<script>
	export let title;
	import Base from './Base.svelte';
</script>

<Base
	background="bg-green-400"
	border="border-green-400"
	icon="fas fa-question-circle"
	text="text-green-400"
	title={title || 'Question'}
>
	<slot />
</Base>
