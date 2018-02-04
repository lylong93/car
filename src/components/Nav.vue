<template>
  <div class='ok'>
    <router-link to="/news" tag="span" class="router"><i class="icon iconfont er">&#xe61a;</i></router-link>
    <router-link to="/find" tag="span" class="router"><i class="icon iconfont er">&#xe66b;</i></router-link>
    <router-link to="/me" tag="span" class="router"><i class="icon iconfont er">&#xe686;</i></router-link>
  </div>
</template>
<script>
export default {}

</script>
<style lang='scss'>
.ok {
  display: flex;
  height: 60px;
  width: 100%;
  background: #008972;
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: space-around;
  .router {
    text-align: center;
    line-height: 60px;
  }
  .er {
    font-size: 35px;
  }
  .router-link-active {
    color: #606;
  }
}

</style>
