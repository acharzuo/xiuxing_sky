import axios from 'axios';

const service = axios.create({
	//baseURL: process.env.BASE_API, // api的base_url
	timeout: 5000 // 请求超时时间});
});

// axios 请求拦截器事件
service.interceptors.request.use(
	(request) => {
		console.log('响应请求' + request.url);
		console.time('请求', request.url);
		return request;
	},
	(error) => {
		Promise.reject(error);
	}
);

// axios 的响应拦截器事件
service.interceptors.response.use(
	(response) => {
		console.timeEnd('请求');
		return response;
	},
	(error) => {
		console.log('访问服务器,报错了!');
		Promise.reject(error);
	}
);

export default service;
