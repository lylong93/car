<template>
  <div class="mask-wrapper" v-if="show">
    <div @click="maskclose">关闭</div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    ss: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: false,
    }
  },
  watch: {
    ss() {
      console.log(this.ss)
      this.show = this.ss
    }
  },
  methods: {
    maskclose() {
      this.show = false
    }
  }
}

</script>
<style lang="scss">
@import'../style/index.scss';
.mask-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background: rgba(0, 0, 0, .2);
}

</style>
