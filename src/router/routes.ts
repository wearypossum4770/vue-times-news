import HomeView from '@/views/generic-views/home-view.vue'

export default [
  {
    path: '/',
    name: 'landing-page',
    meta: {
      isRoot: false,
      transition: '',
      pageType: '',
      subPageType: '',
      requestId: '',
      navigation: 'DEFAULT'
    },
    component: () => import('@/views/generic-views/landing-page.vue')
  },
  {
    path: '/home',
    name: 'home-page',
    meta: {
      isRoot: true,
      transition: '',
      pageType: '',
      subPageType: '',
      requestId: '',
      navigation: 'Home'
    },
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      isRoot: true,
      transition: '',
      navigation: 'About',
      pageType: '',
      subPageType: '',
      requestId: ''
    },
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/generic-views/about-view.vue')
  }
]
