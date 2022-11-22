import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'index',
        component: () =>
            import ('../views/home.vue')
    },
    {
        path: "/home-1",
        name: "/home-1",
        component: () =>
            import ("../views/home-1.vue")
    },
    {
        path: '*',
        name: '/404',
        component: () =>
            import ('../views/error/404.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
