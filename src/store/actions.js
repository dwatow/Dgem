import axios from 'axios'
export default {
  async Login ({ dispatch, commit, getters }) {
    const headers = {
      'Content-Type': 'application/json',
    }
    const data = {
      'grant_type': 'password',
      'username': 'root@email.com', // ${payload.username}
      'password': 'password', // ${payload.passworld}
      'client_id': '2',
      'client_secret': 'TCqXPHubxIcPHCCAA1IwyZKMx3txKMWVsvC0oFmV',
    }

    const response = await axios.post(`${getters.host}/oauth/token`, data, { headers })
    commit('token', response.data)
    await dispatch('whoAmI')
    Promise.resolve()
  },
  async LoginQRcode ({ dispatch, commit, getters }) {
    const headers = {
      'Content-Type': 'application/json',
    }
    const data = {
      'grant_type': 'qrcode',
      'id': `${getters.qrcodeUser.id}`,
      'password': `${getters.qrcodeUser.password}`,
      'client_id': '2',
      'client_secret': 'TCqXPHubxIcPHCCAA1IwyZKMx3txKMWVsvC0oFmV',
    }

    const response = await axios.post(`${getters.host}/oauth/token`, data, { headers })
    commit('token', response.data)
    await dispatch('whoAmI')
    Promise.resolve()
  },
  async CreateQRcode ({ commit, getters }) {
    const headers = {
      'Accept': 'application/json',
    }
    const data = {
      'id': 10,
      'password': 'h%1`2{A/A',
      'qrcode_url': 'https://uim.dreamsgem.net/applets?action=/applets/dreamsgem/auth/scan-login/10',
    }
    const response = await axios.post(`${getters.host}/api/qrcodes`, data, { headers })
    commit('setQRcodeData', response.data)
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
