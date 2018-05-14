import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tree: {},
    dragon: {},
  },
  getters: {
    tree: (state) => state.tree.data,
    dragon: (state) => state.dragon.data,
    paging: (state) => (type) => {
      return {
        total: state[type].total,
        pre_page: state[type].per_page,
        curr_page: state[type].current_page,
      }
    },
    isExist: (state) => (type) => {
      console.log(state[type].hasOwnProperty('data'))
      console.log((state[type].hasOwnProperty('data') && state[type].data.constructor.name === 'Array'))
      return (state[type].hasOwnProperty('data') && state[type].data.constructor.name === 'Array')
    },
  },
  mutations: {
    setTreeList (state, json) {
      state.tree = json
    },
    setDragonList (state, json) {
      state.dragon = json
    },
  },
  actions,
  modules: {
    user,
  },
})
