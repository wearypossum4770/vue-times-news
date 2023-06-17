import { defineStore, acceptHMRUpdate } from 'pinia'
import articles from '@/assets/data/articles.json'
const getters = {}
const actions = {
  async setArticle({ id }) {
    Object.assign(this.article, articles.filter((article) => article.id === id).pop())
  }
}
const state = () => ({
  article: {}
})

const store = defineStore('article', { getters, actions, state })
export default store
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(store, import.meta.hot))
}
