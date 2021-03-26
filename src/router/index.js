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
        path: '/index',
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
})

export default router