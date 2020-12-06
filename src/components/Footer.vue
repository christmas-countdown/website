<template>
	<mdb-footer id='footer' class='font-small pt-4 mt-4' dark>
		<div class='footer-copyright text-center py-3'>
			<mdb-container fluid>
				&copy; 2017 - {{ year }} <a href='https://eartharoid.me'>eartharoid</a>
			</mdb-container>
		</div>
	</mdb-footer>
</template>

<script>
import {
	mdbFooter,
	mdbContainer,
} from 'mdbvue';

export default {
	name: 'Footer',
	data: () => ({
		year: new Date().getFullYear(),
	}),
	components: {
		mdbFooter,
		mdbContainer,
	}
};
</script>

<style scoped>
	#footer {
		/* margin-top: 12vh !important; */
	}
</style>
