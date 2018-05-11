import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tree: [],
    dragon: [],
    paging: {},
  },
  getters: {
    tree (state) {
      return state.tree
    },
    dragon (state) {
      return state.dragon
    },
  },
  mutations: {
    setTreeList (state, payload) {
      state.tree = payload.tree
    },
    setDragonList (state, payload) {
      state.dragon = payload.dragons
    },
  },
  actions,
  modules: {
    user,
  },
})
