import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'


axios.defaults.timeout = 5000 // 请求超时
axios.defaults.baseURL = '/api/'  // api 即上面 vue.config.js 中配置的地址

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(elementUi)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
