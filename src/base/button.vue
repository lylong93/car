<template>
  <button class="button-class" @click="handleClick" :class="Dclass">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    Dclass() {
      return { 'hidden': this.disabled }
    }
  },
  methods: {
    handleClick(e) {
      if (this.disabled) {
        e.preventDefault()
        e.stopPropagation()
        return
      }
      this.$emit('click', e)
    }
  }
}

</script>
<style lang="scss">
@import'../style/index.scss';
.button-class {
  padding: 2%;
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  line-height: 1;
  border-radius: 5px; // text-align: center;
  color: $font-color;
  font-size: $font-size;
  background: $linght-color;
  &:active {
    background: $linght-color;
    opacity: 0.8;
  }
}

.hidden {
  background: $hidden-color;
  cursor: auto; // 解决移动端button无法禁止默认点击动作样式
  &:active {
    background: $hidden-color;
    opacity: 1;
  }
}

</style>
