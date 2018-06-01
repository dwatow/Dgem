import actions from './actions'

export default {
  state: {
    childAccount: {},
    userDownLines: {},
    allChildAccount: {},
    mySelf: {},
    allTreeStatus: {},
    eventsLog: {},
  },
  getters: {
    eventsLog: (state) => state.eventsLog.data,
    childAccount: (state) => state.childAccount.data,
    downlines: (state) => state.userDownLines.downlines,
    self: (state) => state.mySelf,
    allChildAccount: (state) => state.allChildAccount,
    myId: (state) => state.mySelf.id,
    allTreeStatus: (state) => state.allTreeStatus,
  },
  mutations: {
    IAm: (state, json) => { state.mySelf = json },
    allChildAccount: (state, json) => { state.allChildAccount = json },
    setChildAccount: (state, json) => { state.childAccount = json },
    setUserDownLines: (state, json) => { state.userDownLines = json },
    allTreeStatus: (state, json) => { state.allTreeStatus = json },
    eventsLog: (state, json) => { state.eventsLog = json },
  },
  actions,
}
