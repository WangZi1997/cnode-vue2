import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './action'
import modules from './modules/'

Vue.use(Vuex)
const state = {
  number: 0,
  loading: false
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules
})
