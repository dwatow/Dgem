// import axios from 'axios'
export default {
  async initDragon ({ dispatch, commit }) {
    const json = await dispatch('GET', '/api/dragons?owner_id=1')
    commit('setDragonList', json)
  },
}
