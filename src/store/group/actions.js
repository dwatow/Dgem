// import axios from 'axios'
export default {
  async goToGroupPage ({ dispatch, commit }) {
    const json = await dispatch('GET', `/api/users/1`)
    commit('setGroupList', json)
  },
}
