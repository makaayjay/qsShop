<template>
    <div>
        <div class="cartwrap" >
            <div class="carticon" v-if="cartFoods.length>0" @click.stop>
                <div class="iconfont icon-cart iconcart" @click.stop="isShowList=!isShowList"></div>
                <i class="cartcount">{{totalCount}}</i>
            </div>
            <div class="carticonoff" v-else>
                <div class="iconfont icon-cart iconcart" ></div>
            </div>
            <div class="totalpirceclass">
                <h4 v-if="cartFoods.length>0">{{"总共"+totalPrice+"元"}}</h4>
                <h4 v-else>未选购商品</h4>
                <p>另需运输费{{info.deliveryPrice}}元</p>
            </div>
            <div class="submit-btn">
                <p>结算</p>
            </div>
        </div>

        <div class="foodlistwrap" v-show="isShowList" @click="isShowList=!isShowList">
            <transition name="list">
                <div class="foodlist" @click.stop v-show="isShowList">
                    <div class="foodlistnav">
                        <p>已选商品</p>
                        <div @click="removeCart"><p >清空</p></div>
                    </div>
                    <div class="foodlistul" ref="foodlistul">
                        <ul>
                            <li v-for="(item,index) in cartFoods" :key="index">
                                <div class="foodlistname"><p>{{item.name}}</p><p>份</p></div>
                                <div class="foodprice">￥{{item.price}}</div>
                                <div class="cartcontrol"><cart-control :food="item"></cart-control></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import cartControl from './cartControl'
    import {mapState,mapGetters} from 'vuex'
    import BScroll from 'better-scroll'
    export default {
        name: "ShoppingCart",
        data(){
            return{
                isShowList:false
            }
        },
        components:{
            cartControl,
        },
        computed:{
            ...mapState(['cartFoods','info']),
            ...mapGetters(['totalPrice','totalCount'])
        },
        methods:{
            removeCart(){
                this.$store.dispatch('removeCartFoods')
            }
        },
       watch:{
            totalCount(){
                if(this.totalCount===0){
                    this.isShowList=false
                    console.log('4444')
                    return false
                }
            },
           isShowList: function () {
               if (this.isShowList) {
                   this.$nextTick(() => {//dom更新完成在之后
                       // 实现BScroll的实例是一个单例
                            console.log('444')
                       if(!this.scroll){//第一次要是没有scroll才创建BScroll对象
                          this.scroll= new BScroll('.foodlistul', {
                               click: true
                           })
                       }else{
                           this.scroll.refresh()//要是已经创建滚动条就刷新一下
                       }
                   })
               }
           }
        },

    }
</script>

<style scoped lang="stylus">
    .cartwrap
        background-color #333333
        position fixed
        height 50px
        width 100%
        bottom 0
        left 0
        z-index 120
        display flex
        flex-direction row
        align-items center
        .carticonoff
            width 55px
            height 55px
            background-color lightslategrey
            border-radius 50%
            position absolute
            top -15px
            left 28px
            border 3px solid #333333
            .iconcart
                color white
                font-size 30px
                position absolute
                top 50%
                left 50%
                transform: translate(-50%,-50%)
        .carticon
            width 55px
            height 55px
            background-color forestgreen
            border-radius 50%
            position absolute
            top -15px
            left 28px
            border 3px solid #333333
            .iconcart
                color white
                font-size 30px
                position absolute
                top 50%
                left 50%
                transform: translate(-50%,-50%)
            .cartcount
                width auto
                min-width 20px
                height 20px
                border-radius 40%
                font-size 8px
                font-family Calibri
                background-color red
                color #ffffff
                position absolute
                top -8px
                display block
                text-align center
                padding 0 3px
                line-height 20px

        .totalpirceclass
            position absolute
            left 110px
            color #fff
        .submit-btn
            position absolute
            right 0
            background-color chartreuse
            height 100%
            width 80px
.foodlistwrap
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    z-index 110
    background-color rgba(0 0 0 .7)
    .foodlist
        z-index 111
        background-color #ffff
        width 100%
        position fixed
        bottom 0
        left 0
        transform translateY(0)
        &.list-enter-active,&.list-leave-active
            transition transform  .5s
        &.list-enter,&.list-leave-to
            transform translateY(100%)

        .foodlistnav
            box-sizing inherit
            height 35px
            background-color darkgrey
            line-height 35px
            display flex
            top 0
            justify-content space-between
            flex-direction row
            padding 0 5px
        .foodlistul
            overflow: hidden;
            width 100%

            max-height 300px
            ul
                padding-bottom 58px
            li
                display flex
                flex-direction row
                align-items center
                height 40px
                padding 10px 5px 0 5px
                border-bottom 1px solid lightgray
                .foodlistname
                    height 100%
                    flex 5.5
                    :nth-child(2)
                        font-size 12px
                        color lightgray
                        padding-top 4px
                        line-height 10px
                .foodprice
                    height 100%
                    flex 4
                    text-align right
                .cartcontrol
                    height 100%
                    flex 3.5
                    text-align right


</style>