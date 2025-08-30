import { createStore } from 'vuex'

export default createStore({
  state: {
    ct: 12
  },
  getters: {
    cctt(state) {
      console.log('vuex로 실행중')
      return state.ct ** 2
    }
  },
  mutations: {
    setCt(state, value) {
      state.ct = value
    }
  },
  actions: {
    actCt(context, item) {
      context.commit('setCt', item)
    }
  },
  // actions: {
  //   actCt({ state, commit }, { newMsg }) {
  //     commit('setCt', newMsg)
  //   }
  // },
  modules: {}
})
