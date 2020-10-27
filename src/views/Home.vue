<template>
  <div class='content'>
    <Navbar view='Home' />

	<mdb-container> <!-- fluid -->
		<mdb-row>
			<mdb-col col='sm'>
				<h1>Christmas Countdown</h1>
			</mdb-col>
		</mdb-row>

		<!--{{ sleeps }} or v-bind:-->
		<mdb-row>
			<mdb-col col='sm' class='outer-filter hoverable z-depth-3'>
				<div class='inner-filter'>
					<h3>Christmas is in</h3>
					<h2 id='sleeps' class='number'>59</h2> 
					<h3>sleeps</h3>
				</div>
			</mdb-col>
		</mdb-row>

		<mdb-row>
			<mdb-col col='md' class='box hoverable z-depth-3'>
				<div>
					<h2>Live</h2>
					<h4>countdown</h4>
				</div>
			</mdb-col>
			<mdb-col col='md' class='box hoverable z-depth-3'>
				<div>
					<h2>Total</h2>
					<h4>time left</h4>
				</div>
			</mdb-col>
		</mdb-row>

		<mdb-row>
			<mdb-col col='md' class='sm-box hoverable z-depth-3 py-3 px-md-5 bordered' id='discord'>
				<div>
					<h2>Discord</h2>
					<h4>bot</h4>
				</div>
			</mdb-col>
		</mdb-row>

		<mdb-row>
			<mdb-col col='md' class='sm-box hoverable z-depth-3 py-3 px-md-5 bordered' id='customise'>
				<div>
					<h2>Customise</h2>
					<h4>your countdown</h4>
				</div>
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
	mdbCol,
} from 'mdbvue';

export default {
  name: 'Home',
  components: {
	Navbar,
	mdbContainer,
	mdbRow,
	mdbCol,
  }
};
</script>

<style scoped>

	h1 {
		font-family: 'MerryChristmas';
		font-size: 5rem;
		text-shadow: 3px 3px 3px black;
		/* margin: 1rem; */
		text-align: center;
	}

	.box {
		background: rgba(0, 0, 0, 0.8);
		padding: 5%;
		/* border-radius: 15px; */
		margin: 1rem;
	}

	.number {
		font-family: 'Pacifico', cursive;
	}

	.outer-filter {
		position: relative;
		padding: 5%;
		margin: 1rem;
	}
	.outer-filter::before {
		content: '';
		position: absolute;
		top: 0; left: 0;
		width: 100%; height: 100%;
		background-image: url('/assets/img/bg/legacy.jpg');
		background-position: 50%;
		background-size: cover;
		filter: /* blur(1px) */ brightness(50%);
		-moz-filter: /* blur(1px) */ brightness(50%);
		-webkit-filter: /* blur(1px) */ brightness(50%);
		-o-filter: /* blur(1px) */ brightness(50%);
		/* opacity: 0.9; */
	}
	.inner-filter {
		position: relative;
		text-align: center;
	}

	.sm-box {
		margin: 1rem;
		padding: 1rem 1rem;
	}

	#discord {
		/* #7289DA */
		background: rgba(114, 137, 218, 0.7)
	}

	#customise {
		/* #D5002C */
		background: rgba(213, 0, 44, 0.7)
	}
</style>
