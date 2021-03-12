<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<!-- <div :class="{active: isActive}"> -->
		<div :style="activeStyle">
			<!-- since the entire slot would be replace in APP.vue, 
							if you v-bind class in slot, won't work
			 -->
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TabBarItem",
		props :{
			path: String,
			activeColor: {
				type: String,
				default: 'red'
			}
		},
		data() {
			return {
				// isActive: true
			}
		},
		computed: {
			isActive() {
				// 判斷當前活躍對象 $route ，是否和path相同
				// /home -> item1(/home) = true
				// /home -> item1(/category) = true
				// /home -> item1(/cart) = true
				// /home -> item1(/profile) = true
				return this.$route.path.indexOf(this.path) !== -1; // indexOf == -1 --> not found
			},
			activeStyle() {
				return this.isActive ? {color: this.activeColor} : {}
			}
		},
		methods: {
			itemClick() {
				// console.log("itemClick");
				// 想導航到其他路由(URL)，通過 $router 
				this.$router.replace(this.path)
			}
		}
	}
</script>

<style scoped>	
	.tab-bar-item {
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 12px;
	}

	.tab-bar-item img {
		width: 24px;
		height: 24px;
		margin-top: 3px;
		vertical-align: middle;
		margin-bottom: 0px;
		margin-top: 5px;
	}

/*	.active {
		color: red;
		font-weight: 500;
	}*/


</style>