<template>
  <div class='ok'>
    <router-link to="/news" tag="span">news</router-link>
    <router-link to="/find" tag="span">find</router-link>
    <router-link to="/me" tag="span">me</router-link>
  </div>
</template>
<script>
export default {}

</script>
<style lang='scss'>
.ok {
  height: 60px;
  width: 100%;
  background: red;
  position: fixed;
  bottom: 0;
  left: 0;
}

</style>
