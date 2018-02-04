<template>
  <div class="find-wrapper" ref="findWwrapper">
    <div class="main" @click="show" ref="main">
      <img :src="`http://${data.bgurl}`" ref="img">
      <div class="main-title">{{data.title}}</div>
    </div>
    <div class="tab" ref="tab">
      <div v-if="open" class="otab">
        <l-button class="tab-every" v-if="this.name">
          <span v-if="d" @click="tocollect">收藏</span>
          <span v-else class="has">已收藏</span>
        </l-button>
        <l-button class="tab-every" @click="goEntry" v-else>去登录</l-button>
      </div>
      <div v-else class="otab">
        <l-button @click="prev" class="tab-every">上一个</l-button>
        <l-button @click="next" class="tab-every">下一个</l-button>
      </div>
    </div>
    <div class="detali" ref="detali">
      <div class="detali-head">
        <span class="dm">时间</span>{{data.time}}
        <span class="dm">地点</span>{{data.address}}
        <div class="detali-main">
          <div class="dm">活动内容</div>
          <p>{{data.main}}</p>
        </div>
      </div>
    </div>
    <div class="close" @click="close" v-if="open"><i class="icon iconfont">&#xe610;</i>
    </div>
  </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import button from '../base/button'
import api from '../api'
export default {
  data() {
    return {
      data: {},
      open: false,
      skip: 0,
      more: true
    }
  },
  mounted() {
    this.get(this.skip)
  },
  methods: {
    ...mapMutations([
      'addCollect'
    ]),
    tocollect() {
      this.addCollect(this.data.title);
    },
    show() {
      this.open = true
      this._open()
    },
    close() {
      this.open = false
      this._close()
    },
    prev() {
      if (this.skip === 0) return
      this.more = true
      this.skip -= 1
      this.get(this.skip)
      this.$refs.findWwrapper.style.animation = 'route1 1s'
    },
    goEntry() {
      this.$router.push('/')
    },
    next() {
      if (!this.more) return
      this.skip += 1
      this.get(this.skip)
      this.$refs.findWwrapper.style.animation = 'route2 1s'
      this.$refs.findWwrapper.addEventListener('animationend', function() {
        this.$refs.findWwrapper.style.animation = null
      }.bind(this))
    },
    get(skip) {
      api.Getaction(skip)
        .then((data) => {
          if (data.data.err === 1) {
            this.more = false
            return
          }
          this.data = data.data.data[0]
        })
    },
    _open() {
      this.$refs.findWwrapper.style.overflow = 'scroll'
      this.$refs.main.style.animation = 'movein 1s'
      this.$refs.main.style.animationFillMode = 'forwards'
      this.$refs.detali.style.animation = 'dein 1s'
      this.$refs.detali.style.animationFillMode = 'forwards'

      this.$refs.tab.style.animation = 'tabin 1s'
      this.$refs.tab.style.animationFillMode = 'forwards'

      this.$refs.img.style.animation = 'imgi 1s'
      this.$refs.img.style.animationFillMode = 'forwards'
    },
    _close() {
      this.$refs.findWwrapper.scrollTop = 0
      this.$refs.findWwrapper.style.overflow = 'hidden'
      this.$refs.main.style.animation = 'moveout 1s'
      this.$refs.detali.style.animation = 'deout 0.7s'

      this.$refs.tab.style.animation = 'tabout 1s'
      this.$refs.img.style.animation = 'imgo 1s'
    }
  },
  computed: {
    ...mapState([
      'name',
      'collect'
    ]),
    d() {
      if (this.collect.indexOf(this.data.title) === -1) {
        return true
      } else {
        return false
      }
    }
  },
  components: {
    LButton: button
  }
}

</script>
<style lang='scss'>
.find-wrapper {
  position: absolute;
  top: 0;
  bottom: 60px;
  width: 100%;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  .main {
    height: 50%;
    width: 80%;
    margin: 0 auto;
    position: relative;
    top: 20%;
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: hidden;
    box-shadow: 10px 10px 10px black;
    img {
      height: 100%;
      top: 0;
      width: 100%;
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
    width: 60%;
    margin: 0 auto;
    position: relative;
    opacity: 0;
    .detali-head {
      margin: 10% 0;
      .dm {
        font-size: 20px;
        font-weight: 700;
        color: blue;
      }
    }
    .detali-main {
      margin: 10% 0;
      line-height: 35px;
    }
  }
  .tab {
    background: rgb(150, 143, 126);
    height: 60px;
    width: 80%;
    margin: 0 auto;
    position: relative;
    bottom: -20%;
    z-index: 10;
    flex-direction: row;
    .otab {
      display: flex;
      justify-content: space-around;
      .tab-every {
        width: 40%;
        height: 50%;
        margin: 10px 0 0 0;
        .has {
          color: black;
        }
      }
    }
  }
}



.close {
  position: fixed;
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

//detail
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

// tab
@keyframes tabin {
  from {
    position: fixed;
    bottom: 26%;
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
    bottom: 26%;
    left: 10%;
  }
}

@keyframes imgi {
  from {
    // top: -50%;
    top: 0; // opacity: 1;
  }
  to {
    // top: -50%;
    top: 0;
    left: 0;
    opacity: 1;
  }
}

@keyframes imgo {
  from {

    top: 0;
    left: 0%;
  }
  to {

    top: 0;
  }
}

</style>
