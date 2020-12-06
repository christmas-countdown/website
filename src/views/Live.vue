<template>
	<div class='content'>
		<!-- <BackArrow /> -->
		<Navbar />
		<mdb-container class='noselect countdown'>
			<!-- <h1>Christmas is in</h1> -->
			<mdb-row>
				<CountdownElement
					v-for='i in this.$root.$data.countdown.live'
					v-bind:key='i.text'
					v-bind:num='i.num'
					v-bind:text='i.text'
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
		height: 100%;
		margin-top: 5vh;
	}

	h1 {
		font-size: 5rem;
		text-align: center;
		margin: 7.5vh;
	}

</style>
