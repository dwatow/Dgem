// import axios from 'axios'
export default {
  async initTree ({ dispatch, commit }) {
    const json = await dispatch('GET', '/api/users/1/trees')
    commit('setTreeList', json)
  },
}
