import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    //tj
    {
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue'),
        meta: {
            title: '首页',
        }
    },
    {
        path: '/indexPage',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue'),
        meta: {
            title: '首页',
        }
    },
    {
        path: '/introduce',
        name: 'Introduce',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Introduce.vue'),
        meta: {
            title: '公司介绍'
        }
    },
    {
        path: '/internet',
        name: 'Internet',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Internet.vue'),
        meta: {
            title: '我们的网络'
        }
    },
    {
        path: '/contract',
        name: 'Contract',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Contract.vue'),
        meta: {
            title: '联系我们'
        }
    },
    {
        path: '/service',
        name: 'Service',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Service.vue'),
        meta: {
            title: '公司服务'
        }
    },
    {
        path: '/modifyPas',
        name: 'SetPassword',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/setPassword.vue'),
        meta: {
            title: '修改密码'
        }
    },
    {
        path: '/forgetPas',
        name: 'ForgetPas',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/ForgetPas.vue'),
        meta: {
            title: '忘记密码'
        }
    }
    // ylj
    , {
        path: '/list',
        name: 'List',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/List.vue'),
        meta: {
            title: '货运列表'
        }
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Detail'),
        meta: {
            title: '货运详情'
        }
    }
]
const scrollBehavior = () => {
    return { x: 0, y: 0 }
};
const router = new VueRouter({
    routes,
    scrollBehavior
});
// router.beforeEach((to, _, next) => {
    // const remeber = localStorage.getItem('rember');
    // const tokenData = remeber ? localStorage.getItem('userInfo') : sessionStorage.getItem('userInfo');
    // const userInfo = tokenData ? JSON.parse(tokenData) : {};
    // if (!userInfo.id) {
    //     if (to.path.indexOf('list') > -1 || to.path.indexOf('detail') > -1 || to.path.indexOf('modifyPas') > -1) {
    //         next(false)
    //     } else {
    //         next();
    //     }
    // } else {
    //     next();
    // }
// });

export default router