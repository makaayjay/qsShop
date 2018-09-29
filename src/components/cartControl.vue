<template>
    <div class="cartwarp">
        <transition name="trade">
        <div class="iconfont icon-offline_fill reduceclass" style="font-size: 25px" v-if="food.count" @click.stop="changeCount(false,food)"></div>
        </transition>
        <div class="count">{{food.count}}</div>
        <div class="iconfont icon-addition_fill" style="font-size: 25px" @click.stop="changeCount(true,food)"></div>
    </div>
</template>

<script>
    export default {
        name: "cartControl",
        props:{
            food:{
                type:Object
            }
        },
        methods:{
            changeCount(isAdd,food){
                    this.$store.dispatch('addFoodCount',{isAdd,food})

            }
        }
    }
</script>

<style scoped lang="stylus">
    .cartwarp
        display flex
        justify-content space-around
        align-items center
        flex-direction row
        color #fe2947

        .trade-enter-active,.trade-leave-active
            transition all .2s
        .trade-enter,.trade-leave-to
            transform translateX(28px)
            opacity 0
        .count
            color #333333
            font-size 14px
</style>