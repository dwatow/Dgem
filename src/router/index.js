import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import notStart from '@/components/notStart'
import Dragon from '@/components/Dragon'
import Tree from '@/components/Tree'
import Activating from '@/components/Activating'
import ChildAccount from '@/components/ChildAccount'
import Wallet from '@/components/Wallet'
import BuyDragon from '@/components/BuyDragon'
import Group from '@/components/Group'

Vue.use(Router)

var route = new Router({
  // mode: 'history',
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
    {
      path: '/Wallet',
      name: 'Wallet',
      component: Wallet,
    },
    {
      path: '/BuyDragon',
      name: 'BuyDragon',
      component: BuyDragon,
    },
    {
      path: '/Group',
      name: 'Group',
      component: Group,
    },
  ],
})

route.beforeEach(async (to, from, next) => {
  if (route.app.$store !== undefined) {
    switch (to.name) {
      case 'Activating':
        await route.app.$store.dispatch('goToActiveDragonPage', { nextIndex: 1 })
        route.app.$store.dispatch('goToActiveTreePage', { nextIndex: 1 })
        break
      case 'BuyDragon':
        await route.app.$store.dispatch(`goToAllDragonPage`, { nextIndex: 1 })
        break
      case 'Tree':
      case 'Dragon':
      case 'ChildAccount':
      case 'Wallet':
        await route.app.$store.dispatch(`goTo${to.name}Page`, { nextIndex: 1 })
        break
      case 'Group':
        await route.app.$store.dispatch('userDownLines', { idUser: 1 })
        break
    }
  }
  next()
})

export default route
