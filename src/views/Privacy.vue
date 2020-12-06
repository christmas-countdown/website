<template>
  <div class='content'>
    <Navbar />

	<mdb-container> <!-- fluid -->
		<h1>Privacy</h1>
		<p>
			Yes.
		</p>
		<p>

			By using this website you agree to allow me to collect and store lots of data about you and your computer, like your favourite ice cream flavour, and if you like chocolate.
			This data may be sold to evil corporations and used to manipulate you, create a clone of you, or to determine the best way to make you voluntarily give your money to them.
			If someone who looks suspiciously similar to you knocks on your door, don't be scared, they're <i>probably</i> not there to kill you, just to extract information and take your money.
		</p>

		<br />

		<h2>The real one</h2>
		<p>
			The words "we", "me", "my", and "I" refer to the creator, eartharoid. By using any of the Christmas Countdown services provided, you acknowledge and accept this privacy policy. 
		</p>
		<h4>Website (and documentation)</h4>
		<p>
			This website uses cookies to store your preferences (such as options for the snow effect) and for anonymous analytics. This web does <b><u>NOT</u></b> use Google Analytics and does not assist companies such as Google or Facebook with tracking you accross the Internet.
			The data collected is purely for my own interest and to improve the website. Countly is used for collecting and storing this analytical data. Data collection used on the Christmas Countdown website and documentation site is privacy-friendly.
			<br />
			If you do not agree with the cookie usage or data collection of this website, please stop using it.
		</p>
		<h4>Discord bot</h4>
		<p>
			Basic analytical data is collected when you use the Christmas Countdown Discord bot. No personal or identifiable data is stored, only generalised usage information. Countly is used for collecting and storing this analytical data.
		</p>
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
	// mdbIcon,
} from 'mdbvue';

export default {
	name: 'Privacy',
	components: {
		Navbar,
		Footer,
		mdbContainer,
	}
};
</script>

<style scoped>
</style>
