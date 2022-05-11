<script>
	export let active;

	import Box from './Box.svelte';

	let open = false;
	const toggle = () => (open = !open);
	const pages = [
		{
			name: 'Home',
			url: '/'
		},
		{
			name: 'Discord bot',
			url: '/discord'
		},
		{
			name: 'Fullscreen countdown',
			url: '/fullscreen'
		},
		{
			name: 'Jokes',
			url: '/jokes'
		}
	];
</script>

<Box>
	<nav class="mb-5">
		<div class="max-w-6xl mx-auto px-4">
			<div class="flex justify-between">
				<div class="flex space-x-7">
					<div>
						<a href="/" class="flex items-center py-4 px-2">
							<img
								src="https://img.eartharoid.me/insecure/rs:auto:256/plain/s3://eartharoid/christmas-countdown/logo/tr/santa.png@png"
								alt="Christmas Countdown"
								class="h-8 w-8 mr-2"
							/>
						</a>
					</div>
					<!-- left -->
					<div class="hidden md:flex items-center space-x-1">
						{#each pages as page (page.name)}
							{#if page.url === active}
								<a
									href={page.url}
									class="py-4 px-2 text-primary border-b-4 border-primary font-semibold rounded-sm"
									title={page.name}>{page.name}</a
								>
							{:else}
								<a
									href={page.url}
									class="py-4 px-2 text-gray-400 border-b-4 font-semibold hover:text-primary transition duration-300 border-transparent"
									title={page.name}>{page.name}</a
								>
							{/if}
						{/each}
					</div>
				</div>
				<!-- right -->
				<div class="hidden md:flex items-center space-x-3 ">
					<a
						href="https://lnk.earth/discord"
						class="py-2 px-2 font-medium text-gray-400 rounded hover:bg-primary hover:text-white transition duration-300"
						title="Discord"><i class="fab fa-discord" /></a
					>
				</div>
				<!-- mobile toggle -->
				<div class="md:hidden flex items-center">
					<button
						class="text-gray-400 hover:text-primary w-10 h-10 relative focus:outline-none"
						aria-expanded={open}
						on:click={toggle}
					>
						<span class="sr-only">Open navigation menu</span>
						<div
							class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2"
						>
							<span
								aria-hidden="true"
								class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out {open
									? 'rotate-45'
									: '-translate-y-1.5'}"
							/>
							<span
								aria-hidden="true"
								class="block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out {open
									? 'opacity-0'
									: ''}"
							/>
							<span
								aria-hidden="true"
								class="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out {open
									? '-rotate-45'
									: 'translate-y-1.5'}"
							/>
						</div>
					</button>
				</div>
			</div>
		</div>
		<!-- mobile -->
		{#if open}
			<div class="mobile-menu">
				<ul class="">
					{#each pages as page (page.name)}
						{#if page.url === active}
							<li class="active">
								<a
									href={page.url}
									class="block text-sm p-4 text-white bg-primary font-semibold rounded-lg"
									title={page.name}>{page.name}</a
								>
							</li>
						{:else}
							<li>
								<a
									href={page.url}
									class="block text-sm p-4 hover:bg-primary transition duration-300 rounded-lg"
									title={page.name}>{page.name}</a
								>
							</li>
						{/if}
					{/each}
				</ul>
			</div>
		{/if}
	</nav>
</Box>
