<template>
  <div class='content'>

	<mdb-container> <!-- fluid -->
		Live
	</mdb-container>

	<Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';

import {
	mdbContainer,
	// mdbIcon,
} from 'mdbvue';

export default {
  name: 'Live',
  components: {
	Footer,
	mdbContainer,
  }
};
</script>

<style scoped>
</style>
