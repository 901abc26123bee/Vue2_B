import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

// 1. import 'vue-router' as VueRouter, 並調用 Vue.use(插件)，安裝插件以使用
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'Home'
    },
    children: [
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: 'About'
    },
    beforeEnter: (to, from, next) => {
      console.log('about beforeEnter');
      next()
    }
  },
  {
    path: '/user/:abc',
    component: User,
    meta: {
      title: 'User'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: 'Profile'
    }
  },
]

// 2. create object of Router
const router = new VueRouter({
	// 配置路由和組建之間的映射關係
	routes,
  mode: 'history',
  linkActiveClass:'active'
})
// default mode: url hash  --> modify router by url hash --> http://localhost:8080/#/home
// mode: 'history' --> modify router by html history --> http://localhost:8080/home

// 前置鉤子(hook)
router.beforeEach((to, from, next) => {
  // 從跳 from 轉到 to
  // document.title = to.meta.title
  // console.log(to);
  // console.log('beforeEach (before title change)');
  document.title = to.matched[0].meta.title // 嵌套路由
  next()
})

// // 後置鉤子(hook)
// router.afterEach((to, from) => {
//     console.log('afterEach (after title change)');
// })

// 3. 將 Router 對象傳入 Vue 實例中(main.js)
export default router