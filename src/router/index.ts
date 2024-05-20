import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'
import { postNavigationCloseMenu } from '@/stores/modal'

export const webHistory = createWebHistory(import.meta.env.BASE_URL)

export const router = createRouter({ history: webHistory, routes })

router.afterEach(() => {
  postNavigationCloseMenu()
})

export const navigationLinks = (): NavigationBar =>
  routes.reduce(
    (nav: NavigationBar, { path, meta: { isRoot, navigation } }) =>
      isRoot ? [...nav, { path, isRoot, navigation }] : nav,
    []
  )

export type NavigationLink = {
  isRoot: boolean
  path: string
  navigation: string
}

export type NavigationBar = Array<NavigationLink>

export default router
