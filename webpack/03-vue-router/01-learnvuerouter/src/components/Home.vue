<template>
	<div>
		<h2>I am Home page</h2>
		<p> ~~~ going home ~~~ </p>

		<router-link to="/home/news">News</router-link>
		<router-link to="/home/message">Message</router-link>

		<router-view></router-view>

	</div>
</template>

<script>
	export default {
		name: "Home",
		data(){
			return {
				message: 'hello',
				path: '/home/news'
				// 'path' remember the leaving (children) route, record in beforeRouteLeave()
			}
		},
		created() {
			console.log('Home created');
			// document.title = 'Home',
			// this.$router.push('/home/news')
		},
		destroyed() {
			console.log('Home destroyed');
		},
		activated() {
			// only work when using <keep-alive></keep-alive>
			console.log('Home activated');
			this.$router.push(this.path);
		},
		// deactivated() {
		// only work when using <keep-alive></keep-alive>
		// 	console.log(this.path);
		// 	this.path = this.$route.path;
		// 	console.log('Home deactivated');
		//  // tolate, can't remember the leaving route
		//  // it can only remember the new enter route(activated)
		// }
		beforeRouteLeave(to, from, next) {
			console.log(this.$route.path);
			this.path = this.$route.path;
			// console.log(this.path);
			next()
		}
	}
</script>

<style scoped>

</style>