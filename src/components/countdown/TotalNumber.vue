<template>
	<mdb-col col='md' class='numberContainer box z-depth-5' :id='text'>
		<mdb-col class='num'>
			{{ num }}
		</mdb-col>
		<mdb-col class='text'>
			{{ text }}
		</mdb-col>
	</mdb-col>
</template>

<script>
import {
	mdbCol,
} from 'mdbvue';

export default {
	name: 'CountdownElement',
	props: {
		num: Number,
		text: String
	},
	components: {
		mdbCol,
	},
};
</script>

<style scoped>
	.numberContainer {
		text-align: center;
		font-size: 2rem;
	}

	.num {
		font-family: 'Pacifico', cursive;
		font-size: 3rem;
		line-height: 3rem;
	}
	.box {
		background: rgba(0, 0, 0, 0.8);
		/* padding: 5%; */
		padding: 3%;
		/* border-radius: 15px; */
		margin: 0.7rem;
		box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.8);
	}

</style>
