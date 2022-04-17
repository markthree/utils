/**
 * 空函数
 */
export const noop = () => {}

let urlAlphabet =
	'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'

/**
 * 唯一 id
 * @param size 长度 - default to 21
 * @returns
 */
export const nanoid = (size = 21) => {
	let id = ''
	let i = size
	while (i--) {
		id += urlAlphabet[(Math.random() * 64) | 0]
	}
	return id
}

/**
 * 串行
 * @param tasks 任务
 * @returns results 结果
 */
export const serial = async <T>(...tasks: Promise<T>[]) => {
	const results = []
	for (const task of tasks) {
		const result = await task
		results.push(result)
	}
	return results
}

/**
 * 并行
 * @description 如果有一个 reject 则停止
 * @param tasks 任务
 * @returns results 结果
 */
export const parallel = Promise.all

/**
 * 并行
 * @description 不管怎样都会执行下去，即使有一个 reject 停止
 * @param tasks 任务
 * @returns results 结果
 */
export const parallelWithSettled = Promise.allSettled

/**
 * 睡
 * @param delay - default to 500
 * @returns
 */
export const sleep = (delay = 500) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(null)
		}, delay)
	})
}

/**
 * 竞态
 */
export const race = Promise.race.bind(Promise)

/**
 * 创建 Promise.resolve 后的对象
 */
export const P = Promise.resolve.bind(Promise)

/**
 * 防抖
 * @param invoke 回调
 * @param delay 延迟
 * @returns 防抖后的函数
 */
export const debounce = <T extends () => unknown>(
	invoke: T,
	delay = 500
) => {
	let timeout: unknown
	return function (
		this: ThisParameterType<T>,
		...rest: Parameters<T>
	) {
		// @ts-ignore
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			invoke.apply(this, rest)
		}, delay)
	}
}

/**
 * 节流
 * @param invoke 回调
 * @param delay 延迟 - default to 500
 * @returns 节流后的函数
 */
export const throttle = <T extends () => unknown>(
	invoke: T,
	delay = 500
) => {
	let timeout: unknown
	return function (
		this: ThisParameterType<T>,
		...rest: Parameters<T>
	) {
		if (timeout) {
			return
		}
		timeout = setTimeout(() => {
			invoke.apply(this, rest)
			timeout = null
		}, delay)
	}
}
