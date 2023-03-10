import cache from '@/utils/cache'
import ALRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const alRequest = new ALRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor(config) {
      const token = cache.getCache('token') ?? '123'
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    },
    responseInterceptor(config) {
      return config.data
    },
    responseInterceptorCatch(config) {
      window.$message.error(config.response.data)
      return Promise.reject(new Error(config))
    }
  }
})

export default alRequest
