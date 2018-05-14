import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import notStart from '@/components/notStart'
import Dragon from '@/components/Dragon'
import Tree from '@/components/Tree'

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
    {
      path: '/Dragon',
      name: 'Dragon',
      component: Dragon,
    },
    {
      path: '/Tree',
      name: 'Tree',
      component: Tree,
    },
  ],
})

route.beforeEach((to, from, next) => {
  if (route.app.$store !== undefined) {
    switch (to.name) {
      case 'Tree':
        route.app.$store.dispatch('initTree')
        break
      case 'Dragon':
        route.app.$store.dispatch('initDragon')
        break
    }
  }
  next()
})

export default route
