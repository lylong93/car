<template>
  <div>
    <m-nav/>
    <router-view class="kkk" />
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
.kkk {
  position: absolute;
  top: 0;
  bottom: 60px;
  left: 0;
  right: 0;
}

</style>
