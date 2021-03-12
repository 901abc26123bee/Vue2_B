<template>
	<div>
		<h2>I am User page</h2>
		<p> *** User Profile *** </p>
		<h2>{{userId}}</h2>
		<h2>{{$route.params.abc}}</h2>
		<button @click="btnClick">button</button>
	</div>
</template>

<script>
	export default {
		name: "User",
		computed: {
			userId() {
				return this.$route.params.abc
			}
		},
		methods: {
			btnClick() {
				console.log(this.$router);
				// this.$router === "router" import in main.js === "export default new Router" in router/index.js

				console.log(this.$route);
				// 當前活躍的路由 === {path: '/user/:abc', component: User}

				// 所有組件都繼承vue的原型
				this.testProto();
				console.log(this.$selfdefined);
			}
		},
		// created() {
		// 	console.log('created');
		// 	document.title = 'User'
		// }
		created() {
			console.log('User created');
		},
		destroyed() {
			console.log('User destroyed');
		}
	}
</script>

<style scoped>

</style>