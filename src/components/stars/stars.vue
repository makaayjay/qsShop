<template>
    <div class="star star-24">
        <span class="star-item" v-for="(star,index) in starsClasses" :key="index" :class="star"></span>
    </div>
</template>

<script>
    export default {
        name: "stars",
        props:{
            size:{
                type:Number
            },
            score:{
                type:Number
            }
        },
        computed:{
            starsClasses(){
                let scroe=Math.floor(this.score)
                let scs=[]
                for (let i=0;i<scroe;i++){
                    scs.push("on")
                }
                if(this.score-scroe>=0.5){
                    scs.push("half")
                }
                while(scs.length<5){//小于5颗星就填充黑灰色星星
                    scs.push("off")
                }
                return scs
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../static/stylus/mixins.styl"
    .star //2x图 3x图
        float left
        font-size 0
        .star-item
            display inline-block
            background-repeat no-repeat
        &.star-48
            .star-item
                width 20px
                height 20px
                margin-right 22px
                background-size 20px 20px
                &:last-child
                    margin-right: 0
                &.on
                    bg-image('./images/star48_on')
                &.half
                    bg-image('./images/star48_half')
                &.off
                    bg-image('./images/star48_off')
        &.star-36
            .star-item
                width 15px
                height 15px
                margin-right 6px
                background-size 15px 15px
                &:last-child
                    margin-right 0
                &.on
                    bg-image('./images/star36_on')
                &.half
                    bg-image('./images/star36_half')
                &.off
                    bg-image('./images/star36_off')
        &.star-24
            .star-item
                width 10px
                height 10px
                margin-right 3px
                background-size 10px 10px
                &:last-child
                    margin-right 0
                &.on
                    bg-image('./images/star24_on')
                &.half
                    bg-image('./images/star24_half')
                &.off
                    bg-image('./images/star24_off')
</style>