import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import cargarTareas from '../views/cargarTareas.vue'
import mostrarTareas from '../views/mostrarTareas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cargar',
    name: 'cargar-tareas',
    component: cargarTareas
  },
  {
    path: '/mostrar',
    name: 'mostrar-tareas',
    component: mostrarTareas
  }
]

const router = new VueRouter({
  routes
})

export default router
