import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
// import Home from '@/components/Home'
import notStart from '@/components/notStart'
import Dragon from '@/components/Dragon'
import Tree from '@/components/Tree'
import Activating from '@/components/Activating'
import ChildAccount from '@/components/ChildAccount'
import Wallet from '@/components/Wallet'
import BuyDragon from '@/components/BuyDragon'
import Group from '@/components/Group'
import TransferUSD from '@/components/TransferUSD'
import QRcodeLogin from '@/components/QRcodeLogin'

Vue.use(Router)

var route = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/QRcodeLogin',
    },
    {
      path: '/QRcodeLogin',
      name: 'QRcodeLogin',
      component: QRcodeLogin,
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main,
      redirect: '/Main/notStart',
      children: [
        {
          path: 'notStart',
          name: 'notStart',
          component: notStart,
        },
        {
          path: 'Dragon',
          name: 'Dragon',
          component: Dragon,
        },
        {
          path: 'Tree',
          name: 'Tree',
          component: Tree,
        },
        {
          path: 'Activating',
          name: 'Activating',
          component: Activating,
        },
        {
          path: 'ChildAccount',
          name: 'ChildAccount',
          component: ChildAccount,
        },
        {
          path: 'Wallet',
          name: 'Wallet',
          component: Wallet,
        },
        {
          path: 'TransferUSD',
          name: 'TransferUSD',
          component: TransferUSD,
        },
        {
          path: 'BuyDragon',
          name: 'BuyDragon',
          component: BuyDragon,
        },
        {
          path: 'Group',
          name: 'Group',
          component: Group,
        },
      ],
    },
  ],
})

route.beforeEach(async (to, from, next) => {
  console.log(from.name, to.name)
  if (from.name === null && to.name !== 'QRcodeLogin' && (route.app.$store === undefined || route.app.$store.getters.token.length === 0)) {
    route.push('/QRcodeLogin')
  }

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
        await route.app.$store.dispatch(`goTo${to.name}Page`, { nextIndex: 1 })
        break
      case 'Group':
        await route.app.$store.dispatch('userDownLines', { idUser: route.app.$store.getters.myId })
        break
      case 'Wallet':
      case 'TransferUSD':
        await route.app.$store.dispatch(`WalletPage`)
        break
      case 'QRcodeLogin':
        await route.app.$store.dispatch('CreateQRcode')
    }
  }
  next()
})

export default route
