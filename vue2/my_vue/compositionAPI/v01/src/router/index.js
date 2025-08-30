import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/main.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/ex1',
    name: 'ex1',
    component: () => import(/* webpackChunkName: "exam" */ '../views/ex1.vue')
  },
  {
    path: '/ex2',
    name: 'ex2',
    component: () => import(/* webpackChunkName: "exam" */ '../views/ex2.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
