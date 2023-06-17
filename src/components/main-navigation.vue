<template>
  <header class="application-header" :class="{ responsive: modal.expandHamburgerMenu }">
    <nav class="application-header-navigation-top">
      <RouterLink to="/">Home</RouterLink>
      <a href="javascript:void(0);" class="icon" @click="toggleMenu">
        <i class="fa fa-bars"></i>
      </a>
    </nav>
  </header>
</template>
<script setup>
import { provide } from 'vue'
import { RouterLink } from 'vue-router'
import useModal from '@/stores/modal.js'

const modal = useModal()
console.log(import.meta)
provide('expandHamburgerMenu', modal.expandHamburgerMenu)
const toggleMenu = () =>
  modal.expandHamburgerMenu ? modal.closeHamburgerMenu() : modal.openHamburgerMenu()
</script>

<!-- serverPrefetch -->
<!-- onServerPrefetch -->
