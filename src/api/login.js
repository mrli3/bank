import request from '@/untils/request'
//用户登录
export function userLogin(data) {
  return request({
    url: '/api/device-qc-server/apis/v1.0/machineTool/member/login',
    method: 'post',
    data
  })
}
//退出
export function userLogOut(data) {
  return request({
    url: '/api/device-qc-server/apis/v1.0/machineTool/member/logout',
    method: 'post',
    data
  })
}
//用户更改密码
export function reqResetPassword(data) {
  return request({
    url: '/api/device-qc-server/apis/v1.0/machineTool/member/resetAccount',
    method: 'post',
    data
  })
}
