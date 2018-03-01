<template>
  <div class="register-wrapper">
    <div class="register-input">
      <span>账号</span>
      <l-input placeholder="输入账号" v-model="state.name" />
      <span class="msg">{{msg}}</span>
    </div>
    <div class="register-input">
      <span>密码</span>
      <l-input placeholder="输入密码" type="password" v-model="state.pwd" />
    </div>
    <div class="register-input">
      <span>确认</span>
      <l-input placeholder="再次输入密码" type="password" v-model="opwd" />
    </div>
    <div class="register-button">
      <l-button @click="rejister" :disabled="disabled">注册</l-button>
    </div>
  </div>
</template>
<script>
import input from '../base/input'
import button from '../base/button'
import api from '../api'
export default {
  data() {
    return {
      state: {
        name: '',
        pwd: ''
      },
      opwd: '',
      msg: ' '
    }
  },
  methods: {
    rejister() {
      if (this.state.pwd !== this.opwd) {
        this.msg = '两次输入不一样'
        return
      } else {
        api.Rejister(this.state)
          .then((data) => {
            return data.data
          })
          .then((data) => {
            this.msg = data.msg
          })
      }
    }
  },
  computed: {
    disabled() {
      if (this.state.name && this.state.pwd && this.opwd) {
        return false
      } else {
        this.msg = ''
        return true
      }
    }
  },
  components: {
    LButton: button,
    LInput: input
  }
}

</script>
<style lang="scss">
.register-wrapper {
  height: 70%;
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .register-input {
    position: relative;
    .msg {
      position: absolute;
      left: 50px;
      top: 50px;
      color: red;
    }
  }
  .register-button {
    position: absolute;
    width: 80%;
    bottom: 5%;
    left: 10%;
  }
}

</style>
