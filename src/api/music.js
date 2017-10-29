import fetch from '@/utils/fetch';

/**
 *
 * 获取的指定ID的实例
 *
 * @export
 * @param {any} id 实例ID
 * @returns 实例的数据
 */
export function get(id) {
	return fetch({
		url: '/music/' + id,
		method: 'get'
	});
}

/**
 *
 * 获取查询列表
 *
 * @export
 * @param {any} params 查询参数
 * @returns data数据列表, page页面数据, extend扩展数据
 */
export function getList(params) {
	return fetch({
		url: '/music/',
		method: 'get',
		params
	});
}

export default {
	get,
	getList
};
