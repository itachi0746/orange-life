// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Row, Col } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Loading } from 'vant';

Vue.use(Loading);
Vue.use(Cell).use(CellGroup);
Vue.use(Row).use(Col);
import myModule from '../../common';

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
