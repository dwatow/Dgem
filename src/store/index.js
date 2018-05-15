import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import actions from './actions'
import dragon from './dragon'
import tree from './tree'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    paging: (state) => (type) => {
      const subType = type
      if (!type.split('active')[0]) {
        type = type.split('active')[1].toLowerCase()
      }

      // type:  dragon , subType:  activeDragon
      // type:  tree , subType:  activeTree
      return {
        total: state[type][subType].total,
        pre_page: state[type][subType].per_page,
        curr_page: state[type][subType].current_page,
      }
    },
    isExist: (state) => (type) => {
      const subType = type
      if (!type.split('active')[0]) {
        type = type.split('active')[1].toLowerCase()
      }

      // type:  dragon , subType:  activeDragon
      // type:  tree , subType:  activeTree
      return !!state[type][subType].data
    },
    // currPage: (state) => (type) => {
    //   const subType = type
    //   if (!type.split('active')[0]) {
    //     type = type.split('active')[1].toLowerCase()
    //   }
    //
    //   // type:  dragon , subType:  activeDragon
    //   // type:  tree , subType:  activeTree
    //   return !!state[type][subType].current_page
    // },
  },
  mutations: {
  },
  actions,
  modules: {
    user,
    dragon,
    tree,
  },
})
