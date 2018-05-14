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
      return {
        total: state[type][type].total,
        pre_page: state[type][type].per_page,
        curr_page: state[type][type].current_page,
      }
    },
    isExist: (state) => (type) => {
      return !!state[type][type].data
    },
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
