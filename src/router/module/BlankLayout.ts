import { RouteRecordRaw } from 'vue-router';
import BlankLayout from '@/layouts/BlankLayout';

const baseRoutes: Array<RouteRecordRaw> = [
    {
        path: '/blank',
        component: BlankLayout,
        redirect: '/blank/home',
        children: [
            {
                path: 'home',
                component: () => import('../../views/blank/Home'),
            }
        ]
    }
]

export default baseRoutes;