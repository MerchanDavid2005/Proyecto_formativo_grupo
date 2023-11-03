import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductosV from '../views/productosV.vue'
import CarritoV from '../views/CarritoViews.vue'
import ContactoV from '../views/contactoV.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'ProductosV',
    component:ProductosV,
  },
  {
    path:'/carrito',
    name:'CarritoV',
    component:CarritoV
  },
  {
    path:'/contactoU',
    name:'ContactoU',
    component:ContactoV,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
