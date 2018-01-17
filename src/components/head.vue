<template>
  <div class="add-wrapper">
  </div>
</template>
<script>
import api from '../api'
import input from '../base/input'
import button from '../base/button'
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
  },

}

</script>
<style lang='scss'>
@import'../style/index.scss';
.add-wrapper {
  .add-form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}

</style>
