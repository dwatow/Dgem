import actions from './actions'

export default {
  state: {
    childAccount: {},
    userDownLines: {},
    allChildAccount: [],
    mySelf: {},
    eventsLog: {},
  },
  getters: {
    myId: (state) => state.mySelf.id,
    myName: (state) => state.mySelf.name,
    eventsLog: (state) => state.eventsLog,
    childAccount: (state) => state.childAccount.data,
    self: (state) => state.mySelf,
    downlines: (state) => state.userDownLines.downlines,
    allChildAccount: (state) => state.allChildAccount,
    allUsers: (state) => {
      let users = {}
      users[`${state.mySelf.id}`] = state.mySelf
      state.allChildAccount.forEach(item => {
        users[item.id] = item
      })

      if (!!state.userDownLines && !!state.userDownLines.downlines) {
        state.userDownLines.downlines.forEach(item => {
          users[item.id] = item
        })
      }
      return Object.values(users).filter(item => !item.activated)
    },
  },
  mutations: {
    myName: (state, name) => { state.mySelf.name = name },
    IAm: (state, json) => { state.mySelf = json },
    allChildAccount: (state, json) => { state.allChildAccount = json },
    setChildAccount: (state, json) => { state.childAccount = json },
    setUserDownLines: (state, json) => { state.userDownLines = json },
    eventsLog: (state, json) => { state.eventsLog = json },
  },
  actions,
}
