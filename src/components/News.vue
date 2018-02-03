<template>
  <div class='news-wrapper' ref="wrapper">
    <div class="flter-wrapper">
      <span>精品</span>
      <span>推荐</span>
    </div>
    <div class="news-main">
      <div v-for=" (item,e) in dataList" class='ever-news'>
        <div class="enews-bg">
          <img :src="item.bgimg" width="100%" height="150px">
        </div>
        <div class="enews-title">
          {{item.title}}
        </div>
        <div class="enews-user">
          <img class='enews-userimg' :src="item.userpic" width="100%" height="100%">
          <div>
            <div class='enews-other'>{{item.name}}</div>
            <div class='enews-other'>{{item.days}}</div>
          </div>
        </div>
      </div>
    </div>
    <div @click='loadMore'>more</div>
  </div>
</template>
<script>
import api from '../api'
export default {
  data() {
    return {
      message: 'ok',
      page: 1,
      elite: 'elite_ctime',
      dataList: []
    }
  },
  mounted() {
    // this.initdata()
    this.scroll()
  },
  methods: {
    initdata() {
      this._getdata(this.page, this.elite)
    },
    scroll() {
      const odiv = this.$refs.wrapper
      // 节流
      let TimeId
      odiv.addEventListener('scroll', function() {
        if (TimeId) {
          clearTimeout(TimeId)
        }
        TimeId = setTimeout(callback, 30)
      }, false)

      // 监听滚动事件
      const that = this
      const height = window.screen.height

      function callback() {
        let listenDom = that.$refs.wrapper.getBoundingClientRect()
        // dom已经滚动的加上屏幕高度 小于 dom的高度减去最底下一排的元素高
        if (Math.abs(listenDom.top) + height > listenDom.height - 50) {
          that.loadMore()
        }
      }
    },
    loadMore() {
      this.page += 1
      this._getdata(this.page, this.elite)
    },
    _getdata(page, elite) {
      api.getNews(page, elite)
        .then(res => {
          if (res.data.code === 1) {
            return
          } else {
            this.dataList = this.dataList.concat(res.data.data)
          }
        })
    }
  }
}

</script>
<style lang='scss'>
.news-wrapper {
  overflow: auto;
  .news-main {
    display: flex;
    flex-wrap: wrap;
    .ever-news {
      box-shadow: 3px 2px 1px rgb(153, 153, 102);
      width: 46%;
      height: 250px;
      margin: 5px;
      .enews-bg {
        background: red;
        height: 150px;
      }
      .enews-title {
        height: 50px;
        line-height: 50px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 15px;
        font-weight: bolder;
      }
      .enews-user {
        display: flex;
        justify-content: space-between;
        width: 80%;
        margin: 0 auto;
        .enews-userimg {
          width: 45px;
          height: 45px;
          border-radius: 50%;
        }
        .enews-other {
          height: 20px;
          width: 100%;
          margin: 3px 0;
          line-height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 15px;
        }
      }
    }
  }
}

</style>
