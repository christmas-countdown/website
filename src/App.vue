<template>
	<div id='app'>
		<div id='afterblur'>
			<Snow />
			<router-view />
		</div>
	</div>
</template>

<script>
import Snow from '@/components/Snow.vue';

export default {
	name: 'App',
	components: {
		Snow,
	},
};
</script>

<style>
	html {
		scroll-behavior: smooth;
		width: 100%;
		height: 100%;
	}

	body {
		background-color: var(--background-colour);
		background: url('/img/bg/default.jpg') no-repeat center center fixed;
		background-size: cover;
		color: white;
		/* text-align: center; */
		/* font-family: 'Montserrat', sans-serif;
		text-shadow: 3px 3px 3px #02020F; */
		overflow: hidden;
	}

	body:before {
		content: "";
		position: absolute;
		width: 150%;
		height: 150%;
		top: 0;
		left: 0;
		background: url('/img/bg/default.jpg') no-repeat center center fixed;
		background-size: cover;
		z-index: -1;

		filter: blur(5px) brightness(75%);
		-moz-filter: blur(5px) brightness(75%);
		-webkit-filter: blur(5px) brightness(75%);
		-o-filter: blur(5px) brightness(75%);
		opacity: 0.9;
	}

	#afterblur {
		scroll-behavior: smooth;
		/* Hide scrollbar for IE, Edge and Firefox */
		/* -ms-overflow-style: none; */
		scrollbar-width: none; /* only hide it on firefox */

		position: relative;
		overflow-y: scroll;
		width: 100vw;
		height: 100vh;
	}
	/* Hide scrollbar for Chrome, Safari and Opera */
	/* #afterblur::-webkit-scrollbar {
		display: none;
	} */

	/* width */
	::-webkit-scrollbar {
		width: 10px;
	}

	/* Track */
	::-webkit-scrollbar-track:hover {
		background: rgba(0, 0, 0, 0.3);
		cursor: pointer !important;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: rgba(0, 0, 0, 0.5);
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: rgba(0, 0, 0, 0.8);
		cursor: pointer;
	}
</style>
