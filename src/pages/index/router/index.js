import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Search from '../components/Search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    }
  ]
})
