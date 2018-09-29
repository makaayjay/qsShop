// 包含多个接口请求函数
import ajax from './ajax'

//请求地址
let base_url='http://localhost:4000'
export const reqAddress=geohash=>ajax(`/position/${geohash}`)
//请求食品种类
export const reqFoodsType=()=>ajax('/index_category')

//根据地址请求店铺信息
export const reqShops=(lon,lat)=>ajax('/shops',{longitude:lon,latitude:lat})
//请求商铺具体信息
export const reqShopInfo=()=>ajax('/getshopinfo')