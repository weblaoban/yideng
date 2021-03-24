import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showLogin: false,
    },
    mutations: {
        SET_SHOWLOGIN(state, isShowLogin) {
            state.showLogin = isShowLogin;
        }
    },
    actions: {
        setShowLogin(context, payload) {
            context.commit('SET_SHOWLOGIN', payload)
        },
    },
    getters: {
        showLogin: (state) => state.showLogin
    }
})