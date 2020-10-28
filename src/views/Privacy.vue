<template>
  <div class='content'>
    <Navbar view='Privacy' />

	<mdb-container> <!-- fluid -->
		<h1>Privacy</h1>
		<p>
			Yes.
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
