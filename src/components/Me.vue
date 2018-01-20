<template>
  <div class="me-wrapper">
    <div class="me-avater">
      {{name}}
    </div>
    <div class="me-other">
      <l-button @click="toAdd">
        发布活动
      </l-button>
      <l-button>
        换肤
      </l-button>
      <l-button @click="logout">
        退出
      </l-button>
    </div>
  </div>
</template>
<script>
import api from '../api'
import input from '../base/input'
import button from '../base/button'
import upload from '../base/upload'
import { mapState, mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations([
      'clean'
    ]),
    toAdd() {
      // console.log(socket)
      this.$router.push('Add')
    },
    logout() {
      this.clean();
      window.location.reload()
    }
  },
  beforeCreate() {
    console.log(this.name)
  },
  created() {
    // if (this.name === null) {
    //   this.$router.push('Ok')
    // }
    // console.log(this.name)
  },
  computed: {
    ...mapState([
      'name'
    ]),
  },
  components: {
    LButton: button,
    LInput: input,
    LUpload: upload
  }
}

</script>
<style lang='scss'>
.me-wrapper {
  .me-avater {
    height: 40%;
  }
  .me-other {
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}

</style>
