<script>
	export let name;
	export let description;
	import { getContext } from 'svelte';
	import { open } from './stores';

	let id = name.replace(/\s/g, '-');
	let prefix = getContext('prefix');
	const toggle = () => ($open === id ? open.set(null) : open.set(id));
</script>

<div
	id={prefix + id}
	class="backdrop-filter backdrop-blur-lg backdrop-saturate-150 bg-primary bg-opacity-20 rounded-lg p-2 px-4 shadow-xl border-primary border-opacity-40 border-2 hover:border-opacity-60 m-2"
>
	<div on:click={toggle} class="cursor-pointer">
		<!-- <a href="#{prefix + id}" class="flex w-full">
			<span class="font-mono text-primary font-semibold hover:underline">{name}</span>
		</a> -->
		<span class="flex w-full font-mono text-primary font-semibold hover:underline">{name}</span>
		<span class="block text-gray-400 font-semibold">{description || ''}</span>
	</div>
	<div class={$open === id ? '' : 'hidden'}>
		<slot />
	</div>
</div>
