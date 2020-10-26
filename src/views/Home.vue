<template>
  <div class='content'>
    <Navbar view='Home' />

	<mdb-container fluid>

	</mdb-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';

import {
	mdbContainer
} from 'mdbvue';

export default {
  name: 'Home',
  components: {
	Navbar,
	mdbContainer
  }
};
</script>
