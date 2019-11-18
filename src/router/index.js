import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
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
  }
]

const router = new VueRouter({
  routes
})

export default router
