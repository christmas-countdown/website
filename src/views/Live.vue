<template>
	<div class='content'>
		<!-- <BackArrow /> -->
		<Navbar />
		<mdb-container class='noselect countdown'>
			<!-- <h1>Christmas is in</h1> -->
			<mdb-row>
				<CountdownElement
					v-for='type in this.$store.state.countdown.live.text'
					v-bind:key='type'
					v-bind:type='type'
				/>
			</mdb-row>
			<h1>until Christmas!</h1>
		</mdb-container>
		<Footer class='footer' />
	</div>
</template>

<script>
// @ is an alias to /src
// import BackArrow from '@/components/BackArrow.vue';
import CountdownElement from '@/components/countdown/CountdownElement.vue';
// import CountdownSpacer from '@/components/countdown/CountdownSpacer.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

import {
	mdbContainer,
	// mdbCol,
	mdbRow,
} from 'mdbvue';

export default {
	name: 'Live',
	components: {
		Navbar,
		CountdownElement,
		// CountdownSpacer,
		Footer,
		mdbContainer,
		// mdbCol,
		mdbRow,
	},
};
</script>

<style scoped>

	.countdown {
		font-family: 'MerryChristmas';
		font-size: 5rem;
		text-shadow: 3px 3px 10px black;
		margin-top: 7vh;
	}

	h1 {
		font-family: 'MerryChristmas';
		font-size: 5rem;
		text-shadow: 3px 3px 10px black;
		text-align: center;
		margin: 0.5rem;
	}

</style>
