import axios from 'axios'
import { Toast } from 'vant';

// import router from '../router/index'
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API , // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 8000 * 60// request timeout
})
// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    Toast.loading({
      duration: 0, // 持续展示 toast
      forbidClick: true,
      message: '加载中...',
    })
    return config
  },
    
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    Toast.clear()
    return res
  },
  error => {
    console.log('err' + error) // for debug
    Toast.clear()
    return Promise.reject(error)
  },
)

export default service
