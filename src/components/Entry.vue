<template>
  <div class="wrapper">
    <div class="icon">
    </div>
    <div class="tab">
      <div v-for="(item,index) in tabs" @click="tab(index)" class="e-tab" :class="{active:index == num}">
        {{item}}
      </div>
    </div>
    <div class="bottm">
      <div v-show="num===0 " class="ttm">
        <m-Longin />
      </div>
      <div v-show="num===1 " class="ttm">
        <m-Register/>
      </div>
    </div>
  </div>
</template>
<script>
import Longin from './Longin'
import Register from './Register'
export default {
  data() {
    return {
      tabs: ['登录', '注册'],
      num: 0
    }
  },
  methods: {
    tab(index) {
      this.num = index
    },
    isActive() {
      return false
    }
  },
  computed: {

  },
  components: {
    'm-Longin': Longin,
    'm-Register': Register,
  }
}

</script>
<style lang="scss">
.wrapper {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .icon {
    height: 30%;
    width: 100%;
    background: #968f7e;
  }
  .tab {
    display: flex;
    height: 10%;
    background: #968f7e;
    font-size: 30px;
    .e-tab {
      width: 50%;
      margin: 0 auto;
    }
  }
  .bottm {
    height: 60%;
    .ttm {
      height: 100%;
    }
  }
  .active {
    border-bottom: 3px solid red;
  }
}

</style>
