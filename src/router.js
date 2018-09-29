import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import search from './views/search.vue'
import order from './views/order.vue'
import persona from './views/persona.vue'
import loggin from './views/login/login'
import shop from './views/shop/shop'
import goods from './components/goods'
import ShopRating from './views/shop/ShopRatings'
import ShopInfo from './views/shop/ShopInfo'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/',
          redirect:'/home',
      },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
      {
          path: '/search',
          name: 'search',
          component: search
      },
      {
          path: '/order',
          name: 'order',
          component: order
      },
      {
          path: '/persona',
          name: 'persona',
          component: persona
      },
      {
          path:'/login',
          name:'login',
          component:loggin
      },
      {
          path:'/shop',
          name:shop,
          component:shop,
          children:[
              {
                  path:'/',
                  redirect:goods
              },
              {
                  path:'goods',
                  name:'goods',
                  component:goods,
              },
              {
                  path:'ratings',
                  name:'ratings',
                  component:ShopRating
              },
              {
                  path:'info',
                  name:'ShopInfo',
                  component:ShopInfo
              }
          ]
      }
  ]
})
