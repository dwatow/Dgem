import actions from './actions'

export default {
  state: {
    wallet: {},
  },
  getters: {
    wallet: (state) => {
      return state.wallet.data
    },
    idUsdWallet: (state) => {
      const usd = state.wallet.filter((item) => item.gem === '4').shift
      return usd.id
    },
  },
  mutations: {
    setWallet (state, json) {
      state.wallet = json
    },
  },
  actions,
}
