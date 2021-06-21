const toString = Object.prototype.toString

/**
 * 判断是否是时间类型
 * @param val
 * @returns
 */
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

/**
 * 判断是否是对象
 * @param val
 * @returns
 */
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
