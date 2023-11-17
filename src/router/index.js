import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter(
  {
    history : createWebHistory(import.meta.env.BASE_URL),
    routes : 
    [
      {
        path : '/' ,
        component : () => import('../views/SanPham.vue')
      },
      {
        path : '/login' ,
        component : () => import('../views/Login.vue') ,
        name : "Login" ,
      } ,
      {
        path : '/register' ,
        component : () => import('../views/Register.vue') ,
        name : "Register"
      } ,
      {
        path : '/cart' ,
        component : () => import('../views/Cart.vue')
      } ,
      {
        path : '/:pathMatch(.*)*',
        name: 'NotFound' ,
        component : () => import('../views/NotFound.vue')
      } ,
      {
        path : '/user' ,
        component : () => import('../views/User/User.vue')
      } ,
      
    ]
  }
)

export default router
