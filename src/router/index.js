import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import Tips from '@/components/tips'



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
