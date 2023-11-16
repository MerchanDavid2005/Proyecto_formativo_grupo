import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import ProductosView from '../views/ProductosView.vue'
import ServiciosView from '../views/ServiciosView.vue'
import ContactoView from '../views/ContactoView.vue'
import CarritoView from '../views/CarritoView.vue'
import PedidosView from '../views/PedidosView.vue'
import InfoPedidoView from '../views/InfoPedidoView.vue'
import IniciarSesionView from '../views/IniciarSesionView.vue'
import RegistrarView from '../views/RegistrarView.vue'
import PerfilView from '../views/PerfilView.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/productos',
    name: 'productos',
    component: ProductosView
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: ServiciosView
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactoView
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: CarritoView
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: PedidosView
  },
  {
    path: '/pedido/:id',
    name: 'pedido',
    component: InfoPedidoView
  },
  {
    path: '/iniciar_sesion',
    name: 'iniciar_sesion',
    component: IniciarSesionView
  },
  {
    path: '/registrarse',
    name: 'registrarse',
    component: RegistrarView
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: PerfilView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
