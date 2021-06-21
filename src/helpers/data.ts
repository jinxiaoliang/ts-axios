import { isPlainObject } from './util'

/**
 * 处理请求body数据
 * @param data
 * @returns
 */
export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

/**
 * 响应数据转化为对象
 * @param data
 * @returns
 */
export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {
      // do nothing
    }
  }
  return data
}
