<template>
  <div class='content'>
    <Navbar />

	<mdb-container> <!-- fluid -->
		<div id='title'>
			<div class='noselect'>
				<h4>The original</h4>
				<h1>Christmas Countdown</h1>
				<h3>bot for Discord</h3>
			</div>

			<br /><br />

			<div>
				<!-- <h2>Features</h2> -->
				<p>
					Get the number of sleeps left until Christmas sent to a selected channel every morning - in <b>your language</b> and <b>your timezone</b>.
					<!-- The Christmas Countdown bot for Discord has some cool features... -->
					<br />
					Go to the <a href='https://docs.christmascountdown.live/discord/settings/server/'>docs</a> to find out how to set up the bot using <code>x!server setup</code> after adding it.
				</p>
			
				<br />

				<p>
					<a href='/invite'>
						<mdb-btn style='background-color:#7289DA;color:white;'>Add to Discord</mdb-btn> <!-- color='primary' -->
					</a>
				</p>
			</div>
		</div>

		<mdb-row>
			<mdb-col lg='8' class='box z-depth-5 left'>
				<mdb-row>
					<mdb-col>
						<div class='header'>
							<h6>Server and user</h6>
							<h4>timezones</h4>
						</div>
						<p>
							Make the commands more accurate by setting your user timezone. This will be used when you use a Christmas command on any server.
						</p>
						<p>
							The server's timezone is used for the automatic countdown in the morning, and will be used as the default when a user who has not set a personal timezone uses a command.
						</p>
					</mdb-col>
				</mdb-row>
			</mdb-col>
		</mdb-row>

		<mdb-row>
			<mdb-col lg='4'>
			</mdb-col>
			<mdb-col class='box z-depth-5 right'>
				<mdb-row>
					<mdb-col>
						<div class='header'>
							<h6>Server and user</h6>
							<h4>locales</h4>
						</div>
						<p>
							Similarly to the timezones, users can set their own language, and administrators can set the server's default.
						</p>
						<p>
							If the bot hasn't been translated to your language yet, you can contribute on <a href='https://github.com/eartharoid/ChristmasCountdownBot'>GitHub</a>.
						</p>
					</mdb-col>
				</mdb-row>
			</mdb-col>
		</mdb-row>

		<mdb-row>
			<mdb-col lg='8' class='box z-depth-5 left'>
				<mdb-row>
					<mdb-col>
					<div class='header'>
						<h6>Time left to Christmas in</h6>
						<h4>sleeps? days? hours?</h4>
					</div>
						<p>
							Get the number of weeks, sleeps, days, hours, minutes, seconds, or the total time left until Christmas.
						</p>
					</mdb-col>
				</mdb-row>
			</mdb-col>
		</mdb-row>
		
		<mdb-row>
			<mdb-col lg='4'>
				
			</mdb-col>
			<mdb-col class='box z-depth-5 right'>
				<mdb-row>
					<mdb-col>
						<div class='header'>
							<h6>Logical</h6>
							<h4>commands</h4>
						</div>
						<p>
							The bot is easy to use and has a useful help command, with many links to the <a href='https://docs.christmascountdown.live'>documentation</a> where everything is explained in more detail.
						</p>
					</mdb-col>
				</mdb-row>
			</mdb-col>
		</mdb-row>
	</mdb-container>

	<mdb-container>
		<mdb-row>
			<mdb-col col='md'>
				<img src='https://i.imgur.com/hfF9C3k.png' class='rounded img-fluid zoom' />
			</mdb-col>
			<mdb-col col='md'>
				<img src='https://i.imgur.com/oIXzBfV.png' class='rounded img-fluid zoom' />
			</mdb-col>
		</mdb-row>

		<mdb-row>
			<mdb-col col='md'>
				<img src='https://i.imgur.com/TK9SW2u.png' class='rounded img-fluid zoom' />
			</mdb-col>
			<mdb-col col='md'>
				<img src='https://i.imgur.com/CVDy45B.png' class='rounded img-fluid zoom' />
			</mdb-col>
		</mdb-row>

		<div id='title' style='margin-top:3rem;'>
			<!-- <p>
				The default prefix is <code>x!</code>, but it can be changed, and the bot also responds to being mentioned.
			</p> -->
			<br /> <br />
			<p>
				Why haven't you added it yet?
			</p>
			<a href='/invite'>
				<mdb-btn style='background-color:#7289DA;color:white;'>Add to Discord</mdb-btn> <!-- color='primary' -->
			</a>
		</div>
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
		margin: 1rem 0 2rem 0;
		box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.8);
	}

	.header {
		margin-bottom: 2rem;
	}

	.left {
		text-align: left;
	}

	.right {
		text-align: right;
		float: right;
	}

	.img-fluid {
		box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.8);
		margin-top: 2rem;
	}

</style>
