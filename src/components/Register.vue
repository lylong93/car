<template>
  <div class="register-wrapper">
    <div class="register-input">
      账号
      <l-input placeholder="输入账号" v-model="state.name" />
    </div>
    <div class="register-input">
      密码
      <l-input placeholder="输入密码" v-model="state.pwd" />
    </div>
    <div class="register-input">
      确认
      <l-input placeholder="再次输入密码" v-model="opwd" />
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
    }
  },
  methods: {
    rejister() {
      if (this.state.pwd != this.opwd) {
        return
      } else {
        api.Rejister(this.state)
          .then((d) => {
            console.log(d)
          })
      }

    }
  },
  computed: {
    disabled() {
      if (this.state.name && this.state.pwd && this.opwd) {
        return false
      } else {
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
  .register-button {
    position: absolute;
    width: 80%;
    bottom: 5%;
    left: 10%;
  }
}

</style>
