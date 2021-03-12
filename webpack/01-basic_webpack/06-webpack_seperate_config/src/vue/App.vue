<template>
	<div>
		<h2 class="title">{{message}}</h2>
		<button @click="btnClick">button</button>
		<h2>{{name}}</h2>
		<cpn></cpn>
	</div>
</template>

<script>
	import Cpn from './Cpn'
	export default {
		name: "App",
		components: {
			Cpn
		},
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
</script>

<style scoped>
	.title {
		color: green;
	}
</style>