import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reviewEvents: []
  },
  mutations: {
    ADD_REVIEW(state, review) {
      state.reviewEvents.push(review)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    currentReview: state => id => {
      return state.reviewEvents.filter(review => review.id === id)
    }
  }
})
