import request from '@/untils/request'

// 检验结果查询
export function checkDeviceResult(data) {
  return request({
    url: '/api/device-qc-server/apis/v1.0/machineTool/device/currentDetection/details',
    method: 'post',
    data
  })
}
// 设备详情
export function deviceMainInfo(data) {
  // /device-qc-server/apis/v1.0/machineTool/device/fullDetails
  return request({
    url: '/api/device-qc-server/apis/v1.0/machineTool/device/fullDetails',
    method: 'post',
    data
  })
}
// 电流检测规则
export function deviceCheckReg() {
  return request({
    url: '/api/device-qc-server/apis/v1.0/machineTool/device/currentDetection/standard',
    method: 'get',
  })
}


