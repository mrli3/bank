import request from '@/untils/request'

// 设备列表
export function equapmentList(data) {
    return request({
      url: '/api/device-qc-server/apis/v1.0/machineTool/device/search',
      method: 'post',
      data
    })
  }