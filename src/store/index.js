import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showLogin: false,
        isLogin: false,
        loginMaskHeight: 0,
        tipMessage: '',
        locale: localStorage.getItem("local") || 'zh-CN'
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
        },
        SET_LOCALE(state, locale) {
            state.locale = locale;
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
        },
        setLocale(context, payload) {
            context.commit('SET_LOCALE', payload)
        }
    },
    getters: {
        showLogin: (state) => state.showLogin,
        isLogin: () => {
            const remeber = localStorage.getItem('rember');
            const tokenData = remeber ? localStorage.getItem('userInfo') : sessionStorage.getItem('userInfo');
            return tokenData ? true : false
        },
        loginMaskHeight: (state) => state.loginMaskHeight,
        tipMessage: (state) => state.tipMessage,
        locale: (state) => localStorage.getItem("local") || state.locale
    }
})