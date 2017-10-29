// @flow
import Vue from 'vue';
import Vuex from 'vuex';
import music from './modules/music';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

// Vue加载vuex
Vue.use(Vuex);

/**
 * 主Vuex公开函数
 */
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
	modules: {
		music
	}
});
