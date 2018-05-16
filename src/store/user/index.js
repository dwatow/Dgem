import actions from './actions'

export default {
  state: {
    childAccount: {},
    userDownLines: {},
  },
  getters: {
    childAccount: (state) => state.childAccount.data,
    downLines: (state) => state.userDownLines.downlines,
    self: (state) => state.userDownLines,
  },
  mutations: {
    setChildAccount (state, json) {
      state.childAccount = json
    },
    setUserDownLines (state, json) {
      state.userDownLines = json
    },
  },
  actions,
}
