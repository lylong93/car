<template>
  <div class="find-wrapper">
    <div class="ll">
      <div class="main" @click="show" ref="test">nihoa
      </div>
      <div class="detali" ref="detali">okok</div>
      <div class="tab" ref="tab">选项</div>
    </div>
    <div class="close" @click="out">关闭</div>
  </div>
</template>
<script>
export default {
  methods: {
    onSwipeLeft() {
      console.log('ok')
      this.$router.push('news')
    },
    show() {
      this.$refs.test.style.animation = 'movein 1s';
      this.$refs.test.style.animationFillMode = 'forwards';
      this.$refs.detali.style.animation = 'dein 1s';
      this.$refs.detali.style.animationFillMode = 'forwards';
      // this.$refs.detali.style.display = "block";
      this.$refs.tab.style.animation = 'tabin 1s'
      this.$refs.tab.style.animationFillMode = 'forwards';
    },
    out() {
      this.$refs.test.style.animation = 'moveout 1s';
      this.$refs.detali.style.animation = 'deout 1s';
      this.$refs.detali.style.display = "none";
      this.$refs.tab.style.animation = 'tabout 1s'
    }
  }
}

</script>
<style lang='scss'>
.find-wrapper {}

.ll {
  position: absolute;
  top: 0;
  bottom: 60px;
  width: 100%;
  overflow: hidden;
  .main {
    height: 50%;
    width: 60%;
    background: yellow;
    margin: 0 auto;
    position: relative;
    top: 20%;
  }
  .detali {
    height: 500px;
    width: 300px;
    background: blue;
    margin: 0 auto;
    position: relative; // top: 150px;
    display: none; // opacity: 0;
    overflow: scroll
  }
  .tab {
    background: rgb(150, 143, 126);
    height: 60px;
    width: 60%;
    margin: 0 auto;
    position: relative;
    bottom: -20%; // top: 20%;
  }
}


.close {
  position: fixed;
  top: 0;
}


@keyframes movein {
  from {}
  to {
    top: 0px;
    width: 100%;
  }
}

@keyframes moveout {
  from {
    top: 0px;
    width: 100%;
  }
  to {
    top: 20%;
    width: 60%;
  }
}

@keyframes dein {
  from {
    top: 150px;
    opacity: 0;
  }
  to {
    top: 0px;
    opacity: 1;
  }
}

@keyframes deout {
  from {
    top: 0px;
  }
  to {
    top: 150px;
  }
}

@keyframes tabin {
  from {
    position: fixed;
    bottom: 30%;
    left: 20%;
  }
  to {
    position: fixed;
    background: yellow;
    width: 100%;
    bottom: 0;
    left: 0;
  }
}

@keyframes tabout {
  from {
    position: fixed;
    background: yellow;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  to {
    position: fixed;
    bottom: 30%;
    left: 20%;
  }
}

</style>
