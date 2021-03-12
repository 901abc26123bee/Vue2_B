export default {
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
}