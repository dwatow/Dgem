import actions from './actions'

export default {
  state: {
    tree: {},
    activeTree: {},
  },
  getters: {
    tree: (state) => state.tree.data,
    activeTree: (state) => state.activeTree.data,
  },
  mutations: {
    setTreeList (state, json) {
      state.tree = json
    },
    setActiveTreeList (state, json) {
      state.activeTree = json
    },
  },
  actions,
}
