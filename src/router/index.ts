import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import BaseLayout from './module/BaseLayout'
import BlankLayout from './module/BlankLayout'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/base/home'
    },
    ...BaseLayout,
    ...BlankLayout
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
