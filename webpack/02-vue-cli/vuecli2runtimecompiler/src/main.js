// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// const cpn = {
// 	template: `<div>{{message}}</div>`,
// 	data() {
// 		return {
// 			message: 'I am message of component'
// 		}
// 	}
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function(createElement) {
  	// 1. normal
  	// createElement('tag', {attribute of tag}, [content of this tag])
  	// second can omis
  	// this would replace <div id="app"></div> in index.html
  	// change to : <h2 class:'box'>hello</h2>
  	// return createElement('h2', 
  	// 										{class: 'box'}, 
  	// 										['hello', createElement('button',['button'])])

  	// 2. pass in a component
  	// same as directly render() == dispense with compilement
  	// return createElement(cpn)
  	return createElement(App)
  }
})
