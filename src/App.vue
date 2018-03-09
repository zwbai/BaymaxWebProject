<template>
  <div id="app">
    <Navigation></Navigation>
    <Tips></Tips>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './home/footer.vue'
import Tips from './home/tips.vue'
import Navigation from "./home/navigation.vue"

export default {
  name: 'App',
  components: {
    Navigation,
    Tips,
    Footer,

  }

}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
