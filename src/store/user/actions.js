export default {
  async allChildAccount ({ dispatch, commit }) {
    const json = await dispatch('GET', `/api/users/1/child-accounts?hello=world`)
    commit('allChildAccount', json)
  },
  async goToChildAccountPage ({ dispatch, commit }, { nextIndex }) {
    nextIndex = nextIndex || 1
    const json = await dispatch('GET', `/api/users/1/child-accounts?page=${nextIndex}`)
    commit('setChildAccount', json)
  },
  async addChildAccount ({ dispatch, commit }) {
    const json = await dispatch('POST', {
      path: `/api/users/1/child-accounts`,
    })
    commit('setChildAccount', json)
  },
  async userDownLines ({ dispatch, commit }, { idUser }) {
    const json = await dispatch('GET', `/api/users/${idUser}`)
    commit('setUserDownLines', json)
  },
}
