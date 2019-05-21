<template>
  <div id="app">
    <cherryBlossoms/>
  </div>
</template>

<script>
import cherryBlossoms from './components/cherryBlossoms.vue'
export default {
  name: 'app',
  components: {
    cherryBlossoms
  }
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
