// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { Row, Col } from 'vant';
import { Icon } from 'vant';
import { Stepper } from 'vant';
import { Checkbox } from 'vant';
import { Button } from 'vant';

Vue.use(Button);
Vue.use(Checkbox);
Vue.use(Stepper);
Vue.use(Icon);
Vue.use(Row).use(Col);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
