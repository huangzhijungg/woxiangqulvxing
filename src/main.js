import Vue from 'vue'
import router from './router'
import App from './App.vue'

import 'lib-flexible'

import store from './store'

import Axios from 'axios'  //导入axios
//将axios挂载到原型上
Vue.prototype.$axios = Axios;

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

import { NoticeBar } from 'vant';
Vue.use(NoticeBar);

import { Dialog } from 'vant';
Vue.use(Dialog);

import { Panel } from 'vant';
Vue.use(Panel);

import { Collapse, CollapseItem } from 'vant';
Vue.use(Collapse).use(CollapseItem);

import { Search } from 'vant';
Vue.use(Search);

import { Row, Col } from 'vant';
Vue.use(Row).use(Col);

import { NavBar } from 'vant';
Vue.use(NavBar);

import { Divider } from 'vant';
Vue.use(Divider);

import { Toast } from 'vant';
Vue.use(Toast);

import { Notify } from 'vant';
Vue.use(Notify);

import { Image } from 'vant';
Vue.use(Image);

import { CountDown } from 'vant';
Vue.use(CountDown);

import { Card } from 'vant';
Vue.use(Card);

import { Tag } from 'vant';
Vue.use(Tag);

import { RadioGroup, Radio } from 'vant';
Vue.use(RadioGroup);
Vue.use(Radio);

import { Area } from 'vant';
Vue.use(Area);

import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);

import { Grid, GridItem } from 'vant';
Vue.use(Grid).use(GridItem);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
