<template>
	<mdb-col lg='1' class='noselect spacer'>
		0
	</mdb-col>
</template>

<script>
	import {
		mdbCol,
		// mdbRow
	} from 'mdbvue';

	export default {
		name: 'CountdownSpacer',
		components: {
			mdbCol,
			// mdbRow
		}
	}
</script>

<style scoped>
	.spacer {
		text-align: center;
		vertical-align: middle;
		margin-top: 3rem;
	}
</style>
