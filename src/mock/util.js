// @flow
/**
 *
 * 适配后台的格式
 *
 * @export
 * @param {number} ret 返回状态, 0失败, 1成功
 * @param {number} code 事件编号
 * @param {string} message 文字消息
 * @param {object} data 数据
 * @param {object} page 翻页
 * @param {object} extend 扩展数据
 * @returns
 */
export function resultAdapter(ret: number, code: number, message: string, data: object, page: object, extend: object) {
	return {
		ret,
		code,
		message,
		data,
		page,
		extend
	};
}

/**
 * 翻页数据格式生成
 *
 * @export
 * @param {number} pageNo 当前页码
 * @param {number} pageSize 每页页码大小
 * @param {number} total 总大小
 * @param {number} pageNumber 页数
 * @returns
 */
export function pageAdapter(pageNo: number, pageSize: number, total: number, pageNumber: number) {
	return {
		pageNo,
		pageSize,
		total,
		pageNumber
	};
}
