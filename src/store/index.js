import Vue from 'vue'
import Vuex from 'vuex'
import userAPI from '../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: "",
      email: "",
      image: "",
      isAdmin: false,
    },
    isAuthenticated: false,
  },
  getters: {
  },
  mutations: {
    setcurrentuser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        //透過API取得
        ...currentUser
      }
      state.isAuthenticated = true
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const response = await userAPI.getCurrentUser()
        if (response.data.status === 'error') {
          throw new Error(response.data.message)
        }
        console.log(response)
        commit('setcurrentuser', {
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          image: response.data.image,
          isAdmin: response.data.isAdmin
        })
      } catch (error) {
        console.log(error.message)
      }
    }
  },
  modules: {
  }
})
