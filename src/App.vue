<template>
  <div id="app">
    <DroneList />
  </div>
</template>

<script>
import DroneList from './components/DroneList'
//Array of Items to be paged



export default {
  name: 'App',
  components: {
    DroneList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
