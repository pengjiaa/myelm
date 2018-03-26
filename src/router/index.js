import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import Test1 from '@/page/test1'
import Food from '@/page/food'
import Shop from '@/page/shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test1',
      component: Test1
    },
    {
      path: '/food',
      component: Food
    },
    {
      path: '/shop',
      component: Shop
    }
  ]
})
