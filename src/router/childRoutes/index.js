import DashboardView from  '@/views/DashboardView.vue'
import UserView from '@/views/UserView.vue'

const childRoutes = [
    {
        path: '/',
        name: 'dashboard',
        component: DashboardView
    },
    {
        path: '/users',
        name: 'users',
        component: UserView
    },
]

export default childRoutes
