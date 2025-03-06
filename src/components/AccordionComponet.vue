<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  fetchData: Function,
  depth: {
    type: Number,
    default: 0,
  },
})

const isOpen = ref(false)
const isLoading = ref(false)
const data = ref(null)

const aulas = 523
const tempoAulas = '44h 59m'
const exercicios = 62
const tempoExercicios = '28h 39m'
const materiais = 12
const tempoMateriais = '24h 03m'

const toggle = async () => {
  isOpen.value = !isOpen.value
  if (isOpen.value && props.fetchData && !data.value) {
    isLoading.value = true
    data.value = await props.fetchData()
    isLoading.value = false
  }
}
</script>

<template>
  <div class="accordion">
    <button class="accordion-header" @click="toggle" :class="{ open: isOpen }">
      <div class="header-content" :style="{ marginLeft: `${depth * 15}px` }">
        <span class="icon">{{ isOpen ? '−' : '+' }}</span>
        <span class="title">{{ title }}</span>
      </div>

      <div v-if="!isOpen" class="stats" :style="{ marginLeft: `${depth * 15}px` }">
        <span
          >Aulas: <strong>{{ aulas }}</strong> | <strong>{{ tempoAulas }}</strong></span
        >
        <span
          >Exercícios: <strong>{{ exercicios }}</strong> |
          <strong>{{ tempoExercicios }}</strong></span
        >
        <span
          >Materiais: <strong>{{ materiais }}</strong> | <strong>{{ tempoMateriais }}</strong></span
        >
      </div>
    </button>

    <div v-if="isOpen" class="accordion-content">
      <p v-if="isLoading">Carregando...</p>
      <slot v-else :data="data"></slot>
    </div>
  </div>
</template>

<style scoped>
.accordion {
  background: var(--white);
  overflow: hidden;
}
.accordion-header {
  width: 100%;
  padding: 12px 15px;
  text-align: left;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 12px;
  background: var(--white);
  transition: background 0.3s ease-in-out;
  position: relative;
}
.accordion-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 15px;
  right: 15px;
  height: 1px;
  background: var(--gray-background);
  transition: opacity 0.3s ease-in-out;
}

.accordion-header.open::after {
  display: none;
}
.accordion-header.open {
  background: var(--accordion-bg);
}
.header-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon {
  font-size: 18px;
}

.stats {
  display: flex;
  gap: 15px;
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 4px;
}

.stats span {
  display: flex;
  align-items: center;
  gap: 4px;
}

strong {
  font-weight: bold;
}

.accordion-content {
  background: var(--white);
  border-bottom: 1px solid var(--accordion-border);
}
</style>
