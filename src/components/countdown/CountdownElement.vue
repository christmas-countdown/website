<template>
	<mdb-col col='sm' class='numberContainer'>
		<mdb-row>
			<mdb-col class='num'>
				{{ countdown.num[type] }}
			</mdb-col>
		</mdb-row>
		<mdb-row>
			<mdb-col class='text'>
				{{ countdown.text[type] }}
			</mdb-col>
		</mdb-row>
	</mdb-col>
</template>

<script>
	import {
		mdbCol,
		mdbRow,
	} from 'mdbvue';

	export default {
		name: 'CountdownElement',
		props: {
			type: String
		},
		components: {
			mdbCol,
			mdbRow,
		},
		computed: {
			countdown() {
				return this.$store.state.countdown.live;
			}
		},
	}
</script>

<style scoped>
	.numberContainer {
		text-align: center;
	}

	.num {
		font-family: 'Pacifico';
	}
</style>
