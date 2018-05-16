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
  },
  getters: {
    isExist: (state) => (module, collection) => !!state[module][collection].data,
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
  },
  mutations: {
    token (state, payload) {
      state.token = payload.access_token
      state.token_type = payload.token_type
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
