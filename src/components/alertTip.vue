<template>
    <div class="wrap">
        <div class="tip">
            {{tipText}}
            <div class="btn" @click="closeTip">确认</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "alertTip",
        props:{
            tipText:{
                type:String
            }
        },
        methods:{
            closeTip(){
                this.$emit("closeAlertTip")
            }
        }
    }
</script>

<style scoped lang="stylus">
    .wrap
        position fixed
        top: 0
        left 0
        z-index 10000
        width 100%
        height 100%
        background: rgba(0,0,0,0.5)
        display flex
        justify-content center
        align-items center
        .tip

            width 250px
            height 250px
            background-color white
            position relative
            .btn
                width 100%
                height 50px
                position absolute
                bottom 0
                background-color #ff2d4b
                color white
                line-height 50px
                text-align center


</style>