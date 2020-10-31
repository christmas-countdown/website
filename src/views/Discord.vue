<template>
  <div class='content'>
    <Navbar />

	<mdb-container> <!-- fluid -->
		<div id='title'>
			<div>
				<h4>The original</h4>
				<h1>Christmas Countdown</h1>
				<h3>bot for Discord</h3>
			</div>

			<br /><br />

			<div>
				<!-- <h2>Features</h2> -->
				<p>
					Get the number of sleeps left until Christmas sent to a selected channel every morning - in <span class='hl'>your language</span> and <span class='hl'>your timezone</span>.
					<!-- The Christmas Countdown bot for Discord has some cool features... -->
				</p>
			
				<a href='/invite'>
					<mdb-btn style='background-color:#7289DA;color:white;'>Add to Discord</mdb-btn> <!-- color='primary' -->
				</a>

			</div>
		</div>

		<mdb-row>
			<mdb-col lg='7' class='box z-depth-5 hvr-grow left'>
				<mdb-row>
					<mdb-col>
						<h6>Server and user</h6>
						<h4>timezones</h4>
					</mdb-col>
				</mdb-row>
			</mdb-col>
		</mdb-row>

		<mdb-row>
			<mdb-col lg='5'>
			</mdb-col>
			<mdb-col class='box z-depth-5 hvr-grow right'>
				<mdb-row>
					<mdb-col>
						<h6>Server and user</h6>
						<h4>locales</h4>
					</mdb-col>
				</mdb-row>
			</mdb-col>
		</mdb-row>

		<mdb-row>
			<mdb-col lg='7' class='box z-depth-5 hvr-grow left'>
				<mdb-row>
					<mdb-col>
						<h6>Time left to Christmas in</h6>
						<h4>sleeps? days? hours?</h4>
					</mdb-col>
				</mdb-row>
			</mdb-col>
		</mdb-row>
		
		<mdb-row>
			<mdb-col lg='5'>
			</mdb-col>
			<mdb-col class='box z-depth-5 hvr-grow right'>
				<mdb-row>
					<mdb-col>
						<h4>Logical</h4>
						<h6>commands</h6>
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
	mdbBtn,
	mdbContainer,
	mdbCol,
	mdbRow,
} from 'mdbvue';

export default {
  name: 'Discord',
  components: {
	Navbar,
	Footer,
	mdbBtn,
	mdbContainer,
	mdbCol,
	mdbRow,
  }
};
</script>

<style scoped>
	.content {
		text-shadow: 5px 5px 10px black;
	}

	#title {
		text-align: center;
		margin-bottom: 2rem;
	}

	h1 {
		font-family: 'MerryChristmas';
		font-size: 5rem;
	}

	h2, h3, h4, h5, h6 {
		text-transform: uppercase;	
	}

	.box {
		background: rgba(0, 0, 0, 0.8);
		/* padding: 5%; */
		padding: 3%;
		/* border-radius: 15px; */
		margin: 0.7rem;
		box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.8);
	}

	.left {
		text-align: left;
	}

	.right {
		text-align: right;
		float: right;
	}

</style>
