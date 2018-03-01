<template>
  <div class="me-wrapper" v-if="this.name">
    <div class="me-avater">
      <div class="me-name">
        {{name}}
      </div>
    </div>
    <div class="me-other">
      <l-button @click="toAdd">
        发布活动
      </l-button>
      <l-button @click="toCollect">
        我的收藏
      </l-button>
      <l-button @click="logout">
        退出
      </l-button>
    </div>
  </div>
  <div v-else class="other-wrapper">
    <div class="onlydiv">
      <l-button @click="goEntry">是兄弟就去登录</l-button>
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
      this.$router.push('Add')
    },
    logout() {
      this.clean()
      api.Logout()
      window.location.reload()
    },
    goEntry() {
      this.$router.push('/')
    },
    toCollect() {
      this.$router.push('Collect')
    }

  },
  computed: {
    ...mapState([
      'name'
    ])
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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: linear-gradient(to bottom right, rgba(204, 102, 0, 1), rgba(204, 102, 0, .6), white);
    .me-name {
      width: 50%;
      font-size: 50px;
      font-weight: 900;
      color: white;
    }
  }
  .me-other {
    padding: 0 15%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}

.other-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .onlydiv {
    margin: 0 20%;
  }
}

</style>
