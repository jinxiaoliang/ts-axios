import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'
import { transformRequest, transformResponse } from './helpers/data'
import { processHeaders } from './helpers/headers'
import buildUrl from './helpers/url'
import xhr from './xhr'

/**
 * axios主函数
 * @param config 配置参数
 */
function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

/**
 * 参数转换
 * @param config
 */
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

/**
 * url 转换
 * @param config
 * @returns
 */
function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildUrl(url, params)
}

/**
 * data 转换
 * @param config
 * @returns
 */
function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

/**
 * headr 转换
 * @param config
 * @returns
 */
function transformHeaders(config: AxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

/***
 * 响应数据转换
 */
function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}

export default axios
