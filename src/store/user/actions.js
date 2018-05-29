export default {
  async allChildAccount ({ dispatch, commit, getters }) {
    const myId = getters.myId
    const json = await dispatch('GET', `/api/users/${myId}/child-accounts?hello=world&activated=1`)
    json.data = await dispatch('accountAndWallet', { array: json.data })
    commit('allChildAccount', json)
  },
  async goToChildAccountPage ({ dispatch, commit, getters }, { nextIndex }) {
    nextIndex = nextIndex || 1
    const myId = getters.myId
    const json = await dispatch('GET', `/api/users/${myId}/child-accounts?page=${nextIndex}`)
    json.data = await dispatch('accountAndWallet', { array: json.data })
    commit('setChildAccount', json)
  },
  async addChildAccount ({ dispatch, commit, getters }) {
    const myId = getters.myId
    const json = await dispatch('POST', {
      path: `/api/users/${myId}/child-accounts`,
    })
    json.data = await dispatch('accountAndWallet', { array: json.data })
    commit('setChildAccount', json)
  },
  async userDownLines ({ dispatch, commit }, { idUser }) {
    const json = await dispatch('GET', `/api/users/${idUser}`)
    let downlinesWithTreeStatus = []
    json.downlines.forEach(async item => {
      const allTreeStatus = await dispatch('allTreeStatus', { id: item.id })
      downlinesWithTreeStatus.push(Object.assign({}, item, allTreeStatus))
    })
    json.downlines = downlinesWithTreeStatus
    const allTreeStatus = await dispatch('allTreeStatus', { id: json.id })
    commit('setUserDownLines', Object.assign({}, json, allTreeStatus))
  },
  async childAccountWallet ({ dispatch, commit }, { idUser }) {
    const json = await dispatch('GET', `/api/users/${idUser}/wallets?page=1`)
    return json
  },
  accountAndWallet ({ dispatch, commit }, { array }) {
    if (typeof array !== 'undefined' && array.constructor.name === 'Array') {
      let accountAndWallet = []
      array.forEach(async user => {
        const wallets = await dispatch('childAccountWallet', { idUser: user.id })
        wallets.data.forEach(wallet => {
          user[`gem${wallet.gem}`] = user.activated ? wallet.amount : ''
        })
        accountAndWallet.push(Object.assign({}, user))
      })
      return accountAndWallet
    } else {
      return []
    }
  },
  async whoAmI ({ dispatch, commit }) {
    const json = await dispatch('GET', `/api/users/me`)
    const allTreeStatus = await dispatch('allTreeStatus', { id: json.id })
    commit('IAm', Object.assign({}, json, allTreeStatus))
  },
  allTreeStatus ({ dispatch }, { id }) {
    return dispatch('GET', `/api/users/${id}/tree-stats`)
  },
}
