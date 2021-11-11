<script context="module">
	const url = 'https://discord.com/oauth2/authorize?client_id=509851616216875019&permissions=537149440&scope=applications.commands bot';
	export const load = () => {
		return {
			status: 302,
			redirect: url
		};
	}
</script>
