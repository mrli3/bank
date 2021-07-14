import are from "@/assets/common/area";
import national from '@/assets/pickerData/pickerData'
// 省市区过滤
export const areaNameFiletr = function(code,type){
    if(!code){
        return
    }
    let areaType = type == 0 ? 'province_list' : type == 1 ? type = 'city_list' : type='county_list'
    for (let key in are[areaType]) {
        if (code == key) {
          return {
              code:code,
              name:are[areaType][key]
          }
        }
      }
}
// 保单列表过滤
export const myListFilter = function(arr,edorType){
  if(!arr.length) return []
  let filterArr = [];
  arr.forEach((item)=>{
    let hasEdor = item.EdorTypes.EdorType.some(child=>{
      return child == edorType
    })
    if(hasEdor){
      filterArr.push(item)
    }
  })
  return filterArr
}
// 国籍过滤
// export const nationalFilter = function(code){
//     let nationalArr = national()
//     console.log(nationalArr);
//     return nationalArr.filter(item=>{
//         return code == item.code
//     })
// }