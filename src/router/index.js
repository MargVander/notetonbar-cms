import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../modules/auth/login.vue'
import { store } from '../store.ts'

const authguard = (to, from, next) => {
  const token = store.getters.getToken;
  if (token.access_token) {
    next();
  } else {
    next('/')
  }
}
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/bars',
    name: 'Bars',
    component: () => import('../modules/bars/barList.vue'),
    beforeEnter: authguard
  },
  {
    path: '/bars/create',
    name: 'Create bar',
    component: () => import('../modules/bars/barCreate.vue'),
    beforeEnter: authguard
  },
  {
    path: '/bars/edit/:id',
    name: 'Edit bar',
    component: () => import('../modules/bars/barEdit.vue'),
    beforeEnter: authguard
  },
  {
    path: '/bars/pictures/:id',
    name: 'Picture management',
    component: () => import('../modules/bars/barPictures.vue'),
    beforeEnter: authguard
  },
  {
    path: '/bars/reviews/:id',
    name: 'Bar reviews management',
    component: () => import('../modules/bars/barReviews.vue'),
    beforeEnter: authguard
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
