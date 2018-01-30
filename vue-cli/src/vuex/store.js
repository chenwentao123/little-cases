import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  add (state, num) {
    state.count += num
  },
  sub (state, num) {
    state.count -= num
  }
}

// const getters = {
//   count (state) {
//     state.count += 100
//     return state.count
//   }
// }

const actions = {
  addAction ({commit}) {
    commit('add', 10)
  },
  reduceAction ({commit}) {
    commit('sub', 10)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
