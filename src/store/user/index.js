import actions from './actions'

export default {
  state: {
    host: 'http://dreamsgemdev-env.ap-northeast-1.elasticbeanstalk.com',
    token: '',
  },
  getters: {
    isLogin (state) {
      return state.token.length !== 0
    },
    token (state) {
      return state.token
    },
    host (state) {
      return state.host
    },
    headers (state) {
      return {
        headers: {
          'Accept': `application/json`,
          'Authorization': `Bearer ${state.token}`,
        },
      }
    },
  },
  mutations: {
    token (state, payload) {
      state.token = payload.token
    },
  },
  actions,
}
