<template>
  <div class='content'>
    <Navbar view='Terms' />

	<mdb-container> <!-- fluid -->
		Terms
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
