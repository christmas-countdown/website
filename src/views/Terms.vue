<template>
  <div class='content'>
    <Navbar />

	<mdb-container> <!-- fluid -->
		<h1>Terms</h1>
		<p>
			By using any of the Christmas Countdown projects/services, you agree with terms and the privacy policy.
			The countdown may not be correct, but it's probably your fault, not mine.
			
			
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
	name: 'Terms',
	components: {
		Navbar,
		Footer,
		mdbContainer,
	}
};
</script>

<style scoped>
</style>
