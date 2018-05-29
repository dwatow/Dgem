import actions from './actions'

export default {
  state: {
    childAccount: {},
    userDownLines: {},
    allChildAccount: {},
    mySelf: {},
    allTreeStatus: {},
  },
  getters: {
    childAccount: (state) => state.childAccount.data,
    downlines: (state) => state.userDownLines.downlines,
    self: (state) => state.mySelf,
    allChildAccount: (state) => state.allChildAccount.data,
    myId: (state) => state.mySelf.id,
    allTreeStatus: (state) => state.allTreeStatus,
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
    IAm (state, json) {
      state.mySelf = json
    },
    allTreeStatus (state, json) {
      state.allTreeStatus = json
    },
  },
  actions,
}
