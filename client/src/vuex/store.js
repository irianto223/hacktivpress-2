import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

var http = axios.create({
  baseURL: `http://localhost:3000`
})

var state = {
  allArticles: [],
  detailArticle: {}
}

var mutations = {
  setAllArticles (state, payload) {
    state.allArticles = payload
  },
  setdetailArticle (state, payload) {
    state.detailArticle = payload
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
  },
  getOneArticle (context, id) {
    console.log(id)
    http({
      method: 'get',
      url: `/articles/${id}`
    })
    .then(response => {
      console.log(response.data)
      context.commit('setdetailArticle', response.data.data)
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
