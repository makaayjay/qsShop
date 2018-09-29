<template>
    <div>
        <shopheader></shopheader>
        <div class="tab">
            <div class="tab-item">
                <router-link :to="{name:'goods'}">点餐</router-link>
            </div>
            <div class="tab-item"><router-link :to="{name:'ratings'}">评价</router-link></div>
            <div class="tab-item"><router-link :to="{name:'ShopInfo'}">商家</router-link></div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import shopheader from '../../components/ShopHeader/ShopHeader'
    export default {
        name: "shop",
        components:{
            shopheader
        }
    }
</script>

<style scoped lang="stylus">
    .tab{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 40px;
        line-height:40px;
        .tab-item{
            font-size: 16px;
        }
        .router-link-active{
            border-bottom: 3px solid lightskyblue;
        }
    }
</style>