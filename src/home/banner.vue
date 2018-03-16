<template>
    <div class="banner-container">
        <section class="hero is-warning">
        <div class="hero-body">
            <div class="container">
            <h1 class="title">
                交大剪影
            </h1>
            <h2 class="subtitle">
                See more photos <a href="https://weibo.com/3899676694/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1" 
                target="_blank">@Baymax</a> 
            </h2>
            </div>
        </div>
        </section>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
            </div>
            <div class="swiper-pagination swiper-pagination-white"></div>
        </div>
    </div>
    
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        props: ['listImg'],
        mounted() {
            console.log('mounted', this)
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                speed: 600,
                autoplay: 4000,
                // swiper.startAutoplay(),
                onTouchEnd: function() {
                    swiper.startAutoplay()
                }
            });
        }
    }
</script>

<style lang="stylus" scoped>
    .swiper-container {
        width: 100%;
        height: 630px;
        .swiper-wrapper {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .swiper-pagination-bullet {
            width:0.833rem;
            height: 0.833rem;
            display: inline-block;
            background: #7c5e53;
        }
    }
    .banner-container{
        width:100%;
        height:720px;
        }

</style>