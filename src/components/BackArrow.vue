<template>
	<mdb-container fluid>
		<mdb-row>
			<mdb-col class='col'>
				<router-link to='/'>
					<i class='fas fa-arrow-left'></i>
					<span class='space'>Back</span>
				</router-link>
			</mdb-col>
		</mdb-row>
	</mdb-container>
</template>

<script>
import {
	mdbContainer,
	mdbCol,
	mdbRow,
} from 'mdbvue';

export default {
	name: 'BackArrow',
	components: {
		mdbContainer,
		mdbCol,
		mdbRow,
	}
};
</script>

<style scoped>
	.col {
		padding: 1rem 2rem;
	}

	.space {
		padding-left: 0.3rem;
	}
</style>
