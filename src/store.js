import Vue from 'vue'
import Vuex from 'vuex'
import {reqFoodsType} from './api'
import {reqShopInfo} from './api'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      shops:[],
      address:[],
      categorys:[],
      count:0,
      info:{},
      goods:[],
      cartFoods:[],
      ratings:[],
  },
    getters:{
      totalPrice(state){
          return state.cartFoods.reduce((prePrice,item)=>prePrice+item.count*item.price,0)
      },
        totalCount(state){
          return state.cartFoods.reduce((previousValue,item) =>previousValue+item.count,0 )
        },
        goodRatings(state){
          return state.ratings.filter((item)=>item.rateType===0)
        },
        bedRatings(state){
            return state.ratings.filter((item)=>item.rateType===1)
        }
    },
   mutations: {
      gtShops(state,res){
          state.shops=res
       },
       increment(state){
        state.count++
       },
       getShop(state,info){
          state.info=info
       },
       getGoods(state,goods){
          state.goods=goods
       },
       getRatings(state,ratings){
          state.ratings=ratings
       },
       addFoodCount(state,food){
          // food.count=1给food添加一个count属性
           if(!food.count){
               Vue.set(food,'count',1)
               state.cartFoods.push(food)
           }else{
               food.count++
           }
       },
       reduceFoodCount(state,food){
          if(food.count>1){
              food.count--
          }else if(food.count===1) {
              state.cartFoods.splice(state.cartFoods.indexOf(food),1)
              Vue.delete(food,'count')
          }
       },
       removeCartFoods(state){
          state.cartFoods.forEach((item)=>{Vue.delete(item,'count')})
          state.cartFoods=[]
       }
  },
  actions: {
      async getShops({commit}){
         const res=await reqFoodsType()
         commit('gtShops',res)
      },
      async getShop({commit},callback){
          const shops=await reqShopInfo()
          commit('getShop',shops.info)
          commit('getGoods',shops.goods)
          commit('getRatings',shops.ratings)
          callback && callback()
      },
      addFoodCount({commit},{isAdd,food}){
            if(isAdd){
                commit('addFoodCount',food)
            }else{
                commit('reduceFoodCount',food)
            }
      },
      removeCartFoods({commit}){
          commit('removeCartFoods')
      },
      increment({commit}){
        commit('increment')
      }
  }
})
