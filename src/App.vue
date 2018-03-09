<template>
  <div id="app">
    <img src="./assets/logo.png">
    <navigation></navigation>
    <tips></tips>
    <footer></footer>
  </div>
</template>

<script>
import Footer from './components/footer.vue'
import Tips from './components/tips.vue'
import Navigation from "./components/navigation.vue"

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
    margin-top: 60px;
}
</style>
