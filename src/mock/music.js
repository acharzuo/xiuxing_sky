// @flow

import { resultAdapter, pageAdapter } from './util';
import Mock from 'mockjs';

const musicList = [];
for (let i = 0; i < 13; i++) {
	musicList.push(
		Mock.mock({
			title: '@title(5,10)',
			id: i,
			date: '@datetime("yyy-MM-dd HH:mm:ss")',
			image: '@image("300x300")',
			author: {
				name: '@cname',
				id: '0',
				avatar: '/static/images/avatar/0.jpg'
			},
			url: '/static/music/' + i + '.mp3'
		})
	);
}

function get(index: number) {
	let ret = 0;
	let code = 1;
	let message = '成功' + index;
	let data = undefined;
	let page = undefined;
	let extend = undefined;
	console.log('接收参数', index);
	data = musicList[0];

	return resultAdapter(ret, code, message, data, page, extend);
}

function getList() {
	let ret = 0;
	let code = 1;
	let message = '成功';
	let data = undefined;
	let page = undefined;
	let extend = undefined;

	data = musicList;
	page = pageAdapter(0, 10, musicList.length, Math.ceil(musicList.length / 10));
	return resultAdapter(ret, code, message, data, page, extend);
}

export default {
	get,
	getList
};
