<template>
  <div class="test-class" @dragover="hai($event)" @drop="drop($event)">
    <div draggable="true" class="ok" @dragstart="ok($event)">ok</div>
  </div>
</template>
<script>
import './font/iconfont.js'
export default {
  methods: {
    change() {},
    hai(e) {
      e.preventDefault()
    },
    drop(e) {
      e.preventDefault();
      var data = e.dataTransfer.getData("Text");
      // console.log(e);
      e.target.appendChild(document.getElementById(data));
    },
    ok(e) {
      console.log(e)
      e.dataTransfer.setData("Text", 'o');
    }
  }
}

</script>
<style lang="scss">
.test-class {
  width: 100%;
  height: 100%;
  background: yellow;
  border: none;
  outline: none;
  .ok {
    width: 20%;
    height: 20%;
    background: red;
  }
}

</style>
