<template>
	<div>
		<h2>I am About page</h2>
		<p>??? knowing about ???</p>
	</div>
</template>

<script>
	export default {
		name: "About",
		// created() {
		// 	console.log('created');
		// 	document.title = 'About'
		// }
		created() {
			console.log('About created');
		},
		destroyed() {
			console.log('About destroyed');
		}
	}
</script>

<style scoped>

</style>