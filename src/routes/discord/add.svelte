<script context="module">
	const url = 'https://discord.com/api/oauth2/authorize?client_id=509851616216875019&permissions=537150464&scope=bot+applications.commands&response_type=code&redirect_uri=https%3A%2F%2Fchristmascountdown.live%2Fdiscord%2Fenable-the-countdown';
	export const load = () => {
		return {
			status: 302,
			redirect: url
		};
	}
</script>
