<template>
  <div>
    <LBack/>
    <div v-if="this.collect.length !==0 ">
      <div class="head">收藏列表</div>
      <div v-for="(item,index) in this.collect">
        <div class="act">{{index+1}}~{{item}}</div>
      </div>
    </div>
    <div v-else>
      <div class="nocollect">并没有收藏</div>
    </div>
  </div>
</template>
<script>
import back from '../base/back'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'collect'
    ])
  },
  components: {
    LBack: back
  }
}

</script>
<style lang='scss'>
@import'../style/index.scss';
.head {
  margin: 10% 0;
  font-size: 30px;
  font-weight: 700;
}

.act {
  font-size: 20px;
  margin: 10% 0;
}

.nocollect {
  margin: 10%;
}

</style>
