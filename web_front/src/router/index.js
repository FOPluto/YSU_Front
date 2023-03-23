import { createRouter, createWebHistory } from 'vue-router'
import UpLoadView from '../views/UpLoadView.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: UpLoadView
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UpLoadView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistView.vue')
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import(/* webpackChunkName: "about" */ '../views/UpLoadView.vue')
  },
  { 
    path: '/404', // 404未找到
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '../views/UpLoadView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
