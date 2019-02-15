import Vue from 'vue'
import Router from 'vue-router'
import PlaceOrder from '../components/PlaceOrder.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PlaceOrder',
      component: PlaceOrder
    }
  ]
})
