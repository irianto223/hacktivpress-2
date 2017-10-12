import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

var http = axios.create({
  baseURL: `http://localhost:3000`
})

var state = {
  allArticles: [],
  detailArticle: {},
  isLogin: false
}

var mutations = {
  setAllArticles (state, payload) {
    state.allArticles = payload
  },
  setdetailArticle (state, payload) {
    state.detailArticle = payload
  },
  setLoginStatus (state, status) {
    state.isLogin = status
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
  },
  register (context, payload) {
    http({
      method: 'post',
      url: `/register`,
      data: {
        username: payload.username,
        password: payload.password
      }
    })
    .then(response => {
      console.log(response.data)
      router.push('/login')
    })
    .catch(err => console.log(err))
  },
  login (context, payload) {
    http({
      method: 'post',
      url: `/login`,
      data: {
        username: payload.username,
        password: payload.password
      }
    })
    .then(response => {
      console.log(response.data)
      if (response.data.message === 'login success') {
        localStorage.setItem('token', response.data.token)
        context.commit('setLoginStatus', true)
        router.push('/')
      } else {
        alert(response.data.message)
      }
    })
  },
  logout (context) {
    context.commit('setLoginStatus', false)
    localStorage.removeItem('token')
    router.push('/')
  },
  checkLoginStatus (context) {
    if (localStorage.getItem('token')) {
      context.commit('setLoginStatus', true)
    } else {
      context.commit('setLoginStatus', false)
    }
  }
}

var store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
