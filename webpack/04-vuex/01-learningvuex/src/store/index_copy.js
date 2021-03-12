import Vue from 'vue'
import Vuex from 'vuex'
import {
    INCREMENT
} from './mutation-types'

// 1.install plugin
Vue.use(Vuex)

const moduleA = {
	state: {
		name: 'moduleA'
	},
	mutations: {
		updateName(state, payload) {
			state.name = payload
		}
	},
	actions: {
		aUpdateName(context){
			// only in module has concept of root, in root(itself already is root) don't have
			console.log(context);
			setTimeout(() => {
				context.commit('updateName', 'moduleA async(actions)')
			}, 1000)
		}
	},
	getters: {
		fullName(state){
			return state.name + '999999'
		},
		fullName2(state, getters){
			return getters.fullName + '7777777'
		},
		fullName3(state, getters, rootState){
			return getters.fullName2 + rootState.counter;
		}
	},
}

// 2.create object
const store = new Vuex.Store({
	state: {
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
	},
	mutations: {
		// methods : modified state
		// 沒有導入的形式
		// ['INCREMENT'](state){
		// 	state.counter++
		// },
		// 統一格式
		[INCREMENT](state){
			state.counter++
		},
		decrement(state){
			state.counter--
		},
		incrementCount(state, payload){
			// state.counter += count
			console.log(payload);
			state.count += payload.count
		},
		addStudent(state, stu){
			state.students.push(stu)
		},
		updateInfo(state){
			state.Info.name = 'emac'
			// state.Info['address'] = 'earth' --> view not responsive diaplay, since 'address' didn't exit in Info{} 
			// Vue.set(state.Info, 'address', 'earth')
			// delete state.Info.age --> view not responsive display, can't remove exiting data in Info{} 
			// Vue.delete(state.Info, 'age')
			
			// vue devtoll can't detect the update, 
			// since matation can't detect async
			// setTimeout(() => {
			// 	state.Info.name = 'asyn'
			// }, 1000)
		}
	},
	actions: {
		// context ==> store
		// updateInfo(context, payload){
		// 	setTimeout(() => {
		// 		context.commit('updateInfo')
		// 		console.log(payload.message);
		// 		payload.success();
		// 	}, 1000)

		// 	// worng code, can't directly async here
		// 	// setTimeout(() => {
		// 	// 	state.Info.name = 'async'
		// 	// }, 1000)
		// },
		updateInfo(context, payload){
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					context.commit('updateInfo')
					console.log(payload);

					resolve()
				}, 1000)
			})
		}
	},
	getters: {
		// computed : return computed state (original state unchange) 
		powerCounter(state){
			return state.counter * state.counter
		},
		more20stu(state){
      return state.students.filter(s => 
        s.age>=25
      )
    },
    more20stuLength(state, getters){
      return getters.more20stu.length
    },
    more2AgeStu(state){
    	// return function(age){
    	// 	return state.students.filter(s => s.age > age)
    	// }
    	return age => {
    		return state.students.filter(s => s.age > age)
    	}
    }
	},
	modules: {
		a: moduleA
	}
})

// 3.
export default store