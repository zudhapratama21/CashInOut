import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component:() =>import('../views/auth/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component:() =>import('../views/auth/Register.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass:'bg-blue-500 text-white rounded-lg'
})

export default router
