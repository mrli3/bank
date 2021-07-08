import request from '@/untils/request'
// 检测记录
export function getCheckHistory(data) {
  return request({
    url: '/api/device-qc-server/apis/v1.0/machineTool/device/currentDetection/search',
    method: 'post',
    data
  })
}
// 下载PDF  
export function downLoadPdf(data) {
  return request({
    url: '/api/device-qc-server/apis/v1.0/machineTool/file/currentDetection/pdf',
    method: 'post',
    data,
    responseType: 'blob',
  })
}
// 删除设备
export function delDeviceInfo(data) {
  return request({
    url: '/api/device-qc-server/apis/v1.0/machineTool/device/del',
    method: 'post',
    data
  })
}
// 删除评定记录
export function delDeviceHisCheck(data) {
  return request({
    url: '/api/device-qc-server/apis/v1.0/machineTool/device/currentDetection/del',
    method: 'post',
    data
  })
}
export function getDeviceDetail(data) {
  return request({
    url: '/api/device-qc-server/apis/v1.0/machineTool/device/details',
    method: 'post',
    data
  })
}