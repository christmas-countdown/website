<template>
	<!-- <mdb-container class='noselect countdown'> -->
	<mdb-container class='countdown'>
		<!-- <h1>Christmas is in</h1> -->
		<template v-if='isToday'>
			<mdb-row>
				<mdb-col>
					<h1 id='merryxmas'>Merry Christmas!</h1>
				</mdb-col>
			</mdb-row>
		</template>
		<template v-else>
			<mdb-row>
				<CountdownElement
					v-for='i in this.$root.$data.countdown.live'
					v-bind:key='i.text'
					v-bind:num='i.num'
					v-bind:text='i.text'
				/>
			</mdb-row>
				<h1 id='until'>until Christmas!</h1>
		</template>
	</mdb-container>
</template>

<script>
import CountdownElement from '@/components/countdown/CountdownElement.vue';
import {
	mdbRow,
	mdbCol,
	mdbContainer,
} from 'mdbvue';

export default {
	name: 'LiveCountdown',
	components: {
		CountdownElement,
		mdbRow,
		mdbCol,
		mdbContainer,
	},
	computed: {
		isToday() {
			return this.$root.$data.christmas.isToday;
		}
	},
};
</script>

<style scoped>
	.countdown {
		font-family: 'MerryChristmas';
		font-size: 5rem;
		text-shadow: 3px 3px 10px black;
		height: 100%;
		margin-top: 5vh;
	}

	h1 {
		text-align: center;
		margin: 7.5vh;
	}

	#merryxmas {
		font-size: 8rem;
	}

	#until {
		font-size: 5rem !important;
	}
</style>
