import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/lib/mdbvue.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import snow from 'vue-let-it-snow';
import data from './store/data'
// import countdown from './assets/js/countdown'

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
				data.countdown.sleeps.num ++;
			}, 1000);
		}
	},
	mounted() {
		this.startCountdown();
	}
}).$mount('#root');
