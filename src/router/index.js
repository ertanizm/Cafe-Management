import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/auth/Login.vue'
import RegisterPage from '../views/auth/Register.vue'
import HomePage from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: '/',
    component: HomePage,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue')
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/Orders.vue')
      },
      {
        path: 'menu',
        name: 'Menu',
        component: () => import('../views/Menu.vue')
      },
      {
        path: 'tables',
        name: 'Tables',
        component: () => import('../views/Tables.vue')
      },
      {
        path: 'staff',
        name: 'Staff',
        component: () => import('../views/Staff.vue')
      },
      {
        path: 'reports',
        name: 'Reports',
        component: () => import('../views/Reports.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 