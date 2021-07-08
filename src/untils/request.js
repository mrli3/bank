import axios from 'axios'
import { message } from './message';
import { MessageBox } from 'element-ui'
import router from '../router/index'
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 8000 * 60// request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    let token = sessionStorage.getItem('userInfo') && JSON.parse(sessionStorage.getItem('userInfo')).authentication || localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo')).authentication
    if (token) {
      config.headers['Qc_Authentication'] = token
    }
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
    switch (res.code) {
      case 1003:
      
          MessageBox.alert('登录过期，请重新登录', '登录过期', {
            confirmButtonText: '去登录',
            type: 'warning',
            showClose: false,
            closeOnClickModal: false,
          }).then(() => {
            sessionStorage.clear();
            localStorage.clear()
            setTimeout(() => {
              router.push('/login');
              // router.go(0);
            }, 100);
          }).catch(() => {
            sessionStorage.clear();
            localStorage.clear()
          });
          break;

    }

    // if the custom code is not 20000, it is judged as an error.
    if (res.code && res.code !== 1000 && res.code && res.code !== 1003) {
      message.error(res.message || '请求错误')
      return res
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    message.error(error)
    return Promise.reject(error)
  }
)

export default service
