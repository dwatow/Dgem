export default {
  async goToWalletPage ({ dispatch, commit }, { nextIndex }) {
    nextIndex = nextIndex || 1
    const json = await dispatch('GET', `/api/users/1/wallets?page=${nextIndex}`)
    commit('setWallet', json)
  },
}
