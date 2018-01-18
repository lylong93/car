<template>
  <div class="back-class" @click="back">
    返回
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
.back-class {}

</style>
