import Vue from 'vue'
import Router from 'vue-router'
import Parliamentarian from '@/components/Parliamentarian'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Parliamentarian',
      component: Parliamentarian
    }
  ]
})
