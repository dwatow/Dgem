import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import notStart from '@/components/notStart'
import Dragon from '@/components/Dragon'
import Tree from '@/components/Tree'
import Activating from '@/components/Activating'
import ChildAccount from '@/components/ChildAccount'

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
    {
      path: '/Activating',
      name: 'Activating',
      component: Activating,
    },
    {
      path: '/ChildAccount',
      name: 'ChildAccount',
      component: ChildAccount,
    },
  ],
})

route.beforeEach((to, from, next) => {
  if (route.app.$store !== undefined) {
    switch (to.name) {
      case 'Tree':
        route.app.$store.dispatch('goToTreePage', { nextIndex: 1 })
        break
      case 'Dragon':
        route.app.$store.dispatch('goToDragonPage', { nextIndex: 1 })
        break
      case 'Activating':
        route.app.$store.dispatch('goToActiveDragonPage', { nextIndex: 1 })
        route.app.$store.dispatch('goToActiveTreePage', { nextIndex: 1 })
        break
      case 'ChildAccount':
        route.app.$store.dispatch('goToChildAccountPage', { nextIndex: 1 })
    }
  }
  next()
})

export default route
