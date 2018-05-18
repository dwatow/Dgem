export default {
  async WalletPage ({ dispatch, commit, getters }) {
    const myId = getters.myId
    const json = await dispatch('GET', `/api/users/${myId}/wallets?page=1`)
    commit('setWallet', json)
  },
  async TransferUSD ({ dispatch, commit }, { data }) {
    await dispatch('POST', {
      path: `/api/wallets/14/transfers`,
      data,
    })
  },
}
