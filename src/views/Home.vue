<template>
  <div>
      <div class="adress"> <p>首都图书馆</p></div>
      <div class="search"><a class="searchbtn"><i class="iconfont icon-search">请输入商家或食物</i></a></div>
    <swiper class="swiper">
      <div class="swiper-div" slot="slot1">
      <div class="swiper-item">
        <a>
          <img src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
          <span>美食</span>
        </a>
      </div>
      <div class="swiper-item">
        <a>
          <img src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
          <span>美食</span>
        </a>
      </div>
      <div class="swiper-item">
        <a>
          <img src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
          <span>美食</span>
        </a>
      </div>
      <div class="swiper-item">
        <a>
          <img src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
          <span>美食</span>
        </a>
      </div>
      <div class="swiper-item">
        <a>
          <img src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
          <span>美食</span>
        </a>
      </div>
    </div>
    </swiper>
    <shop-list></shop-list>
  </div>
</template>

<script>
  import Swiper from '../components/swiper'
  import ShopList from '../components/ShopList/ShopList'

  export default {
  name: 'home',
      data(){
      return{

      }
      },
  components: {
      Swiper,
      ShopList,

  },
      computed:{
          shops(){
          return this.$store.state.categorys
       }
      },
      mounted(){
          this.$store.dispatch('getShops')
          // this.$store.dispatch('increment')
      }
}
</script>
<style scoped lang="stylus">

    .adress,.search
      background-color #ff2d4b
      opacity .9
      color #fff
      box-sizing inherit
      padding  15px 20px
    .search
      position sticky
      top 0px
      z-index 999
      .searchbtn
        display flex
        width 100%
        height 30px
        background-color white
        justify-content center
        align-items center
        color darkgrey
  .swiper
    height 180px
    position relative
    .swiper-div
      .swiper-item
        box-sizing inherit
        float left
        height 60px
        width 20%
        padding 10px
        a
          display block
          width 100%
          height 100%
          img
            display block
            width 100%
            height 100%
          span
            display block
            text-align center

</style>