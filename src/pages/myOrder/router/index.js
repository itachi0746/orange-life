import Vue from 'vue'
import Router from 'vue-router'
import MyOrder from '../components/MyOrder.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyOrder',
      component: MyOrder
    }
  ]
})
