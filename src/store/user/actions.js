export default {
  async allChildAccount ({ dispatch, commit }) {
    const json = await dispatch('GET', `/api/users/1/child-accounts?hello=world&activated=1`)
    // json.data = await dispatch('accountAndWallet', { array: json.data })
    commit('allChildAccount', json)
  },
  async goToChildAccountPage ({ dispatch, commit }, { nextIndex }) {
    nextIndex = nextIndex || 1
    const json = await dispatch('GET', `/api/users/1/child-accounts?page=${nextIndex}`)
    json.data = await dispatch('accountAndWallet', { array: json.data })
    commit('setChildAccount', json)
  },
  async addChildAccount ({ dispatch, commit }) {
    const json = await dispatch('POST', {
      path: `/api/users/1/child-accounts`,
    })
    json.data = await dispatch('accountAndWallet', { array: json.data })
    commit('setChildAccount', json)
  },
  async userDownLines ({ dispatch, commit }, { idUser }) {
    const json = await dispatch('GET', `/api/users/${idUser}`)
    commit('setUserDownLines', json)
  },
  async childAccountWallet ({ dispatch, commit }, { idUser }) {
    const json = await dispatch('GET', `/api/users/${idUser}/wallets?page=1`)
    return json
  },
  accountAndWallet ({ dispatch, commit }, { array }) {
    let accountAndWallet = []
    array.forEach(async user => {
      const wallets = await dispatch('childAccountWallet', { idUser: user.id })
      wallets.data.forEach(wallet => {
        user[`gem${wallet.gem}`] = user.activated ? wallet.amount : ''
      })
      accountAndWallet.push(Object.assign({}, user))
    })
    return accountAndWallet
  },
  async whoAmI ({ dispatch, commit }) {
    const json = await dispatch('GET', `/api/users/me`)
    commit('IAm', json)
  },
}
