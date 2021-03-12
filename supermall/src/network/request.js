import axios from 'axios'

export function request(config) {
  // 1.創建axios的實例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.axios的攔截器
  // 2.1.請求攔截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })

  // 2.2.響應攔截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.發送真正的網絡請求
  return instance(config)
}