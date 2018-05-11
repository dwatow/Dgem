import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions,
  modules: {
    user,
  },
})
