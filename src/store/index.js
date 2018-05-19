import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import actions from './actions'
import dragon from './dragon'
import tree from './tree'
import wallet from './wallet'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    host: 'http://dreamsgemdev-env.ap-northeast-1.elasticbeanstalk.com',
    token: '',
    token_type: '', // Bearer
    qrCode: {},
  },
  getters: {
    isExist: (state) => (module, collection) => !!state[module][collection].data && state[module][collection].data.length > 0,
    isLogin: (state) => state.token.length !== 0,
    token: (state) => state.token,
    host: (state) => state.host,
    // query: (state) => (module) =>
    paging: (state) => (module, collection) => {
      return {
        total: state[module][collection].total,
        pre_page: state[module][collection].per_page,
        curr_page: state[module][collection].current_page,
      }
    },
    headers: (state) => {
      return {
        'Accept': `application/json`,
        'Authorization': `${state.token_type} ${state.token}`,
      }
    },
    gems: () => [
      '七彩寶石',
      '多喜寶石',
      '多福寶石',
      '多財寶石',
      '美金',
    ],
    qrcode: (state) => state.qrCode.qrcode_url,
    qrcodeUser: (state) => state.qrCode,
  },
  mutations: {
    token (state, payload) {
      state.token = payload.access_token
      state.token_type = payload.token_type
    },
    setQRcodeData (state, payload) {
      state.qrCode = payload
    },
  },
  actions,
  modules: {
    user,
    dragon,
    tree,
    wallet,
  },
})
