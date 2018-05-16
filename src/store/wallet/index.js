import actions from './actions'

export default {
  state: {
    wallet: {},
  },
  getters: {
    wallet: (state) => {
      return state.wallet.data
    },
  },
  mutations: {
    setWallet (state, json) {
      state.wallet = json
    },
  },
  actions,
}
