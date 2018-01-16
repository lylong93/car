<template>
  <div class="add-wrapper">
    <div class="add-img">
      图片
      <input type="file">
    </div>
    <div class="add-addres">题目
      <input type="text" v-model="state.title">
    </div>
    <div class="add-addres">地址
      <input type="text" v-model="state.address">
    </div>
    <div class="add-time">时间
      <input type="text" v-model="state.time">
    </div>
    <div class="add-main">内容
      <textarea placeholder="活动内容" v-model="state.main"></textarea>
    </div>
    <div @click="submit">发布活动</div>
    <div>
      <form enctype="multipart/form-data" ref="for">
        <input type="file" name="avatar">
        <input type="text" v-model="state.time" name="text">
        <textarea placeholder="活动内容" v-model="state.main" name="ddd"></textarea>
        <input value="提交" @click='tijiao'>
      </form>
    </div>
  </div>
</template>
<script>
import api from '../api'
export default {
  data() {
    return {
      state: {
        address: '',
        time: '',
        main: '',
        title: ''
      }
    }
  },
  methods: {
    submit() {
      api.Publish(this.state)
        .then((data) => {
          console.log(data);
        })
    },
    tijiao() {
      const form = this.$refs.for
      let data = new FormData(form);
      api.dd(data)
    }
  }
}

</script>
<style lang='scss'>
@import'../style/index.scss';

</style>
