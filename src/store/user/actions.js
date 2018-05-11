import axios from 'axios'
export default {
  async GET ({ getters }, path) {
    const response = await axios.get(`${getters.host}${path}`, { ...getters.headers })
    return response
  },
  // async POST ({ getters }, { path, data }) {
  //   const response = await axios.post(`${getters.host}${path}`, data, { headers: getters.header })
  //   return response
  // },
  async Login ({ commit, state }) {
    const headers = {
      'Content-Type': 'application/json',
    }
    const data = {
      'grant_type': 'password',
      'username': 'root', // ${payload.username}
      'password': 'password', // ${payload.passworld}
      'client_id': '2',
      'client_secret': 'TCqXPHubxIcPHCCAA1IwyZKMx3txKMWVsvC0oFmV',
    }

    const response = await axios.post(`${state.host}/oauth/token`, data, { headers })
    if (response.status === 200) {
      commit('token', { token: response.data.access_token })
    }
  },
}
