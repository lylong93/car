<template>
  <div class="back-class">
    <div @click="back" class="back">
      <i class="icon iconfont">&#xe610;</i>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}

</script>
<style lang="scss">
@import'../style/index.scss';
.back-class {
  height: 30px;
  background: rgb(255, 133, 13);
  position: relative;
  .back {
    position: absolute;
    left: 5%;
  }
}

</style>
