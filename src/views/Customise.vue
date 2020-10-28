<template>
  <div class='content'>
    <Navbar view='Customise' />

	<mdb-container> <!-- fluid -->
		Customise
		<h2>Snow</h2>
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
  name: 'Customise',
  components: {
	Navbar,
	Footer,
	mdbContainer,
  }
};
</script>

<style scoped>
</style>
