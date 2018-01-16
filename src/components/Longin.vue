<template>
  <div class="longin-wrapper">
    <div class="login-input">
      <span>账号</span>
      <l-input placeholder="输入账号" v-model="state.name" />
    </div>
    <div class="login-input">
      <span>密码</span>
      <l-input placeholder="输入密码" v-model="state.pwd" />
    </div>
    <div class="login-button">
      <l-button @click="login">登录</l-button>
    </div>
  </div>
</template>
<script>
// import { Button } from 'cube-ui'
import button from '../base/button'
import input from '../base/input'
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
    LButton: button,
    LInput: input
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
  height: 70%;
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .login-button {
    position: absolute;
    width: 100%;
    bottom: 1%;
    left: 0;
  }
}

</style>
