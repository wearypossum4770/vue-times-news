import { createRouter, createWebHistory } from 'vue-router/auto'

export default ({ routes, scrollBehavior }) =>
  createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior
  })
