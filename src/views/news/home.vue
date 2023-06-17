<template>
<ul>
  <li v-for="article in articles" @click="handleNavigation(article)">{{ article.title}}</li>
</ul>
</template>

<script setup>

import { useRouter } from 'vue-router'
import articles from '@/assets/data/articles.json'

const router = useRouter()
const handleNavigation = ({id}) => router.push({name: 'article-detail', params:{id}}) 

</script>
