import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

var http = axios.create({
  baseURL: `http://localhost:3000`
})

var state = {
  allArticles: []
}

var mutations = {
  setAllArticles (state, payload) {
    state.allArticles = payload
  }
}

var actions = {
  getAllArticles (context, payload) {
    http({
      method: 'get',
      url: `/articles`
    })
    .then(response => {
      context.commit('setAllArticles', response.data.data)
    })
    .catch(err => console.log(err))
  }
}

var store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
