export default {
	template: `
	<div>
		<h2>{{message}}</h2>
		<button @click="btnClick">button</button>
		<h2>{{name}}</h2>
	</div>
	`,
	data() {
		return {
			message: 'Webpack + Vue',
			name: 'Leon'
		}
	},
	methods: {
		btnClick() {

		}
	}
}