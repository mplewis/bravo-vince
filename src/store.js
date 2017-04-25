import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  output: ''
}

const mutations = {
  SAVE_OUTPUT (state, output) {
    state.output = output
  }
}

const actions = {
  newInput ({ commit }, input) {
    console.log(commit, input)
    commit('SAVE_OUTPUT', input)
  }
}

const store = new Vuex.Store({ state, mutations, actions })

export default store
