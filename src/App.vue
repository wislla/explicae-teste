<script setup>
import { RouterView } from 'vue-router'
import HeaderNav from '@/components/HeaderNav.vue';

</script>

<template>
  <div class="app-wrapper">
    <HeaderNav/>
    <RouterView />
  </div>
</template>

<style scoped>
.app-wrapper{
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap:20px;
}
</style>
