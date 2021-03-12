import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import Vuex from 'vuex'

Vue.config.productionTip = false

/* eslint-disable no-new */
// // 1.
// Vue.use(Vuex)
Vue.prototype.$store = store

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
