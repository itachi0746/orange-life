// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Cell } from 'vant'
import {
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant'

Vue
  .use(GoodsAction)
  .use(GoodsActionBigBtn)
  .use(GoodsActionMiniBtn)
Vue.use(Button).use(Cell)

import myModule from '../../common'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
