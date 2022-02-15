/**
 * 空函数
 */
export const noop = () => {}

let urlAlphabet =
	'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'

/**
 * nano 唯一id生成器
 * 比传统 uuid 生成快 60%
 *
 * https://github.com/ai/nanoid
 *
 * 默认设置size为21，每秒生成一亿份id，连续工作四个世纪产生一次冲突的概率为 1%
 */
export const nanoid = (size = 21) => {
	let id = ''
	let i = size
	while (i--) {
		id += urlAlphabet[(Math.random() * 64) | 0]
	}
	return id
}
