<script>
	export let prefix;
	import { setContext } from 'svelte';

	setContext('prefix', prefix);
</script>

<slot />
