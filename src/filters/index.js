export function formatTime(time) {
	let min = Math.floor(time / 60);
	let sec = Math.ceil(time % 60);
	return (min < 10 ? '0' : '') + min + ':' + (sec < 10 ? '0' : '') + sec;
}
