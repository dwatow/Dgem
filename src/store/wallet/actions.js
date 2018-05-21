export default {
  async WalletPage ({ dispatch, commit, getters }) {
    const myId = getters.myId
    const json = await dispatch('GET', `/api/users/${myId}/wallets?page=1`)
    commit('setWallet', json)
  },
  async TransferUSD ({ dispatch, getters }, { data }) {
    const id = getters.idUsdWallet
    await dispatch('POST', {
      path: `/api/wallets/${id}/transfers`,
      data,
    })
  },
}
