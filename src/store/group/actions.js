// import axios from 'axios'
export default {
  async goToGroupPage ({ dispatch, commit, getters }) {
    const myId = getters.myId
    const json = await dispatch('GET', `/api/users/${myId}`)
    commit('setGroupList', json)
  },
}
