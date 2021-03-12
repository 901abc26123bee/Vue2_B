<template>
	<div>
		<h2 class="title">I am Cpn.vue title</h2>
		<p>content of Cpn</p>
		<h2>{{name}}</h2>
	</div>
</template>

<script>
	export default {
		name: "App",
		data() {
			return {
				name: 'name of Cpn'
			}
		}
	}
</script>

<style scoped>
	.title {
		color: purple;
	}
</style>