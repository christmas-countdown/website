<script>
	import { setContext } from 'svelte';

	setContext('pages', [
		{
			name: 'Commands',
			url: '/discord/commands'
		},
		{
			name: 'Enable the countdown',
			url: '/discord/enable-the-countdown'
		},
		{
			name: 'Timezones',
			url: '/discord/timezones'
		}
	]);
</script>

<slot />
