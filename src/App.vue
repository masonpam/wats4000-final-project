<template>
  <div id="app">
    <YesorNo/>
  </div>
</template>

<script>
import YesorNo from './components/YesorNo';

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
  background-color: #fbffed;
  padding: 40px;
}
</style>