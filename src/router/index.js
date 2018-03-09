import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import Footer from '@/home/footer'
import Navigation from '@/home/navigation'
import Tips from '@/home/tips'
import Maindoc from '@/home/maindoc'

import '../assets/bulma.css' 
//https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.css

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
