import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'
import useArticle from '@/stores/article.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

// router.afterEach(async(to, from) => {
  
//   if (to.meta.needsFetch) {
//     const article = useArticle()
//     article.see
//   }
  
// })



