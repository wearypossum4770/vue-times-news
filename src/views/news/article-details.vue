<template>
  <article class="new-article-container">
    <header>
      <h1>{{ article.title }}</h1>
    </header>
    <footer>
      Written By: {{article.author}}
    </footer>
  </article>
</template>

<script setup>
import { useRoute } from 'vue-router'
import useArticle from '@/stores/article.js'
const { params } = useRoute()
const state = useArticle()
console.log(state.article)
state.setArticle(params)
const { article } = state
console.log(article.value)
</script>
