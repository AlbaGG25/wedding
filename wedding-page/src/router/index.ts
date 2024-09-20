import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/us',
      name: 'us',
      component: () => import('../views/UsView.vue')
    },
    {
      path: '/when&where',
      name: 'when',
      component: () => import('../views/WhenView.vue')
    },
    {
      path: '/registry',
      name: 'registry',
      component: () => import('../views/WhenView.vue')
    },
    {
      path: '/rsvp',
      name: 'rsvp',
      component: () => import('../views/WhenView.vue')
    }
  ]
})

export default router
