import axios from 'axios'
export default {
  async Login ({ commit, getters }) {
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

    const response = await axios.post(`${getters.host}/oauth/token`, data, { headers })
    commit('token', response.data)
  },
  async GET ({ getters }, path) {
    const response = await axios.get(`${getters.host}${path}`, {
      headers: {
        ...getters.headers,
      },
    })
    if (response.status === 200) {
      return response.data
    } else {
      return response
    }
  },
  async POST ({ getters }, { path, data }) {
    const response = await axios.post(`${getters.host}${path}`,
      data, {
        headers: {
          ...getters.headers,
          'Content-Type': 'application/json',
        },
      })
    return response
  },
  async PUT ({ getters }, { path, data }) {
    const response = await axios.put(`${getters.host}${path}`,
      data, {
        headers: {
          ...getters.headers,
          'Content-Type': 'application/json',
        },
      })
    return response
  },
}
