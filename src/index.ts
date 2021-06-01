import { AxiosRequestConfig } from './types'
import xhr from './xhr'

/**
 * axios主函数
 * @param config 配置参数
 */
function axios(config: AxiosRequestConfig) {
  xhr(config)
}

export default axios
