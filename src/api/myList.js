import request from '@/untils/request'
import store from '@/store'
// 获取我的列表信息
export function getMyList() {
  return request({
    url: `${store.state.mode}/mineFunction/list`,
    method: 'get',
  })
}
// 我的列表点击埋点
export function mallStatistics(data){
  return request({
    url: `${store.state.mode}/mallStatistics/add`,
    method: 'post',
    data:data
  })
}
// 我的保单
export function getMyInsurance(){
  return request({
    url: `${store.state.mode}/myInsurance/testList/b`,
    method: 'post',
  })
}
// 保单详情
export function getMyInsuranceMain(data){
  return request({
    url: `${store.state.mode}/myInsurance/get`,
    method: 'post',
    data
  })
}
// 回执签收
export function getReceipt(data){
  return request({
    url: `${store.state.mode}/myInsurance/receipt`,
    method: 'post',
    data
  })
}
// 万能险保费缓交变更
export function almightyLaterPaymentChange(data){
  return request({
    url: `${store.state.mode}/insuranceService/almightyLaterPaymentChange`,
    method: 'post',
    data
  })
}
// 交费频率变更
export function paymentFrequencyChange(data){
  return request({
    url: `${store.state.mode}/insuranceService/paymentFrequencyChange`,
    method: 'post',
    data
  })
}