import Vue from 'vue'
import App from './App'
// if the import 的是一個目錄，會自動搜尋其中的 index
// same as './router/index'
import router from './router'

Vue.config.productionTip = false

// 所有組件都繼承vue的原型
// === all components have method test()
Vue.prototype.testProto = function(){
	console.log('test');
}

Vue.prototype.$selfdefined = "defined by prtotype chain"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

console.log(router);