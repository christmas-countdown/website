<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				error,
				status
			}
		};
	}
</script>

<script>
	export let error;
	export let status;
</script>

<svelte:head>
	<title>Error {status}</title>
</svelte:head>

<div class="text-center mt-20 pt-20">
	<h1 class="text-5xl font-bold">Error {status}</h1>
	<h2 class="text-3xl font-semibold">{error.message}</h2>
	<!-- <p>{error.stack}</p> -->
</div>
