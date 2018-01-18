<template>
  <div class="me-wrapper">
    <div class="me-avater">
    </div>
    <div class="me-other">
      <l-button @click="toAdd">
        发布活动
      </l-button>
      <l-button>
        我的收藏
      </l-button>
      <l-button>
        换肤
      </l-button>
      <l-button>
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
export default {
  methods: {
    toAdd() {
      this.$router.push('Add')
    }
  },
  components: {
    LButton: button,
    LInput: input,
    LUpload: upload
  },
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
