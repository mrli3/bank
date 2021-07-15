import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入公共css文件
import '@/assets/common/common.less'
// 判断机型 ios底部导航偏高
import { appSource } from '@/assets/common/androidOrIOS'
if(appSource()=='ios'){
  store.commit('changeBottomHeight',true)
} else {
  store.commit('changeBottomHeight',false)
}
Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/common/rem'

Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
