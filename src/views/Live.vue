<template>
	<div class='content'>
		<!-- <BackArrow /> -->
		<Navbar view='Live' />
		<mdb-container>
			<h1>Christmas is in</h1>
			<mdb-row class='noselect countdown'>
				<!-- <mdb-col col='sm'> -->
					<CountdownElement text='days' />
					<!-- <CountdownSpacer /> -->
					<CountdownElement text='hours' />
				<!-- </mdb-col> -->

				<!-- <mdb-col col='sm'> -->
					<!-- <CountdownSpacer /> -->
				<!-- </mdb-col> -->

				<!-- <mdb-col col='sm'> -->
					<CountdownElement text='minutes' />
					<!-- <CountdownSpacer /> -->
					<CountdownElement text='seconds' />
				<!-- </mdb-col> -->

			</mdb-row>
		</mdb-container>
		<Footer />
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
	}
};
</script>

<style scoped>

	.countdown {
		font-family: 'MerryChristmas';
		font-size: 5rem;
		text-shadow: 3px 3px 10px black;
	}

	h1 {
		font-family: 'MerryChristmas';
		font-size: 5rem;
		text-shadow: 3px 3px 10px black;
		text-align: center;
		margin: 0.5rem;
	}

</style>
