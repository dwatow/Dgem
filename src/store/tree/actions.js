// import axios from 'axios'
export default {
  async buyTree ({ dispatch }, { data }) {
    const path = `/api/users/1/trees`
    await dispatch('POST', { path, data })
  },
  async activateTree ({ dispatch }, { idTree, data }) {
    await dispatch('PUT', {
      path: `/api/users/1/trees/${idTree}`,
      data,
    })
  },
  async goToTreePage ({ dispatch, commit }, { nextIndex }) {
    nextIndex = nextIndex || 1
    const json = await dispatch('GET', `/api/users/1/trees?owner_id=1&activated=0&page=${nextIndex}`)
    commit('setTreeList', json)
  },
  async goToActiveTreePage ({ dispatch, commit }, { nextIndex }) {
    nextIndex = nextIndex || 1
    const json = await dispatch('GET', `/api/users/1/trees?user_id=1&page=${nextIndex}`)
    commit('setActiveTreeList', json)
  },
}
