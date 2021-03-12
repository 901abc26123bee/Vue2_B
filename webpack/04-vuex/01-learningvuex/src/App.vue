<template>
  <div id="app">
    <!-- <h2>---------App----------</h2>
    <h2>{{counter}}</h2>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    <hello-vuex :counter="counter"></hello-vuex> -->
    <h2>---------App content in moduleA----------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">update moduleA name</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="aUpdateName">update moduleA name async(actions)</button>


    <h2>---------App $store.state----------</h2>
    <h2>{{$store.state.counter}}</h2>
    <!-- <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button> -->
    <button @click="addition">+</button>
    <button @click="substraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">add student</button>

    <h2>--------App getters-------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stu.length}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.more2AgeStu(30)}}</h2>

    <h2>--------App : whether Info{} is responsive-------</h2>
    <h2>{{$store.state.Info}}</h2>
    <button @click="updateInfo">updateInfo</button>

    <h2>*******HelloVuex $store.state*******</h2>
    <hello-vuex/>

  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex'
  import {
    INCREMENT
  } from './store/mutation-types'


  export default {
    name: 'App',
    components: {
      HelloVuex
    },
    data() {
      return {
        message: 'Appvue',
        counter: 0
      }
    },
    methods: {
      addition() {
        this.$store.commit(INCREMENT)
      },
      substraction() {
        this.$store.commit('decrement')
      },
      addCount(count){
        // payload 負載 = pass parameter
        // 1.普通提交對象封裝
        // this.$store.commit('incrementCount', count)
        
        // 2.特殊提交對象封裝 --> object
        this.$store.commit({
          type: 'incrementCount',
          count
        })
      },
      addStudent(){
        const stu = {id: 114, name:'zoom', age:40}
        this.$store.commit('addStudent', stu)
      },
      updateInfo(){
        // this.$store.commit('updateInfo')

        // dispatch 'action'
        // this.$store.dispatch('updateInfo', () => {
        //   console.log('unpdate success');
        // })

        // 不夠優雅，訊息和回調函數寫到一塊
        // this.$store.dispatch('updateInfo', {
        //   message: 'I am some massage',
        //   success: () => {
        //     console.log('finish updating')
        //   }
        // })

        this.$store
          .dispatch('updateInfo', 'I am some massage')
          .then(res => {
            console.log('finish commiting');
            console.log(res);
          })
      },
      updateName(){
        this.$store.commit('updateName', 'updation in moduleA')
      },
      aUpdateName(){
        this.$store.dispatch('aUpdateName')
      }
    },
    computed: {
      // more20stu(){
      //   return this.$store.state.students.filter(s => 
      //     s.age>=25
      //   )
      // }
    }
  }
</script>

<style>

</style>
