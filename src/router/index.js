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
    component: () => import('../views/detail.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search.vue')
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
    path: '/demo',
    name: 'demo',
    component: () => import('../components/demo.vue')
  },
  {
    path: '/pay',
    name: 'pay',
    component: () => import('../views/pay.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/map.vue')
  },
  {
    path: '/oderInfo',
    name: 'oderInfo',
    component: () => import('../views/oderInfo.vue')
  },
  {
    path: '/orderInquiry',
    name: 'orderInquiry',
    component: () => import('../views/orderInquiry.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
