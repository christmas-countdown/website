<template>
	<div class='content'>
		<BackArrow />
		<mdb-container>
			<!-- fluid -->
			<mdb-row>

				<mdb-col class='numberContainer'>
					<mdb-row>
						<mdb-col>
							num
						</mdb-col>
					</mdb-row>
					<mdb-row>
						<mdb-col>
							days
						</mdb-col>
					</mdb-row>
				</mdb-col>

				<mdb-col class='numberContainer'>
					<mdb-row>
						<mdb-col>
							num
						</mdb-col>
					</mdb-row>
					<mdb-row>
						<mdb-col>
							hours
						</mdb-col>
					</mdb-row>
				</mdb-col>

				<mdb-col class='numberContainer'>
					<mdb-row>
						<mdb-col>
							num
						</mdb-col>
					</mdb-row>
					<mdb-row>
						<mdb-col>
							hours
						</mdb-col>
					</mdb-row>
				</mdb-col>

				<mdb-col class='numberContainer'>
					<mdb-row>
						<mdb-col>
							num
						</mdb-col>
					</mdb-row>
					<mdb-row>
						<mdb-col>
							minutes
						</mdb-col>
					</mdb-row>
				</mdb-col>

				<mdb-col class='numberContainer'>
					<mdb-row>
						<mdb-col>
							num
						</mdb-col>
					</mdb-row>
					<mdb-row>
						<mdb-col>
							seconds
						</mdb-col>
					</mdb-row>
				</mdb-col>

			</mdb-row>
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
	mdbCol,
	mdbRow,
} from 'mdbvue';

export default {
	name: 'Live',
	components: {
		BackArrow,
		Footer,
		mdbContainer,
		mdbCol,
		mdbRow,
	}
};
</script>

<style scoped>
	.numberContainer {
		text-align: center;
		/* float: middle; */
	}
</style>
