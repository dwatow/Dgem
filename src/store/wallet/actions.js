export default {
  async WalletPage ({ dispatch, commit }) {
    const json = await dispatch('GET', `/api/users/1/wallets?page=1`)
    commit('setWallet', json)
  },
}
