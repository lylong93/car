<template>
  <div class='ok'>
    <router-link to="/news" tag="span" class="router">news</router-link>
    <router-link to="/find" tag="span" class="router">find</router-link>
    <router-link to="/me" tag="span" class="router">me</router-link>
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
  .router {}
}

</style>
