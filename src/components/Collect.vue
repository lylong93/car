<template>
  <div>
    <LBack/>
    <div v-if="this.collect.length !==0 ">
      <div v-for="item in this.collect">
        <div>{{item}}</div>
      </div>
    </div>
    <div v-else>
      <div>并没有收藏</div>
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
    ]),
  },
  components: {
    LBack: back
  }
}

</script>
<style lang='scss'>
@import'../style/index.scss';

</style>
