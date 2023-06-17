import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import appRouter from './router'
import { closeHamburgerMenu } from '@/router/utils'
import './assets/main.css'

const app = createApp(App)
const router = appRouter({})
router.afterEach((_to, _from, failure) => {
  closeHamburgerMenu({ failure })
})
app.use(createPinia()).use(router).mount('#app')
