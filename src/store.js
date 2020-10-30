import Vue from 'vue'
import Vuex from 'vuex'
import alert from './stores/alert'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
    token: localStorage.getItem('access_token') || null,
  },
  getters: {
    loggedIn (state) {
      return state.token !== null
    },
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    retriveToken (state, token) {
      state.token = token
    },
    destroyToken (state) {
      state.token = null
    },
  },
  modules: {
    alert,
  },
  actions: {
    destroyToken (context) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + context.state.token
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
        axios.post('https://api-side.herokuapp.com/api/v1/user/logout')
        .then(response => {
          localStorage.removeItem('access_token')
          context.commit('destroyToken')
          resolve(response)
        })
        .catch(error => {
          localStorage.removeItem('access_token')
          context.commit('destroyToken')
          reject(error)
        })
      })
      }
    },
    retriveToken (context, cridentials) {
      return new Promise((resolve, reject) => {
        axios.post('https://api-side.herokuapp.com/api/v1/user/login', {
          username: cridentials.username,
          password: cridentials.password,
        })
        .then(response => {
          const token = response.data.access_token
          localStorage.setItem('access_token', token)
          context.commit('retriveToken', token)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
      })
    },
  },
})
