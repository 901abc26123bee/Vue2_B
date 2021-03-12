<template>
  <div id="app">
<!--   	<tab-bar>
    <tab-bar-item path="/home" >
      <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="./assets/img/tabbar/home-active.svg" alt="">
      <div slot="item-text">Home</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="green">
      <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="./assets/img/tabbar/category-active.svg" alt="">
      <div slot="item-text">Category</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="orange">
      <img slot="item-icon" src="./assets/img/tabbar/cart.svg" alt="">
      <img slot="item-icon-active" src="./assets/img/tabbar/cart-active.svg" alt="">
      <div slot="item-text">Cart</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deepPink">
      <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="./assets/img/tabbar/profile-active.svg" alt="">
      <div slot="item-text">Profile</div>
    </tab-bar-item>
  </tab-bar> -->
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  // import TabBar from "./components/tabbar/TabBar"
  // import TabBarItem from "./components/tabbar/TabBarItem"
  // import MainTabBar from "./components/mainTabBar/MainTabBar"
  // import MainTabBar from "@/components/mainTabBar/MainTabBar"
  import MainTabBar from "@/components/mainTabBar/MainTabBar"
  // import MainTabBar from "components/mainTabBar/MainTabBar" --> error

  export default {
    name: 'App',
    components: {
    	MainTabBar
    }
  }
</script>

<style>
		@import "./assets/css/base.css";
</style>
