<template>
  <div class="upload-class">
    <img :src="url" height="100%" width="100%" v-if="have">
    <input type="file" ref="type" @change="change" :disabled="disabled" class="in">
    <span @click="clean" v-if="have">删除</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: '',
      have: false,
    }
  },
  props: {
    name: {
      type: String,
      default: '',
    }
  },
  methods: {
    change() {
      const o = URL.createObjectURL(this.$refs.type.files[0])
      this.have = true;
      this.url = o;
    },
    clean() {
      this.url = '';
      this.have = false;
    },
  },
  computed: {
    disabled() {
      if (this.have) {
        return "disabled"
      }
    }
  }
}

</script>
<style lang="scss">
@import'../style/index.scss';
.upload-class {
  height: 100px;
  width: 100px;
  background: red;
  position: relative;
  .in {
    display: inline-block;
    height: 100%;
    width: 100%;
    opacity: 0;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
  }
}

</style>
