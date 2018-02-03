<template>
  <div class="add-wrapper">
    <l-back></l-back>
    <form class="add-form" ref="for">
      <div>
        <l-upload name="avatar" />
      </div>
      <div>
        题目
        <l-input v-model="state.text" name='title' />
      </div>
      <div>
        地址
        <l-input v-model="state.address" name='address' />
      </div>
      <div>
        时间
        <l-input v-model="state.time" name='time' />
      </div>
      <div class="t">
        输入内容
        <l-input type="tes" v-model="state.main" name='main' />
      </div>
    </form>
    <div>{{d}}</div>
    <l-button @click='add' type="sublime">提交</l-button>
  </div>
</template>
<script>
import api from '../api'
import input from '../base/input'
import button from '../base/button'
import upload from '../base/upload'
import back from '../base/back'
export default {
  data() {
    return {
      state: {
        address: '',
        time: '',
        main: '',
        title: ''
      },
      d: ''
    }
  },
  methods: {
    add(e) {
      const form = this.$refs.for
      let data = new FormData(form)
      api.Publish(data)
        .then((data) => {
          return data.data
        })
        .then((data) => {
          console.log(data)
          if (data.err === 0) {
            this.$router.push('Find')
          }
        })
    }
  },
  components: {
    LButton: button,
    LInput: input,
    LUpload: upload,
    LBack: back
  }
}

</script>
<style lang='scss'>
@import'../style/index.scss';
.add-wrapper {
  .add-form {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}

</style>
