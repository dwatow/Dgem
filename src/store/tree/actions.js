export default {
  async buyTree ({ dispatch, getters }, { data }) {
    const myId = getters.myId
    const path = `/api/users/${myId}/trees`
    await dispatch('POST', { path, data })
  },
  async activateTree ({ dispatch, getters }, { idTree, data }) {
    const myId = getters.myId
    await dispatch('PUT', {
      path: `/api/users/${myId}/trees/${idTree}`,
      data,
    })
  },
  async goToTreePage ({ dispatch, commit, getters }, { nextIndex }) {
    nextIndex = nextIndex || 1
    const myId = getters.myId
    const json = await dispatch('GET', `/api/users/${myId}/trees?owner_id=${myId}&activated=0&page=${nextIndex}`)
    commit('setTreeList', json)
  },
  async goToActiveTreePage ({ dispatch, commit, getters }, { nextIndex }) {
    nextIndex = nextIndex || 1
    const myId = getters.myId
    const json = await dispatch('GET', `/api/users/${myId}/trees?user_id=${myId}&page=${nextIndex}&remain_available=1`)
    commit('setActiveTreeList', json)
  },
}
