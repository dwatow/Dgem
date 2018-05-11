import axios from 'axios'
export default {
  async POST ({ state }, { path, header, data }) {
    const response = await axios.post(`${state.host}${path}`, data, { header })
    return response
  },
  async Login ({ dispatch, commit }, payload) {
    const config = {
      path: `/oauth/token`,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: {
        'grant_type': 'password',
        'username': 'root', // ${payload.username}
        'password': 'password', // ${payload.passworld}
        'client_id': '2',
        'client_secret': 'TCqXPHubxIcPHCCAA1IwyZKMx3txKMWVsvC0oFmV',
      },
    }
    const response = await dispatch('POST', config)
    if (response.status === 200) {
      commit('token', { token: response.data.access_token })
    }
    // commit('token', )
  },
}
