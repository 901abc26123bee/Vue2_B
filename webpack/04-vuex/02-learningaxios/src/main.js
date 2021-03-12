import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})


// axios({
//   // url: 'httpbin.org/'
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })

// axios({
//   // url: 'httpbin.org/'
//   url: 'http://123.207.32.32:8000/home/data?type=sell&page=3',
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })

// axios({
//   // url: 'httpbin.org/'
//   url: 'http://123.207.32.32:8000/home/data',
//   // 針對 get 請求的拼接
//   params: {
//   	type: 'pop',
//   	page: 1
//   }
// }).then(res => {
//   console.log(res);
// })



// 1. 使用全局的axios和對應的配置在進行網路請求
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
// axios.all([axios({
// 	url: '/home/multidata',
// }), axios({
//   url: '/home/data?type=sell&page=3',	
// })]).then(axios.spread((res1, res2)=> {
// 	console.log(res1);
// 	console.log(res2);
// }))



// 4.創建對應的axios實例
// const instance1 = axios.create({
// 	baseURL: 'http://123.207.32.32:8000',
// 	timeout: 5000
// })

// instance1({
// 	url: '/home/multidata',
// }).then(res => {
// 	console.log(res);
// })

// instance1({
// 	url: '/home/data',
// 	params: {
// 		type: 'pop',
// 		page: 1
// 	}
// }).then(res => {
// 	console.log(res);
// })

// const instance2 = axios.create({
// 	baseURL: 'http://123.207.32.32:8000',
// 	timeout: 10000,
// 	headers: {}
// })



// 5.封裝一個request模塊
import {request} from './network/request'


// 1-request.js
// request({
// 	url: '/home/multidata',
// }, res => {
// 	console.log(res);
// }, err => {
// 		console.log(err);
// })

// 2-request.js
// request({
// 	baseConfig: {

// 	},
// 	success: function(res{

// 	},
// 	failure: function(err){

// 	}
// })

// 3-request.js
// 4-request.js
request({
	url: '/home/multidata',
}).then(res => {
	//console.log(res);
}).catch(err => {
	//console.log(err);
})
