import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import( /* webpackChunkName: 'about' */ '../views/About.vue')
	},
	{
		path: '/discord',
		name: 'Discord',
		component: () =>
			import('../views/Discord.vue')
	},
	{
		path: '/donate',
		name: 'Donate',
		component: () =>
			import('../views/Donate.vue')
	},
	{
		path: '/customise',
		name: 'Customise',
		component: () =>
			import('../views/Customise.vue'),
		alias: '/customize'
	},
	{
		path: '/fullscreen',
		name: 'Fullscreen',
		component: () =>
			import('../views/Fullscreen.vue')
	},
	{
		path: '/live',
		name: 'Live',
		component: () =>
			import('../views/Live.vue')
	},
	{
		path: '/privacy',
		name: 'Privacy',
		component: () =>
			import('../views/Privacy.vue')
	},
	{
		path: '/terms',
		name: 'Terms',
		component: () =>
			import('../views/Terms.vue')
	},
	{
		path: '/total',
		name: 'Total',
		component: () =>
			import('../views/Total.vue')
	},
];

const router = new VueRouter({
	// mode: 'history',
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
});

export default router;
