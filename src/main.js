import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/lib/mdbvue.css';
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LetItSnow from 'vue-let-it-snow';

Vue.use(LetItSnow);

Vue.config.productionTip = false;
Vue.prototype.$countly = 'countly stuff';

// eslint-disable-next-line no-unused-vars
const app = new Vue({
	router,
	store,
	render: t => t(App),
}).$mount("#root");
