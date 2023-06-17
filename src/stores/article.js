import { defineStore } from 'pinia'
import articles from '@/assets/data/articles.json'
const getters = {}
const actions = {
  async setArticle({id}) {
    Object.assign(this.article, articles.filter(article=> article.id === id).pop())
  }
}
const state = () =>({
  article: {}
})

export default defineStore('article', { getters, actions, state})