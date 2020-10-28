<template>
	<mdb-col col='sm' class='numberContainer'>
		<mdb-row>
			<mdb-col class='num'>
				0
			</mdb-col>
		</mdb-row>
		<mdb-row>
			<mdb-col class='text'>
				{{ text }}
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
			text: String
		},
		components: {
			mdbCol,
			mdbRow,
		}
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
