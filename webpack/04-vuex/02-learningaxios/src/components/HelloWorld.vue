<template>
  <div id="app">
    <h2>{{result}}</h2>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'HelloWorld',
    components: {

    },
    data(){
      return{
        result: ''
      }
    },
    created(){
      axios({
        // url: 'httpbin.org/'
        url: 'http://123.207.32.32:8000/home/multidata',
        method: 'get'
      }).then(res => {
        // console.log(res);
        this.result = res;
      })
    }
  }
</script>

<style>

</style>