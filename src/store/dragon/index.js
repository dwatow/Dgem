import actions from './actions'

export default {
  state: {
    dragon: {},
    activeDragon: {},
  },
  getters: {
    dragon: (state) => state.dragon.data,
    activeDragon: (state) => state.activeDragon.data,
  },
  mutations: {
    setDragonList (state, json) {
      state.dragon = json
    },
    setActiveDragonList (state, json) {
      state.activeDragon = json
    },
  },
  actions,
}
