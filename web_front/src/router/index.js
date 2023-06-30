import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },

  {
    path: '/infomation',
    name: 'infomation',
    component: () => import(/* webpackChunkName: "about" */ '../views/InformationView.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListView.vue')
  },
  {
    path: '/my_list',
    name: 'my_list',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyList.vue')
  },
  {
    path: '/note',
    name: 'note',
    component: () => import(/* webpackChunkName: "about" */ '../views/NoteView.vue')
  },
  {
    path: '/user_info',
    name: 'user_info',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserInfoView.vue')
  },
  { 
    path: '/404', // 404未找到
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
