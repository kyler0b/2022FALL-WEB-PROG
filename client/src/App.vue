<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavView from './components/Nav.vue';
</script>

<template>

  <header>
    <NavView />
  </header>
    
  <div class = 'container'>
    <RouterView />
  </div>
  
</template>

<style scoped>
</style>
