<template>
  <div class='content'>
    <Navbar />

	<mdb-container> <!-- fluid -->
		<h1>About</h1>
		This started as a single web page with smashed together code because I (eartharoid) wanted something pretty to put on my 7" Rapsberry Pi touchscreen. The Christmas Countdown website now has thousands of visitors and the bot has been added to over 6000 servers.
		<h2>History</h2>
		<h3>2017</h3>
		<p>
			The CountdownToXMAS (countdowntoxmas.tk) website was released. It featured copy-and-pasted jQuery code and it sucked, but looked nice.
		</p>
		<h3>2018</h3>
		<p>
			The orginal Christmas Countdown Discord bot was released in November with the Santa hat icon. It was a single JavaScript file. The website got a couple of new pages, which were white text on a dark blue background.
		</p>
		<h3>2019</h3>
		<p>
			Version 2 of the Discord bot was released, with not many new features, but "better" code. Version 2 of the website was developed but never released. The bot and website got a new Santa logo, and the website was renamed to Christmas Countdown (christmascountdown.live).
		</p>
		<h3>2020</h3>
		<p>
			In the first week of September development started on v3 of the Discord bot, which was released on October 24th. The bot was completely rewritten and had new features, including translations and much needed timezone support for users and servers. Work on the new website started the day after the bot was released.
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
	name: 'About',
	components: {
		Navbar,
		Footer,
		mdbContainer,
	}
};
</script>

<style scoped>
</style>
