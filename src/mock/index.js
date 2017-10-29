import Mock from 'mockjs';

import music from './music';

// 音乐的基本接口
Mock.mock(/\/music\/\d/, 'get', music.get);
Mock.mock(/\/music\//, 'get', music.getList);

export default Mock;
