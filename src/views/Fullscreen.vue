<template>
	<div class='content'>
		<!-- <BackArrow /> -->
		<div is='LiveCountdown' id='fullscreen'></div>
	</div>
</template>

<script>
// @ is an alias to /src
// import BackArrow from '@/components/BackArrow.vue';
import LiveCountdown from '@/components/countdown/LiveCountdown.vue';

export default {
	name: 'Fullscreen',
	components: {
		LiveCountdown,
	},
};
</script>

<style scoped>
	#fullscreen {
		height: 100%;
		margin-top: 15vh;
	}
</style>
