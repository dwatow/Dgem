import actions from './actions'

export default {
  state: {
    childAccount: {},
    userDownLines: {},
    allChildAccount: {},
  },
  getters: {
    childAccount: (state) => state.childAccount.data,
    downlines: (state) => state.userDownLines.downlines,
    self: (state) => state.userDownLines,
    allChildAccount: (state) => state.allChildAccount,
  },
  mutations: {
    allChildAccount (state, json) {
      state.allChildAccount = json
    },
    setChildAccount (state, json) {
      state.childAccount = json
    },
    setUserDownLines (state, json) {
      state.userDownLines = json
    },
  },
  actions,
}
