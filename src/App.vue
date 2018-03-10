<template>
  <div id="app" class="has-navbar-fixed-top route-index fontawesome-i2svg-active fontawesome-i2svg-complete ">
    <Navigation></Navigation>
    <Tips></Tips>
    <Introduction></Introduction>
    <Maindoc></Maindoc>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './home/footer.vue'
import Tips from './home/tips.vue'
import Navigation from "./home/navigation.vue"
import Maindoc from './home/maindoc.vue'
import Introduction from './home/introduction.vue'
export default {
  name: 'App',
  components: {
    Navigation,
    Tips,
    Maindoc,
    Footer,
    Introduction,

  }

}
</script>

<style>
#app {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50; */
}
</style>
