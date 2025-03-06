<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'

const props = defineProps({
  id: Number,
  title: String,
  aulas: Number,
  tempoAulas: String,
  exercicios: Number,
  tempoExercicios: String,
  materiais: Number,
  tempoMateriais: String,
})

const store = useStore()
const isOpen = ref(false)
const competencias = ref([])

const toggle = async () => {
  isOpen.value = !isOpen.value

  if (isOpen.value) {
    await store.dispatch('materias/fetchCompetencias', props.id)
    competencias.value = store.getters['materias/getCompetenciasByMateria'](props.id)
  }
}
</script>

<template>
  <div class="main-accordion">
    <div class="accordion-header" @click="toggle">
      <div class="accordion-header-content">
        <span class="accordion-title">{{ title }}</span>
        <div class="stats">
          <span
            >Aulas: <strong>{{ aulas }}</strong> | <strong>{{ tempoAulas }}</strong></span
          >
          <span
            >Exercícios: <strong>{{ exercicios }}</strong> |
            <strong>{{ tempoExercicios }}</strong></span
          >
          <span
            >Materiais: <strong>{{ materiais }}</strong> |
            <strong>{{ tempoMateriais }}</strong></span
          >
        </div>
      </div>
      <span class="icon">
        <ArrowIcon :class="{ rotated: isOpen }" />
      </span>
    </div>

    <div v-if="isOpen" class="accordion-content">
      <slot :competencias="competencias"></slot>
    </div>
  </div>
</template>

<style scoped>
.main-accordion {
  border-radius: 10px;
  margin-bottom: 10px;
  background: var(--white);
  padding: 15px;
  overflow: hidden;
}

.accordion-header {
  background: var(--white);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.accordion-header-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.accordion-title {
  font-weight: bold;
  font-size: 16px;
}

.accordion-content {
  border: 1.5px solid var(--accordion-border);
  border-radius: 5px;
  background: var(--white);
  margin-top: 15px;
}
.stats {
  display: flex;
  gap: 25px;
  font-size: 12px;
  color: var(--text-secondary);
}

.stats span {
  display: flex;
  align-items: center;
  gap: 5px;
}

strong {
  font-weight: bold;
  margin-left: 4px;
}

.icon {
  display: flex;
  align-items: center;
}
</style>
