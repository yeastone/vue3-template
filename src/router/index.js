import { createRenderer } from 'vue'
import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import('../pages/account/login.vue')
  },
  {
    path:'/',
    component: () => import('../pages/index.vue'),
    redirect:'/login',
    children:[
      {
        path:'/dashboard',
        name: 'dashboard',
        component: ()=> import('../pages/dashboard/index.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name:'notFound',
    component: ()=> import('../pages/landingPage/notFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router

