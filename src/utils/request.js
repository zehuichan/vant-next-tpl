import axios from 'axios'
import { Toast } from 'vant'

let message = ' (-。-)!!! 服务器开小差了，请稍后重试。'

// create an axios instance
const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_API, // api的base_url
  timeout: 50 * 1000 // request timeout
})

http.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(`err,${error}`)
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response) => {
    const code = response.status
    if (code < 200 || code > 300) {
      Toast(`status: ${res.code}, ${message}`)
      return Promise.reject({ message: message, name: 'httpRequestError', response })
    } else {
      return response.data
    }
  },
  (error) => {
    console.log(`err,${error}`)
    Toast(`err, ${error}`)
    return Promise.reject(error)
  }
)

export default http
