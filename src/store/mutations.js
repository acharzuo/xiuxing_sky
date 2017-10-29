// @flow
import { LOADING } from './mutation_type';

export default {
	[LOADING](state, payload: boolean) {
		state.loading = payload;
	}
};
