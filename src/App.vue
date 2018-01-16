<template>
  <div id="app">
    <!-- <m-nav/> -->
    <router-view/>
  </div>
</template>
<script>
import Nav from './components/Nav.vue'
export default {
  name: 'app',
  components: {
    'm-nav': Nav
  }
}

</script>
<style lang='scss'>
@import './style/index.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
