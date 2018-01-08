<template>
  <div>
    登陆
    <input type="text" name="fname">
    <br> Last name:
    <input type="text" name="lname">
    <br>
    <cube-button @click="login">登录</cube-button>
  </div>
</template>
<script>
import { Button } from 'cube-ui'
export default {
  components: {
    CubeButton: Button
  },
  methods: {
    login() {
      this.$router.push('ok')
    }
  }
}

</script>
<style lang="scss">


</style>
