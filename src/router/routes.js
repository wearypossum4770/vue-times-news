import HomePage from '@/views/home-view.vue'
/**
 * @typedef VueRouter
 *
 */
export default [
  {
    path: '/',
    name: 'home-page',
    component: HomePage
  },
  {
    path: '/news',
    name: 'news-home',
    component: () => import('@/views/news/home.vue')
  },
  {
    path: '/news/:id',
    name: 'article-detail',
    component: () => import('@/views/news/article-details.vue')
  }
]
