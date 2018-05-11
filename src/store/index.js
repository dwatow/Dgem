import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tree: [],
  },
  getters: {
    tree (state) {
      return state.tree
    },
  },
  mutations: {
    setTreeList (state, payload) {
      state.tree = payload.tree
    },
  },
  actions,
  modules: {
    user,
  },
})
