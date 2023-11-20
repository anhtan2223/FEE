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
        props : true ,
      } ,
      {
        path : '/register' ,
        component : () => import('../views/Register.vue') ,
        name : "Register" ,
        props : true ,
      } ,
      {
        path : '/cart' ,
        component : () => import('../views/Cart.vue') ,
        props : true ,
      } ,
      {
        path : '/:pathMatch(.*)*',
        name: 'NotFound' ,
        component : () => import('../views/NotFound.vue') ,
        props : true ,
      } ,
      {
        path : '/info' ,
        component : () => import('../views/User/User.vue') ,
        props : true ,
      } ,
      {
        path : '/info/doimk' ,
        component : () => import('../views/User/User.ChangePass.vue') , 
        props : true ,
      } ,
      {
        path : '/product' ,
        component : () => import('../views/AddProduct.vue') , 
        props : true ,
      } ,
      {
        path : '/product/:id' ,
        component : () => import('../views/UpdateProduct.vue') , 
        props : true ,
      } ,
      
      
    ]
  }
)

export default router
