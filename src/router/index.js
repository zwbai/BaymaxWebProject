import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
// import '../assets/styles/bulma.css' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    }
  ]
})
