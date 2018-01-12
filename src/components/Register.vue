<template>
  <div class="longin-wrapper">
    <div class="login-input">
      头像
    </div>
    <div class="login-input">
      用户
      <input class="" type="text" v-model="state.name" name="fname" placeholder="输入用户">
    </div>
    <div class="login-input">
      密码
      <input class="" type="text" v-model="state.pwd" name="lname" placeholder="输入密码">
    </div>
    <div class="login-input">
      密码
      <input class="" type="text" name="lname" placeholder="确认密码">
    </div>
    <cube-popup type="my-popup" ref="myPopup">
    </cube-popup>
    <div class="login-button">
      <cube-button @click="rejister">注册</cube-button>
    </div>
  </div>
</template>
<script>
import { Button, Tip } from 'cube-ui'
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

  methods: {
    rejister() {
      api.Rejister(this.state)
        .then((d) => {
          console.log(d)
        })
    }
  },
  components: {
    CubeButton: Button,
    CubePopup: Tip
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
