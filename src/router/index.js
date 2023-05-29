import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import HomeView from '@/views/HomeView.vue';
import childRoutes from "@/router/childRoutes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
      children: childRoutes,
    },
    {
      path: '/login',
      name: 'login',
      meta: { 
        isAuthRoute: true 
      },
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      meta: { 
        isAuthRoute: true 
      },
      component: RegisterView
    }
  ]
})

export default router
