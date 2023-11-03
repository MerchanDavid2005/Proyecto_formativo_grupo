import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'
import ServiceView from '../views/ServiceView.vue'
import CategoryView from '../views/CategoryView.vue'
import OrderView from '../views/OrderView.vue'
import UserView from '../views/UserView.vue'
import EditProductView from '../views/EditProductView.vue'
import EditCategoryView from '../views/EditCategoryView.vue'
import EditServiceView from '../views/EditServiceView'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/productos',
    name: 'productos',
    component: ProductsView
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: ServiceView
  },
  {
    path: '/categorias',
    name: 'categorias',
    component: CategoryView
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: OrderView
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: UserView
  },
  {
    path: '/edit/product/:id',
    name: 'editProduct',
    component: EditProductView
  },
  {
    path: '/edit/category/:id',
    name: 'editCategory',
    component: EditCategoryView
  },
  {
    path: '/edit/service/:id',
    name: 'editService',
    component: EditServiceView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/',
    name: 'login',
    component: LoginView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
