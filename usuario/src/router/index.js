import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductosV from '../views/productosV.vue'
import CarritoV from '../views/CarritoViews.vue'
import ContactoV from '../views/contactoV.vue'
import carrito from '../components/Carrito.vue'
import serviciosC from '../components/seviciosC.vue'
import Ccorreo from '../components/Ccorreo.vue'

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
  },
  {
    path:'/carritoC',
    name:'carritoC',
    component:carrito
  },
  {
    path:'/serviciosC',
    name:'serviciosC',
    component:serviciosC,
  },
  {
    path:'/Ccorreo',
    name:'Ccorreo',
    component:Ccorreo,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
