<template>
	<div id='app'>
		<div id='afterblur'>
			<router-view />
		</div>
	</div>
</template>

<style>
	html {
		scroll-behavior: smooth;
		width: 100%;
		height: 100%;
	}

	body {
		background-color: var(--background-colour);
		background: url('/assets/img/bg/default.jpg') no-repeat center center fixed;
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
		background: url('/assets/img/bg/default.jpg') no-repeat center center fixed;
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
		position: relative;
		overflow-y: scroll;
		width: 100vw;
		height: 100vh;
	}
</style>
