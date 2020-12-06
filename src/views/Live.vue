<template>
	<div class='content'>
		<!-- <BackArrow /> -->
		<Navbar />
		
		<LiveCountdown />

		<Footer class='footer' />
	</div>
</template>

<script>
// @ is an alias to /src
// import BackArrow from '@/components/BackArrow.vue';
import LiveCountdown from '@/components/countdown/LiveCountdown.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

export default {
	name: 'Live',
	components: {
		Navbar,
		Footer,
		LiveCountdown,
	},
};
</script>

<style scoped>
</style>
