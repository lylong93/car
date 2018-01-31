<template>
  <div class="input-class">
    <input v-if='type==="text"' :name="name" class="input-class-text" :placeholder="placeholder" v-on:input="updata($event.target.value)" />
    <textarea class="input-class-textarea" :placeholder="placeholder" :name="name" :rows="textareaSize.rows" :cols="textareaSize.cols" v-else>
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
    },
    name: {
      type: String,
      default: ''
    },
    textareaSize: {
      type: Object,
      default () {
        return { rows: '5', cols: '50' }
      }
    }
  },
  methods: {
    updata(value) {
      this.$emit('input', value)
    }
  }
}

</script>
<style lang="scss">
@import'../style/index.scss';
.input-class {
  display: inline-block;
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
  .input-class-textarea {
    display: inline-block;
    padding: 5% 5%;
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
