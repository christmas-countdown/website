import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/lib/mdbvue.css';
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import LetItSnow from 'vue-let-it-snow';

Vue.use(LetItSnow);

Vue.config.productionTip = false;
Vue.prototype.$countly = 'countly stuff';

// eslint-disable-next-line no-unused-vars
const app = new Vue({
	router,
	render: t => t(App),
	data: {
		countdown: {
			sleeps: {
				num: 0,
				text: 'sleeps'
			},
			live: {
				num: {
					days: 0,
					hours: 0,
					minutes: 0,
					seconds: 0,
				},
				text: {
					days: 'days',
					hours: 'hours',
					minutes: 'minutes',
					seconds: 'seconds',
				}
			},
			total: {
				num: {
					months: 0,
					weeks: 0,
					days: 0,
					hours: 0,
					minutes: 0,
					seconds: 0,
				},
				text: {
					months: 'months',
					weeks: 'weeks',
					days: 'days',
					hours: 'hours',
					minutes: 'minutes',
					seconds: 'seconds',
				}
			},
		},
		options: {
			snow: {
				enabled: true,
			}
		}
	},
}).$mount("#root");
