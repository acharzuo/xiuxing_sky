import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home';
import player from '@/pages/player';
import coding from '@/pages/coding';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/player/:id',
			name: 'player',
			component: player
		},
		{
			path: '/coding',
			name: 'coding',
			component: coding
		}
	]
});
