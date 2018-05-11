import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  getters: {
    imgSize (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
  },
  mutations: {

  },
  actions,
  modules: {
    user,
  },
})
