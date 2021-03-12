import axios from 'axios'

export function request(config) {
	// 1.創建對應的axios實例
	const instance1 = axios.create({
		baseURL: 'http://123.207.32.32:8000',
		timeout: 5000
	})

	// 2.axios的攔截器
	instance1.interceptors.request.use(config => {
		console.log(config);
		// 1. the message in config doesn't fit server's request
		// 		--> modified message in config
		// 2. want to have loading animation icon while committing network request
		// 		--> adding loading icon while network-requesting(visiting/download)
		// some net-request need to bring some special message, ex. login(token)
		return config
	}, err => {
		console.log(err);
	})

	instance1.interceptors.response.use(res => {
		console.log(res);
		return res.data
	}, err => {
		console.log(err);
	})


	// 3.發送真正的網路請求
	// itself return a Promise
	return instance1(config)
}


// 3-request.js
// export function request(config) {
// 	return new Promise((resolve, reject) => {
// 		// 4.創建對應的axios實例
// 		const instance1 = axios.create({
// 			baseURL: 'http://123.207.32.32:8000',
// 			timeout: 5000
// 		})
// 		// 發送真正的網路請求
// 		instance1(config)
// 			.then(res => {
// 				resolve(res)
// 			})
// 			.catch(err => {
// 				reject(err)
// 			})
// 	})
// }


// 2-request.js
// export function request(config) {
// 	// 4.創建對應的axios實例
// 	const instance1 = axios.create({
// 		baseURL: 'http://123.207.32.32:8000',
// 		timeout: 5000
// 	})
// 	// 發送真正的網路請求
// 	instance1(config.baseConfig)
// 		.then(res => {
// 			console.log(res);
// 			config.success(res)
// 		})
// 		.catch(err => {
// 			console.log(err);
// 			config.failure(err)
// 		})
// }


// 1-request.js
// export function request(config, success, failure) {
// 	// 4.創建對應的axios實例
// 	const instance1 = axios.create({
// 		baseURL: 'http://123.207.32.32:8000',
// 		timeout: 5000
// 	})
// 	// 發送真正的網路請求
// 	instance1(config)
// 		.then(res => {
// 			console.log(res);
// 			success(res)
// 		})
// 		.catch(err => {
// 			console.log(err);
// 			failure(err)
// 		})
// }