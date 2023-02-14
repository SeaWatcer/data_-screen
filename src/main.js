import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index' // 引入路由配置文件
import dataV from '@jiaminghi/data-view' // 引入数据大屏插件
import store from '@/store/index'
import '@/assets/css/index.css' // 引入全局样式
Vue.use(dataV)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
