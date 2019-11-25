import Vue from 'vue'
import router from './router'
import App from './App.vue'

import 'lib-flexible'

import store from './store'

import 'vant/lib/index.css';

// import './assets/css/smartInput.css'
// import './assets/js/smartInput.js'

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

Vue.config.productionTip = false
// const provinceList = ['北京市', '天津市', '上海市', '重庆市', '河北省', '山西省', '辽宁省', '吉林省', '黑龙江省', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '海南省', '四川省', '贵州省', '云南省', '陕西省', '甘肃省', '青海省', '台湾省', '内蒙古自治区', '广西壮族自治区', '西藏自治区', '宁夏回族自治区', '新疆维吾尔自治区', '香港特别行政区', '澳门特别行政区'];
new Vue({
  router,
  store,
  // data: {
  //   provinceList: {
  //     list: provinceList,
  //   }
  // },
  // methods: {
  //   // 跟智能输入框同步选中的省份
  //   collectProvince(data) {
  //     console.log(data);
  //   }
  // },
  render: h => h(App),
}).$mount('#app')
