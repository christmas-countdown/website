<template>
  <div class='content'>
    <Navbar />

	<mdb-container> <!-- fluid -->

		<mdb-row>
			<TotalNumber 
				v-for='i in this.$root.$data.countdown.total'
					v-bind:key='i.text'
					v-bind:num='i.num'
					v-bind:text='i.text'
			/>	
		</mdb-row>

	</mdb-container>

	<Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import TotalNumber from '@/components/countdown/TotalNumber.vue';

import {
	mdbContainer,
	mdbRow,
} from 'mdbvue';

export default {
	name: 'Total',
	components: {
		Navbar,
		Footer,
		mdbContainer,
		mdbRow,
		TotalNumber,
	},
};
</script>

<style scoped>

</style>
