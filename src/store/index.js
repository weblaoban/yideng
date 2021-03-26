import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showLogin: false,
        isLogin: false,
        loginMaskHeight: 0,
        tipMessage: ''
    },
    mutations: {
        SET_SHOWLOGIN(state, isShowLogin) {
            state.showLogin = isShowLogin;
        },
        SET_ISLOGIN(state, isLogin) {
            state.isLogin = isLogin;
        },
        SET_LOGINMASKHEIGHT(state, height) {
            state.loginMaskHeight = height;
        },
        SET_TIPMESSAGE(state, message) {
            state.tipMessage = message;
        }
    },
    actions: {
        setShowLogin(context, payload) {
            context.commit('SET_SHOWLOGIN', payload)
        },
        setIsLogin(context, payload) {
            context.commit('SET_ISLOGIN', payload)
        },
        setLoginMaskHeight(context, payload) {
            context.commit('SET_LOGINMASKHEIGHT', payload)
        },
        setTipMessage(context, payload) {
            context.commit('SET_TIPMESSAGE', payload);
            setTimeout(function() {
                context.commit('SET_TIPMESSAGE', '');
            }, 2000)
        }
    },
    getters: {
        showLogin: (state) => state.showLogin,
        isLogin: () => {
            localStorage.getItem('userInfo') ? true : false
        },
        loginMaskHeight: (state) => state.loginMaskHeight,
        tipMessage: (state) => state.tipMessage
    }
})