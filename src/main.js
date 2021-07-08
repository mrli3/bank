import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入公共css文件
import '@/assets/common/common.less'
Vue.config.productionTip = false
// Message 消息提示组件多次弹出问题
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/common/rem'
// 动态化title
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
