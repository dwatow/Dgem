import actions from './actions'

export default {
  state: {
    group: {},
  },
  getters: {
    downlines: (state) => state.group.downlines,
  },
  mutations: {
    setGroupList (state, json) {
      state.group = json
    },
  },
  actions,
}
