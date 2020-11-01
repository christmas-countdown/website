<template>
  <div class='content'>
    <Navbar />

	<mdb-container> <!-- fluid -->
		<h1 class='noselect'>Donate</h1>
		<p>
			Donators can enable premium features on their Discord servers. Please contact me on <a href='https://go.eartharoid.me/discord'>Discord</a> before donating and tell me which servers you want to enable premium on. Then donate on <a href='https://ko-fi.com/eartharoid'>Ko-fi</a>.
		</p>
		<a href='https://go.eartharoid.me/xmas-premium'>
					<mdb-btn color='warning'>Donate</mdb-btn> <!-- color='primary' -->
		</a>
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
	// mdbIcon,
} from 'mdbvue';

export default {
  name: 'Donate',
  components: {
	Navbar,
	Footer,
	mdbBtn,
	mdbContainer,
  }
};
</script>

<style scoped>
	.content {
		text-shadow: 5px 5px 10px black;
		text-align: center;
	}

	h1 {
		font-family: 'MerryChristmas';
		font-size: 5rem;
		margin-bottom: 2rem;
	}
</style>
