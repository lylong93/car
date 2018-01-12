<template>
  <div>
    <m-nav/>
    <router-view/>
  </div>
</template>
<script>
import Nav from './Nav.vue'
export default {
  components: {
    'm-nav': Nav
  }
}

</script>
<style lang="scss">


</style>
