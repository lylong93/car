<template>
  <div class="register-wrapper">
    <div class="register-input">
      账号
      <l-input placeholder="输入账号" />
    </div>
    <div class="register-input">
      密码
      <l-input placeholder="输入密码" />
    </div>
    <div class="register-input">
      确认
      <l-input placeholder="再次输入密码" />
    </div>
    <div class="register-button">
      <l-button @click="rejister" :disabled="true">注册</l-button>
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
  .register-button {
    position: absolute;
    width: 100%;
    bottom: 1%;
    left: 0;
  }
}

</style>
