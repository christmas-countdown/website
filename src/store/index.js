import Vue from 'vue';
import Vuex from 'vuex';
import states from './defaults';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		...states
	},
	mutations: {
		count() {
			setTimeout(() => {
				this.countdown.sleeps.num ++;
			}, 1000);
		},
	},
	getters: {	
	},
	actions: {
		startCountdown() {

		},
	}
});
