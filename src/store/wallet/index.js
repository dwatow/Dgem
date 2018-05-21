import actions from './actions'

export default {
  state: {
    wallet: {},
  },
  getters: {
    wallet: (state) => {
      return state.wallet.data
    },
    idUsdWallet: (state, getters) => {
      if (getters.isExist('wallet', 'wallet')) {
        const usdWallet = state.wallet.data.filter((item) => item.gem === 4).shift()
        return usdWallet.id
      } else {
        return 0
      }
    },
  },
  mutations: {
    setWallet (state, json) {
      state.wallet = json
    },
  },
  actions,
}
