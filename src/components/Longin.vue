<template>
  <div class="longin-wrapper">
    <div class="login-input">
      用户
      <input class="" type="text" v-model="state.name" name="fname" placeholder="输入用户">
    </div>
    <div class="login-input">
      密码
      <input class="" type="text" v-model="state.pwd" name="lname" placeholder="输入密码">
    </div>
    <div class="login-button">
      <cube-button @click="login">登录</cube-button>
    </div>
  </div>
</template>
<script>
// import { Button } from 'cube-ui'
import button from '../base/button'
import api from '../api'
export default {
  data() {
    return {
      state: {
        name: '',
        pwd: ''
      }
    }
  },
  components: {
    CubeButton: button
  },
  methods: {
    login() {
      api.Login(this.state)
        .then((data) => {
          return data.data
        })
        .then((data) => {
          switch (data.err) {
            case 1:
              console.log(data.msg)
              break
            case 2:
              console.log(data.msg)
              break
            case 3:
              console.log(data.msg)
              break
            default:
              console.log(data)
          }
        })
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
