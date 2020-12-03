<template>
  <div class='content'>
    <BackArrow />

	<mdb-container> <!-- fluid -->
		Fullscreen
	</mdb-container>

	<Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import BackArrow from '@/components/BackArrow.vue';
import Footer from '@/components/Footer.vue';

import {
	mdbContainer,
	// mdbIcon,
} from 'mdbvue';

export default {
  name: 'Fullscreen',
  components: {
	BackArrow,
	Footer,
	mdbContainer,
  }
};
</script>

<style scoped>
</style>
