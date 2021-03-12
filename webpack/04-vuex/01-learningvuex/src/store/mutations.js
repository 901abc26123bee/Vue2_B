import {
    INCREMENT
} from './mutation-types'

export default {
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
}