<template>
  <div class='content'>
    <Navbar view='Home' />

	<mdb-container> <!-- fluid -->
		<mdb-row>
			<mdb-col col='sm'>
				<h1 class='noselect'>Christmas Countdown</h1>
			</mdb-col>
		</mdb-row>

		
		<mdb-row>
			<mdb-col col='sm' class='outer-filter hoverable z-depth-5'>
				<div class='inner-filter'>
					<h3>Christmas is in</h3>
					<h2 id='sleeps' class='number'>1</h2> <!--{{ countdown.num.sleeps }} or v-bind:-->
					<h3>sleeps</h3> <!--{{ countdown.text.sleeps }} or v-bind:-->
				</div>
			</mdb-col>
		</mdb-row>

		<mdb-row class='noselect'>
			
				<mdb-col col='md' class='box hoverable z-depth-5 hvr-grow'>
				<mdb-row>
					<mdb-col> <!-- <mdb-col col='9'> -->
						<router-link to='/live'>
							<h2>Live</h2>
							<h4>countdown</h4>
						</router-link>
					</mdb-col>
					<mdb-col>
						<router-link to='/live'>
							<span class='arrow arrow-right align-middle'></span>
						</router-link>
					</mdb-col>
				</mdb-row>
			</mdb-col>
			
			<mdb-col col='md' class='box hoverable z-depth-5 hvr-grow'>
				<mdb-row>
					<mdb-col>
						<router-link to='/total'>
							<h2>Total</h2>
							<h4>time left</h4>
						</router-link>
					</mdb-col>
					<mdb-col>
						<router-link to='/total'>
							<span class='arrow arrow-right align-middle'></span>
						</router-link>
					</mdb-col>
				</mdb-row>
			</mdb-col>

		</mdb-row>

		<mdb-row class='noselect'>	
				<mdb-col col='md' class='box hoverable z-depth-5 hvr-grow' id='discord'>
					<mdb-row>
						<mdb-col>
							<router-link to='/discord'>
								<h2>Discord</h2>
								<h4>bot</h4>
							</router-link>
						</mdb-col>
						<mdb-col>
							<router-link to='/discord'>
								<span class='arrow arrow-right align-middle'></span>
							</router-link>
						</mdb-col>
					</mdb-row>
				</mdb-col>
		</mdb-row>

		<mdb-row class='noselect'>	
				<mdb-col col='md' class='box hoverable z-depth-5 hvr-grow' id='customise'>
					<mdb-row>
						<mdb-col>
							<router-link to='/customise'>
								<h2>Customise</h2>
								<h4>your countdown</h4>
							</router-link>
						</mdb-col>
						<mdb-col>
							<router-link to='/customise'>
								<span class='arrow arrow-right align-middle'></span>
							</router-link>
						</mdb-col>
					</mdb-row>
				</mdb-col>
		</mdb-row>
	</mdb-container>

	<Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

import {
	mdbContainer,
	mdbRow,
	mdbCol,
	// mdbIcon,
} from 'mdbvue';

export default {
  name: 'Home',
  components: {
	Navbar,
	Footer,
	mdbContainer,
	mdbRow,
	mdbCol,
	// mdbIcon,
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
		margin: 0.5rem;
	}

	.box {
		background: rgba(0, 0, 0, 0.8);
		/* padding: 5%; */
		padding: 3%;
		/* border-radius: 15px; */
		margin: 0.7rem;
	}
	
	.sm-box {
		margin: 0.8rem;
		padding: 1rem 1rem;
	}

	.number {
		font-family: 'Pacifico', cursive;
		font-size: 3rem;
		line-height: 3rem;
	}

	.outer-filter {
		position: relative;
		padding: 5%;
		margin: 0.7rem;
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

	#discord {
		/* #7289DA */
		background: rgba(114, 137, 218, 0.8)
	}

	#customise {
		/* #D5002C */
		background: rgba(213, 0, 44, 0.8)
	}

	.arrow {
		display: inline-block;
		width: 20px;
		height: 20px;
		border-top: 3px solid white;
		border-right: 3px solid white;
	}

	.arrow-right {
		transform: rotate(45deg);
		margin: 2rem 0 2rem 75%;
		/* margin: 2rem 0; */
	}

	a, a:hover, a:active, a:visited {
		text-decoration: none;
		color: white;
	}

</style>
