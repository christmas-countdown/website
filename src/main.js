import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/lib/mdbvue.css';
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// eslint-disable-next-line no-unused-vars
const app = new Vue({
	router,
	render: t => t(App)
}).$mount("#root");
