import { AxiosRequestConfig } from './types/'

export default function xhr(config: AxiosRequestConfig) {
  const { data = null, url, method = 'get' } = config
  const xhr = new XMLHttpRequest()
  xhr.open(url, method, true)
  xhr.send(data)
}
