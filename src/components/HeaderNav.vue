<script setup>
import { ref, onMounted } from 'vue'
import logo from '@/assets/logo.png'

const time = ref('')

const updateTime = () => {
  const now = new Date()
  time.value = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
}

onMounted(() => {
  updateTime()
  setInterval(updateTime, 60000)
})
</script>

<template>
  <header class="header">
    <img :src="logo" alt="Logo" class="logo" />
    <span class="time">{{ time }}</span>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  height: 30px;
}

.time {
  font-size: 16px;
  color: var(--text-color);
}
</style>
