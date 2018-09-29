<template>
  <div id="app">
    <router-view/>
    <mfooter></mfooter>
  </div>
</template>
<script>
  import Mfooter from './components/mfooter'
  export  default {
      components:{
          Mfooter,
      }
  }
</script>
<style lang="stylus">
@import "static/style/reset.css"
</style>
