// 请求类型
export type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'delete'
  | 'DELETE'
  | 'put'
  | 'PUT'
  | 'head'
  | 'HEAD'

// 请求配置类型
export interface AxiosRequestConfig {
  url: string
  method?: Method
  params?: any
  data?: any
}
