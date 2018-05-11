import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import notStart from '@/components/notStart'

Vue.use(Router)

var route = new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Home,
    },
    {
      path: '/notStart',
      name: 'notStart',
      component: notStart,
    },
  ],
})

export default route
