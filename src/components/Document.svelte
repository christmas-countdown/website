<script>
	export let active;
	export let pages;
	let open = false;
	const toggle = () => (open = !open);
</script>

<div class="grid grid-cols-1 sm:grid-cols-4">
	<div>
		<div
			class="backdrop-filter backdrop-blur-lg backdrop-saturate-150 bg-black bg-opacity-40 rounded-lg shadow-xl"
		>
			<nav>
				<div class="hidden md:flex md:flex-col p-4">
					<a
						href="/discord"
						class="px-2 my-1 text-gray-400 hover:text-primary transition duration-300 border-transparent text-center"
						title="Discord bot"
					>
						<i class="fas fa-arrow-left" />
						Back
					</a>
					{#each pages as page (page.name)}
						{#if page.url === active}
							<a
								href={page.url}
								class="p-2 my-1 text-white bg-primary font-semibold rounded-lg"
								title={page.name}>{page.name}</a
							>
						{:else}
							<a
								href={page.url}
								class="px-2 my-1 text-gray-400 font-semibold hover:text-primary transition duration-300 border-transparent"
								title={page.name}>{page.name}</a
							>
						{/if}
					{/each}
					<hr class="mx-4 my-2 border-gray-700" />
					<a
						href="https://lnk.earth/discord"
						class="px-2 my-1 font-semibold text-green-400 hover:text-primary transition duration-300 border-transparent text-center"
						title="Discord"
					>
						<i class="fas fa-circle-question" />
						Help
					</a>
				</div>
				<!-- mobile toggle -->
				<div class="md:hidden text-center">
					<button class="text-gray-400 hover:text-primary" aria-expanded={open} on:click={toggle}>
						<p class="p-4 text-gray-400 font-bold">Pages in this section</p>
					</button>
				</div>
				<!-- mobile -->
				{#if open}
					<div class="mobile-menu">
						<ul>
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
		</div>
	</div>
	<div class="sm:col-span-3 m-4 sm:m-8 prose sm:prose-lg">
		<slot />
	</div>
</div>
