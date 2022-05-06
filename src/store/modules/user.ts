import { Module } from 'vuex'

interface State {
  token: string,
  name: string
}

const store: Module<State, unknown> = {
  namespaced: true,
  state() {
    return {
      token: '',
      name: ''
    }
  },
  getters: {
    
  },
  // 只能同步
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_NANE(state, name) {
      state.name = name
    }
  },
  // 支持异步,可以考虑引入API
  actions: {

  },
}

export default store
