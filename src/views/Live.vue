<template>
	<div class='content'>
		<!-- <BackArrow /> -->
		<Navbar />
		
		<router-link to='/fullscreen' class='col' title='Open fullscreen countdown'>
			<i class='fas fa-expand'></i>
			<!-- <span class='space'>Fullscreen</span> -->
		</router-link>

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
	.col {
		padding: 1rem 2rem;
	}

	.space {
		padding-left: 0.3rem;
	}
</style>
