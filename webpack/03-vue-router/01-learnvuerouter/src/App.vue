<template>
  <div id="app">
  	<!-- router-link 是一個內置的全局組件，他會被渲染成一個 <a>標籤-->
<!-- tag, replace, active-class
  	<router-link to="/home" tag="button" replace active-class="active"> HomePage</router-link>
  	<router-link to="/about" tag="button" replace active-class="active"> AboutPage</router-link>   -->


<!-- linkActiveClass:'active' in router/index.js
  	<router-link to="/home" tag="button" replace> HomePage</router-link>
  	<router-link to="/about" tag="button" replace> AboutPage</router-link>  --> 	

<!--   	<button @click="homeClick">Home</button>
  	<button @click="aboutClick">About</button> -->



    <router-link to="/home">Home</router-link>
    <router-link to="/about">Aouut</router-link>
    <!-- <router-link v-bind:to="'/user/'+userId">User</router-link> -->

    <!-- <router-link to="/profile">Profile</router-link> -->
    <!-- <router-link :to="{path: '/profile', query: {name: 'Lisa', age: 20, height: 168}}">Profile</router-link> -->
  	
    <button @click="userClick">User</button>
    <button @click="profileClick">Profile</button>

    <!-- 站位，顯示路由頁面顯示位置-->
  	<!-- <router-view></router-view> -->
    <keep-alive exclude="Profile,User">
      <!-- keep-alive to avoid creating/destroying components frequencly ==> activates/deactivated 
      
      attribute exclude/include="must not have space between mutli component", otherwise the rest of the component won't work
      -->
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'Leon'
    }
  },
  methods: {
  	// homeClick(){
  	// 	// this.$router.push('/home')
  	// 	// NavigationDuplicated: ：路由路徑重複報錯，
  	// 	// vue-router3.1後push和replace方法返回promise。 promise被reject但是你沒有catch，所以報錯Uncaught
  	// 	this.$router.replace('/home').catch(err => {})
  	// 	console.log('homeClick');
  	// },
  	// aboutClick(){
  	// 	// this.$router.push('/about')
  	// 	this.$router.replace('/about').catch(err => {})
  	// 	console.log('aboutClick');
  	// }
    userClick() {
      this.$router.push('/user/' + this.userId).catch(err => {});
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {name: 'Lisa', age: 20, height: 168}
      }).catch(err => {});
    }
  }
}
</script>

<style>
/*	.router-link-active{
		color: #f00;
	}*/

	.active{
		color: #f00;
	}
</style>
