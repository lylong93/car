<template>
  <div>
    <div class="okdd">
      <m-nav/>
      <router-view class="kkk" />
    </div>
    <!--     <div class="llll" ref="ok" @click="td">
      对话框
    </div> -->
  </div>
</template>
<script>
import Nav from './Nav.vue'
export default {
  components: {
    'm-nav': Nav
  },
  methods: {
    // tt() {
    //   this.$refs.ok.style.animation = 'tt 1s'
    //   this.$refs.ok.style.animationFillMode = 'forwards'
    // },
    // td() {
    //   this.$refs.ok.style.animation = 'td 1s'
    // }
  }
}

</script>
<style lang="scss">
.okdd {}

@keyframes tt {
  from {
    left: -100%;
  }
  to {
    left: 0;
  }
}

@keyframes td {
  from {
    left: 0%;
  }
  to {
    left: -100%;
  }
}

.kkk {
  position: absolute;
  top: 0;
  bottom: 60px;
  left: 0;
  right: 0;
}

.llll {
  height: 100%;
  width: 100%;
  background: yellow;
  position: absolute;
  left: -100%;
}

</style>
