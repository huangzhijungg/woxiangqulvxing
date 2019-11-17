import Vue from 'vue'
import router from './router'
import App from './App.vue'

// import 'amfe-flexible/index.js'

import 'lib-flexible'

import store from './store'

import 'vant/lib/index.css';

import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);

import { Lazyload } from 'vant';
Vue.use(Lazyload);

import { Field } from 'vant';
Vue.use(Field);

import { Picker } from 'vant';
Vue.use(Picker);

import { Button } from 'vant';
Vue.use(Button);

import { Icon } from 'vant';
Vue.use(Icon);

import { List } from 'vant';
Vue.use(List);

import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);

import { DatetimePicker } from 'vant';
Vue.use(DatetimePicker);

import { Overlay } from 'vant';
Vue.use(Overlay);

import { Popup } from 'vant';
Vue.use(Popup);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
