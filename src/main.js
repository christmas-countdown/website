import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/lib/mdbvue.css';
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import LetItSnow from 'vue-let-it-snow';

Vue.use(LetItSnow);

Vue.config.productionTip = false;

// eslint-disable-next-line no-unused-vars
const app = new Vue({
	router,
	render: t => t(App),
	data: {
		live: {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		},
		total: {
			months: 0,
			weeks: 0,
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		},
	},
}).$mount("#root");
