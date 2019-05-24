<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name:'App'
}
</script>

<style lang="css" scoped>
  @import  './assets/css/base.css';
  #app{
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
