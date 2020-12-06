import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/lib/mdbvue.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import snow from 'vue-let-it-snow';
import data from './store/data';
import Countdown from './assets/js/countdown';

Vue.use(snow);

Vue.config.productionTip = false;
Vue.prototype.$countly = 'countly stuff';

// eslint-disable-next-line no-unused-vars
const app = new Vue({
	router,
	render: t => t(App),
	data,
	methods: {
		startCountdown () {
			let data = this;
			setInterval(() => {
				let countdown = new Countdown;

				for (let i in data.countdown.total) {
					data.countdown.total[i] = countdown[i];
				}					

				for (let i in data.countdown.live) {
					let num = countdown.total.days_based[i];
					data.countdown.live[i].num = num,
					data.countdown.live[i].text = num === 1 ? i.slice(0, -1) : i;
				}
					
			}, 1000);
		}
	},
	mounted() {
		this.startCountdown();
	}
}).$mount('#root');
