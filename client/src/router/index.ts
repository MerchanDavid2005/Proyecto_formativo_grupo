import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import ProductosView from '../views/ProductosView.vue'

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
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
