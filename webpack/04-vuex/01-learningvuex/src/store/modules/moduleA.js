export default {
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
	}
}