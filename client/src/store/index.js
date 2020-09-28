import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reviewEvents: [],
    newEvents: []
  },
  mutations: {
    ADD_REVIEW(state, review) {
      state.reviewEvents.push(review)
    },
    ADD_EVENT(state, event) {
      state.newEvents.push(event)
      console.log(state.newEvents)
      localStorage.setItem('newEvents', JSON.stringify(state.newEvents))
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
