// import axios from 'axios'
export default {
  async goToDragonPage ({ dispatch, commit }, { nextIndex }) {
    nextIndex = nextIndex || 1
    const json = await dispatch('GET', `/api/dragons?owner_id=1&page=${nextIndex}`)
    commit('setDragonList', json)
  },
  async goToActiveDragonPage ({ dispatch, commit }, { nextIndex }) {
    nextIndex = nextIndex || 1
    const json = await dispatch('GET', `/api/dragons?user_id=1&page=${nextIndex}`)
    commit('setActiveDragonList', json)
  },
}
