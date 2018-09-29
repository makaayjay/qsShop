<template>
    <swiper :options="swiperOption">
        <swiper-slide><slot name="slot1"></slot></swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    export default {
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        dynamicBullets: true
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>