<template>
	<mdb-col col='sm' class='numberContainer'>
		<mdb-row>
			<mdb-col class='num'>
				<!-- {{ countdown[type].num }} -->
				{{ num }}
			</mdb-col>
		</mdb-row>
		<mdb-row>
			<mdb-col class='text'>
				<!-- {{ countdown[type].text }} -->
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
		num: Number,
		text: String,
	},
	components: {
		mdbCol,
		mdbRow,
	},
	computed: {
		countdown() {
			return this.$root.$data.countdown.live;
		}
	},
};
</script>

<style scoped>
	.numberContainer {
		text-align: center;
	}

	.num {
		font-family: 'Pacifico';
	}
</style>
