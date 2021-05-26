import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/bars',
    name: 'Bars',
    component: () => import('../modules/bars/barList.vue')
  },
  {
    path: '/bars/create',
    name: 'Create bar',
    component: () => import('../modules/bars/barCreate.vue')
  },
  {
    path: '/bars/edit/:id',
    name: 'Edit bar',
    component: () => import('../modules/bars/barEdit.vue')
  },
  {
    path: '/bars/pictures/:id',
    name: 'Picture management',
    component: () => import('../modules/bars/barPictures.vue')
  },
  {
    path: '/bars/reviews/:id',
    name: 'Bar reviews management',
    component: () => import('../modules/bars/barReviews.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
