import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  input: ''
}

const mutations = {
  SAVE_INPUT (state, input) {
    state.input = input
  }
}

const store = new Vuex.Store({ state, mutations })

export default store
