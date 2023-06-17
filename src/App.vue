<script setup>
import { RouterView } from 'vue-router'
import MainNavigation from '@/components/main-navigation.vue'
</script>

<template>
  <MainNavigation />
  <main>
    <RouterView />
  </main>
</template>
