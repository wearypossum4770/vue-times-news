import { createRouter, createWebHistory } from 'vue-router'

/**
 * @typedef VueRoute { path: string, name: string, children: [], component: (Promise<NodeModule> | NodeModule)}
 *
 * @param { object } param
 * @param { Array.<VueRoute> } param.routes
 * @param { function } param.scrollBehavior - helper function to handle
 * scroll behavior.
 * @returns { createRouter }
 */
export default ({ routes, scrollBehavior }) =>
  createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior
  })
