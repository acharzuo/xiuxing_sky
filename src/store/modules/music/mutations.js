// @flow
import { SET_MUSIC_URL, UPDATE_MUSIC_PLAYER_STATE, SET_MUSIC_DURATION, SET_MUSIC_CURRENT_TIME } from './mutation_type';

export default {
	/**
   * 更新播放器的状态
   * @param {any} state
   * @param {boolean} payload true播放, false暂停
   */
	[UPDATE_MUSIC_PLAYER_STATE](state: object, payload: boolean) {
		console.log(UPDATE_MUSIC_PLAYER_STATE, payload);
		state.musicPlayerState = payload;
	},

	/**
   *
   * 设置播放器歌曲
   *
   * @param {object} state
   * @param {string} payload
   */
	[SET_MUSIC_URL](state: object, payload: string) {
		console.log(SET_MUSIC_URL, payload);
		state.musicUrl = payload;
	},

	/**
 *
 * 设置音乐的总时长
 *
 * @param {object} state
 * @param {number} payload 总时长(秒)
 */
	[SET_MUSIC_DURATION](state: object, payload: number) {
		state.musicDuration = payload;
	},
	/**
   *
   * 当前播放时间(秒)
   *
   * @param {object} state
   * @param {number} payload
   */
	[SET_MUSIC_CURRENT_TIME](state: object, payload: number) {
		state.musicCurrentTime = payload;
	}
};
