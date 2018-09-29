<template>
  <div class="footer">
    <router-link to="home" ><i class="iconfont icon-index"></i></router-link>
    <router-link to="search" ><i class="iconfont icon-search"></i></router-link>
    <router-link to="order"><i class="iconfont icon-shopping"></i></router-link>
    <router-link to="persona"><i class="iconfont icon-person2"></i></router-link>
  </div>
</template>

<script>
    export default {
        name: "mfooter"
    }
</script>

<style scoped lang="stylus">
  .footer
    position fixed
    bottom 0
    left 0
    width 100%
    height 40px
    display: flex
    justify-content space-around
    align-items center
    background-color #fff
</style>