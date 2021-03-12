import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'


// 1.install plugin
Vue.use(Vuex)

const state = {
	// data
	counter: 10,
	students: [
		{id: 110, name:'atom', age:20},
		{id: 111, name:'ben', age:22},
		{id: 112, name:'jenny', age:30},
		{id: 113, name:'lisa', age:32},
	],
	Info: {
		name: 'king',
		age: 50,
		height: 200,
	}
}

// 2.create object
const store = new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
	modules: {
		a: moduleA
	}
})

// 3.
export default store