<template>
  <div>
    <div class="find-wrapper" ref="findWwrapper">
      <div class="main" @click="show" ref="main">
        <img src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2522026432,1558022678&fm=27&gp=0.jpg' ref="img">
        <div class="main-title">我是题目而已</div>
      </div>
      <div class="tab" ref="tab">
        <div v-if="open">
          <span>收藏</span>
          <span>对话</span>
        </div>
        <div v-else>
          <span @click="prev">上一个</span>
          <span @click="next">下一个</span>
        </div>
      </div>
      <div class="detali" ref="detali">
        <h1>ok</h1>
        <h1>ok</h1>
        <h1>ok</h1>
        <h1>ok</h1>
        <h1>ok</h1>
        <h1>ok</h1>
        <h1>ok</h1>
        <h1>ok</h1>
        <h1>ok</h1>
      </div>
    </div>
    <div class="close" @click="close">关闭</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: false
    }
  },
  methods: {
    show() {
      this.open = true
      this._open()
    },
    close() {
      this.open = false
      this._close()
    },
    prev() {
      this.$refs.findWwrapper.style.animation = 'route1 1s'
    },
    next() {
      this.$refs.findWwrapper.style.animation = 'route2 1s'
      this.$refs.findWwrapper.addEventListener('animationend', function() {
        this.$refs.findWwrapper.style.animation = null
      }.bind(this))
    },
    _open() {
      this.$refs.findWwrapper.style.overflow = 'scroll'
      this.$refs.main.style.animation = 'movein 1s'
      this.$refs.main.style.animationFillMode = 'forwards'
      this.$refs.detali.style.animation = 'dein 1s'
      this.$refs.detali.style.animationFillMode = 'forwards'

      this.$refs.tab.style.animation = 'tabin 1s'
      this.$refs.tab.style.animationFillMode = 'forwards'

      this.$refs.img.style.animation = "imgi 1s"
      this.$refs.img.style.animationFillMode = 'forwards'
    },
    _close() {
      this.$refs.findWwrapper.scrollTop = 0
      this.$refs.findWwrapper.style.overflow = 'hidden'
      this.$refs.main.style.animation = 'moveout 1s'
      this.$refs.detali.style.animation = 'deout 0.7s'

      this.$refs.tab.style.animation = 'tabout 1s'
      this.$refs.img.style.animation = "imgo 1s"
    }
  }
}

</script>
<style lang='scss'>
.find-wrapper {
  position: absolute;
  top: 0;
  bottom: 60px;
  width: 100%;
  overflow: hidden; // background: black;
  .main {
    height: 50%;
    width: 80%; // background: yellow;
    margin: 0 auto;
    position: relative;
    top: 20%;
    overflow: hidden;
    img {
      position: absolute;
      height: 100%;
      top: 0;
      width: 100%; // opacity: 0.3;
    }
    .main-title {
      position: absolute;
      top: 10%;
      left: 10%;
      color: white;
      font-size: 50px;
    }
  }

  .detali {
    // height: 900px;
    width: 60%;
    background: blue;
    margin: 0 auto;
    position: relative; // display: none;
    opacity: 0;
    font-size: 100px;
  }
  .tab {
    background: rgb(150, 143, 126);
    height: 60px;
    width: 80%;
    margin: 0 auto;
    position: relative;
    bottom: -20%;
    z-index: 10;
  }
}

.close {
  position: absolute;
  top: 0;
  z-index: 10;
}

@keyframes route1 {
  from {
    transform: rotateZ(0deg) scale(0);
  }
  to {
    transform: rotateZ(-1080deg) scale(1);
  }
}

@keyframes route2 {
  from {
    transform: rotateZ(0deg) scale(0);
  }
  to {
    transform: rotateZ(1080deg) scale(1);
  }
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
    width: 80%;
  }
}

@keyframes dein {
  from {
    top: 20%;
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
    opacity: 1;
  }
  to {
    top: 20%;
    opacity: 0;
  }
}

@keyframes tabin {
  from {
    position: fixed;
    bottom: 27%;
    left: 10%;
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
    bottom: 27%;
    left: 10%;
  }
}

@keyframes imgi {
  from {
    position: absolute; // top: -50%;
    top: 0; // opacity: 1;
  }
  to {
    position: absolute; // top: -50%;
    top: 0;
    left: 0;
    opacity: 1;
  }
}

@keyframes imgo {
  from {
    position: absolute;
    top: 0;
    left: 0%;
  }
  to {
    position: absolute;
    top: 0;
  }
}

</style>
