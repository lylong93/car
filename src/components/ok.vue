<template>
  <div>
    <m-nav/>
    <router-view/>
    <!-- <v-touch></v-touch> -->
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
