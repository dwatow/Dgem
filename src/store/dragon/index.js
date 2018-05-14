import actions from './actions'

export default {
  state: {
    dragon: {},
  },
  getters: {
    dragon: (state, getters) => state.dragon.data,
  },
  mutations: {
    setDragonList (state, json) {
      state.dragon = json
    },
  },
  actions,
}
