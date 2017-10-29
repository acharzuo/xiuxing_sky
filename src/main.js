// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css'; // 加载样式
import 'muse-ui/dist/theme-teal.css';
import App from './App';
import store from './store';
import router from './router';
import VueRouter from 'vue-router';
import Mock from '@/mock'; // Mock 模拟数据
import * as filters from './filters'; // 过滤器

Vue.use(Vuex);
Vue.use(MuseUI);
Vue.use(VueRouter);

// 去除移动端的点击延迟
const FastClick = require('fastclick');
FastClick.attach(document.body);

// 加载全局过滤器
// register global utility filters.
Object.keys(filters).forEach((key) => {
	Vue.filter(key, filters[key]);
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	render: (h) => h(App),
	router,
	store,
	template: '<App/>',
	components: { App }
});
