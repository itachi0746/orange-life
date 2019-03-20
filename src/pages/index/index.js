// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Cell } from 'vant'

// import myModule from '../../common';

import { Row, Col } from 'vant';
import { Icon } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Card } from 'vant';
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(Card);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Icon);
Vue.use(Row).use(Col);

Vue.use(Button).use(Cell)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
