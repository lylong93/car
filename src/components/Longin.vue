<template>
  <div class="longin-wrapper">
    <div class="login-input">
      用户
      <input class="" type="text" v-model="state.user" name="fname" placeholder="输入用户">
    </div>
    <div class="login-input">
      密码
      <input class="" type="text" v-model="state.password" name="lname" placeholder="输入密码">
    </div>
    <div class="login-button">
      <cube-button @click="login">登录</cube-button>
    </div>
  </div>
</template>
<script>
import { Button } from 'cube-ui'
export default {
  data() {
    return {
      state: {
        user: '',
        password: ''
      }
    }
  },
  components: {
    CubeButton: Button
  },
  methods: {
    login() {
      this.$router.push({ name: 'ok', params: this.state })
    }
  }
}

</script>
<style lang="scss">
.longin-wrapper {
  margin: 0 15px;
  .login-input {
    height: 50px;
    line-height: 50px;
    margin: 10px;
  }
  .login-button {
    width: 100%;
    position: absolute;
    bottom: 20px;
  }
}

</style>
