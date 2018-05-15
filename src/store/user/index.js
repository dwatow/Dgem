import actions from './actions'

export default {
  state: {
    childAccount: {},
  },
  getters: {
    childAccount: (state) => {
      return state.childAccount.data
    },
  },
  mutations: {
    setChildAccount (state, json) {
      state.childAccount = json
    },
  },
  actions,
}
