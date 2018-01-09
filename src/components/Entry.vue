<template>
  <div>
    <div class="icon">icon</div>
    <div class="tab">
      <div v-for="(item,index) in tabs" @click="tab(index)" class="e-tab" :class="{active:index == num}">
        {{item}}
      </div>
    </div>
    <div>
      <div v-show="num===0 ">
        <m-Longin/>
      </div>
      <div v-show="num===1 ">
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
      console.log(this.num)
    },
    isActive() {
      return false
    }
  },
  computed: {

  },
  components: {
    'm-Longin': Longin,
    'm-Register': Register
  }
}

</script>
<style lang="scss">
.icon {
  height: 250px;
  background: #968f7e;
}

.tab {
  display: flex;
  height: 50px;
  line-height: 50px;
  background: #968f7e;
  font-size: 30px;
  .e-tab {
    width: 50%;
    margin: 0 auto;
  }
}

.active {
  border-bottom: 3px solid red;
}

</style>
