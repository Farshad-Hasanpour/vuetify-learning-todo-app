import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('../views/Projects.vue')
    },
    {
        path: '/team',
        name: 'Team',
        component: () => import('../views/Team.vue')
    },
    {
        path: '/archive/1',
        name: 'Page 1',
        component: () => import('../views/Archived/Home.vue')
    },
    {
        path: '/archive/2',
        name: 'Grid Version 1',
        component: () => import('../views/Archived/GridV1.vue')
    },
    {
        path: '/archive/3',
        name: 'Grid Version 2',
        component: () => import('../views/Archived/GridV2.vue')
    },
    {
        path: '/archive/4',
        name: 'SingleSelect',
        component: () => import('../components/Archived/SingleSelect.vue')
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
