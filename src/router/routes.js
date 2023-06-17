
export default [
  {
    // Unique ID
    id: 'vue-webpack-dashboard-client-addon',
    // Button label
    label: 'Dashboard',
    // Button icon
    icon: 'dashboard',
    // Dynamic component to load (see 'Client addon' section below)
    component: 'vue-webpack-dashboard'
  },
   {
    path:'/news',
    name: 'news-home',
    meta: {pageName: "", needsFetch: true,},
    component: () => import("@/views/news/home.vue"),
   },
   {
    path: '/news/:id',
    name: 'article-detail',
    meta: {pageName: "", needsFetch: true,},
    component: () => import("@/views/news/article-details.vue"),
  },
]