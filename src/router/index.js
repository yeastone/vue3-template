import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import('@/views/login/index.vue')
  },
  {
    path:'/',
    component: () => import('@/views/index.vue'),
    redirect:'/login',
    children:[
      {
        path:'/dashboard',
        name: 'dashboard',
        component: ()=> import('@/views/dashboard/index.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name:'notFound',
    component: ()=> import('@/views/landingPage/not_found.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router

