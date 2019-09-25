import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import Qs from 'qs'
import ElementUI from 'element-ui'
// import VueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false
Vue.prototype.axios=axios
// axios.defaults.baseURL = process.env.BASE_API;

Vue.use(ElementUI)
// axios.defaults.headers.common['Authorization']='Token'
// axios.defaults.headers.post['Content-type']='appliction/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.headers.get['Accepts']='appliction/json'
// Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
