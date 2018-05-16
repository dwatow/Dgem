export default {
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
}
