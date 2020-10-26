<template>
  <div class='content'>
    <Navbar view='Home' />

	<mdb-container> <!-- fluid -->
		<mdb-row class='row'>
			<mdb-col col='sm'>
				<h1>Christmas Countdown</h1>
			</mdb-col>
		</mdb-row>

		<mdb-row class='row'>
			<mdb-col col='sm' class='box'>
				<h3>Christmas is in</h3>
				<h4 id='sleeps' class='number'>60</h4> <!--{{ sleeps }} or v-bind:-->
				<h3>sleeps</h3>
			</mdb-col>
		</mdb-row>

		<mdb-row class='row'>
			<mdb-col sm='8' class='box'>
				Live
			</mdb-col>

			<mdb-col sm='4' class='box'>
				Total
			</mdb-col>
		</mdb-row>

	</mdb-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';

import {
	mdbContainer,
	mdbRow,
    mdbCol
} from 'mdbvue';

export default {
  name: 'Home',
  components: {
	Navbar,
	mdbContainer,
	mdbRow,
    mdbCol
  }
};
</script>

<style scoped>

	h1 {
		font-family: 'MerryChristmas';
		font-size: 5rem;
		text-shadow: 3px 3px 3px black;
		/* margin: 1rem; */
	}

	.box {
		background: rgba(0, 0, 0, 0.8);
		padding: 5%;
		border-radius: 15px;
	}

	.number {
		font-family: 'Pacifico', cursive;
	}
</style>
