<template>
    <div>
        <div class="foodwrap" @click.stop="closeShowFood"></div>
        <div class="foodwindow">
            <div class="imgwrap">
                <i class="iconfont icon-fanhui goback" @click="closeShowFood"></i>
                <img :src="food.image" >
                <span>
                    {{food.info}}
                </span>
            </div>
            <div class="foodinfo">
                <h4>{{food.name}}</h4>
                <p>月售{{food.sellCount}}</p>
                <p>好评率{{food.rating}}%</p>
            </div>
            <div class="foodprice">
                <h3>${{food.price}}</h3>
                <cartcontrol :food="food"></cartcontrol>
            </div>
        </div>
    </div>
</template>

<script>
    import cartcontrol from './cartControl'
    export default {
        name: "food",
        props:{
            food:{
                type:Object
            }
        },
        components:{
            cartcontrol
        },
        methods:{
            closeShowFood(){
                this.$emit('closeShowFood')
            }
        }
    }
</script>

<style scoped lang="stylus">
.foodwrap
    width 100%
    height 100%
    position fixed
    top 0
    left 0
    background-color rgba(0 0 0 .5)
    z-index 110
.foodwindow
    width 250px
    height 350px
    background-color white
    position absolute
    top 50%
    left 50%
    transform: translate(-50%,-50%)
    z-index 120
    .imgwrap
        width 250px
        height 210px
        position relative
        overflow hidden
        .goback
            position absolute
            top 5px
            left 5px
            color white
        img
            width 250px
            height 210px
        span
            position absolute
            bottom 5px
            left 5px
            color white
            font-size 10px
            text-overflow: ellipsis;
            white-space: nowrap
    .foodinfo
        h4
            margin 8px
            font-size 16px
        p
            display inline-block
            margin 8px
            font-size 12px
    .foodprice

        display flex
        flex-direction row
        justify-content space-between
        padding 40px 8px 10px 8px
        h3
            color red

</style>