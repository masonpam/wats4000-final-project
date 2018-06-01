<template>
  <div id="app">
    <h1>Yes or No.  Get the answers!</h1>
    <router-view/>
  </div>
</template>

<script>
import YesorNo from '@/components/YesorNo'

export default {
  name: 'App',
  components: {
    YesorNo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
