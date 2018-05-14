// import axios from 'axios'
export default {
  async initTree ({ dispatch, commit }) {
    const json = await dispatch('GET', '/api/users/1/trees?owner_id=1')
    commit('setTreeList', json)
  },
}
