<template>
  <div class="input-class">
    <input v-if='type==="text"' class="input-class-text" :placeholder=placeholder @focus='ok' @blur="out" />
    <textarea v-else>
    </textarea>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  methods: {
    ok() {
      console.log('ok')
    },
    out() {
      console.log('out')
    }
  }
}

</script>
<style lang="scss">
@import'../style/index.scss';
.input-class {
  display: inline-block; // font-size: 20px;
  // width: 100%;
  position: relative;
  .input-class-text {
    display: inline-block;
    padding: 5% 20%;
    width: 60%;
    border: 1px solid yellow;
    border-radius: 5px;
    outline: none;
    text-align: left;
    line-height: 1;
    font-size: inherit;
    &:focus {
      border: 1px solid red;
    }
  }
}

</style>
