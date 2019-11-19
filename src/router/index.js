import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/searchBar',
    name: 'searchBar',
    component: () => import('../components/searchBar.vue')
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: () => import('../views/Reservation.vue')
  },
  {
    path: '/datePicker',
    name: 'datePicker',
    component: () => import('../components/datePicker.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
