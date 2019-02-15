import Vue from 'vue'
import Router from 'vue-router'
import Order from '../components/Order.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Order',
      component: Order
    }
  ]
})
