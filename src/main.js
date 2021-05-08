import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n';
import API from './api/index';
import './assets/rem';


Vue.use(VueI18n);
Vue.prototype.$API = API;
Vue.config.productionTip = false;
const locale = localStorage.getItem('local');
const i18n = new VueI18n({
    locale: locale || 'zh-CN', // 语言标识, 通过切换locale的值来实现语言切换,this.$i18n.locale
    messages: {
        'zh-CN': require('./common/lang/zh'), // 中文语言包
        'en-US': require('./common/lang/en') // 英文语言包
    },
    silentTranslationWarn: true
})
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
});
new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');