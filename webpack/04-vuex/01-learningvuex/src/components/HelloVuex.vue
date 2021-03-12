<template>
  <div id="app">
    <!-- <h2>----------HelloVuex-------</h2>
    <h2>{{counter}}</h2> -->

    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'HelloVuex',
    props: {
      counter: Number
    }
  }
</script>

<style>

</style>