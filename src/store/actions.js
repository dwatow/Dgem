// import axios from 'axios'

export default {
  async initTree ({ dispatch, commit }) {
    const json = await dispatch('GET', '/api/users/1/trees')
    commit('setTreeList', { tree: json.data })
  },
  async initDragon ({ dispatch, commit }) {
    const json = await dispatch('GET', '/api/dragons')
    console.log(json)
    commit('setDragonList', { dragons: json.data })
  },
}
