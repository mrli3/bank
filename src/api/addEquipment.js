import request from '@/untils/request'

// 设备验证
export function checkDeviceInfo(data) {
  return request({
    url: '/api/device-qc-server/apis/v1.0/machineTool/device/verify',
    method: 'post',
    data
  })
}
// 设备电流检验
export function checkDeviceElectricityInfo(data) {
  return request({
    url: '/api/device-qc-server/apis/v1.0/machineTool/device/currentDetection/verify',
    method: 'post',
    data
  })
}
// 仅保存设备信息
export function saveDeviceInfo(data) {
  return request({
    url: '/api/device-qc-server/apis/v1.0/machineTool/device/created',
    method: 'post',
    data
  })
}
// 电流检测、整机评定
export function equipmentInspection(data) {
  return request({
    url: '/api/device-qc-server/apis/v1.0/machineTool/device/currentDetection',
    method: 'post',
    data
  })
}
// 文件模板下载
export function fileDownLoad(data) {
  return request({
    url: `/api/device-qc-server/apis/v1.0/machineTool/file/download?path=${data.path}&fileName=${data.fileName}`,
    method: 'get',
  })
}
// 上传xlsx机床信息文件
export function uploadFile(data) {
  return request({
    url: '/api/device-qc-server/apis/v1.0/machineTool/device/importDevice',
    method: 'post',
    data
  })
}
// 设备回显
export function evaluateEcho(data) {
  return request({
    url: '/api/device-qc-server/apis/v1.0/machineTool/device/evaluateEcho',
    method: 'post',
    data
  })
}