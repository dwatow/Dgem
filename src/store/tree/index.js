import actions from './actions'

export default {
  state: {
    tree: {},
  },
  getters: {
    tree: (state) => state.tree.data,
  },
  mutations: {
    setTreeList (state, json) {
      state.tree = json
    },
  },
  actions,
}
