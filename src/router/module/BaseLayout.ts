import { RouteRecordRaw } from 'vue-router';
import BaseLayout from '@/layouts/BaseLayout';

const baseRoutes: Array<RouteRecordRaw> = [
    {
        path: '/base',
        component: BaseLayout,
        redirect: '/base/home',
        children: [
            {
                path: 'home',
                component: () => import('../../views/base/Home'),
            },
            {
                path: 'mine',
                component: () => import('../../views/base/Mine'),
            }
        ]
    }
]

export default baseRoutes;