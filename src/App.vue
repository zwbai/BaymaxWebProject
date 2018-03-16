<template>
  <div id="app" class="has-navbar-fixed-top route-index fontawesome-i2svg-active fontawesome-i2svg-complete ">
    <Navigation></Navigation>
    <Tips></Tips>
    <Introduction></Introduction>
    <myVideo></myVideo>
    <Maindoc></Maindoc>
    <Imagebanner></Imagebanner>
    <Author></Author>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './home/footer.vue'
import Tips from './home/tips.vue'
import Navigation from "./home/navigation.vue"
import Maindoc from './home/maindoc.vue'
import Introduction from './home/introduction.vue'
import Author from './home/author.vue'
import Imagebanner from './home/imagebanner.vue'
import myVideo from './home/myPlayer.vue'
export default {
  name: 'App',
  components: {
    Navigation,
    Tips,
    Introduction,
    myVideo,
    Imagebanner,
    Maindoc,
    Author,
    Footer,
  }

}
</script>


