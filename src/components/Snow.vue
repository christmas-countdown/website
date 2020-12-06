<template>
	<let-it-snow
      v-bind="snowConf"
      :show="show"    
    ></let-it-snow>
</template>

<script>
export default {
	name: 'app',
	data() {
		return {
			snowConf: {
				windPower: 2,
				speed: 1,
				count: 250,
				size: 0,
				// opacity: 0.8,
				// images: ['https://raw.githubusercontent.com/bob-chen/let_it_snow/master/demo/snow.png',
				// 	'https://raw.githubusercontent.com/bob-chen/let_it_snow/master/demo/sock.png',
				// 	'https://raw.githubusercontent.com/bob-chen/let_it_snow/master/demo/tree.png'
				// ]
			},
			show: false
		};
	},
	mounted() {
		// this.show = this.$store.state.options.snow.enabled;
		this.show = this.$root.$data.options.snow.enabled;
	}
};
</script>
