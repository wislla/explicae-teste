<script setup>
import { ref, defineProps, computed } from 'vue'

const props = defineProps({
  aulas: {
    type: Array,
    default: () => [],
  },
})

const activeTab = ref(0)

const tabs = computed(() => [
  { title: 'Aulas', value: `${props.aulas.length} | 02h 45m` },
  { title: 'Exercícios', value: '06 | 02h 45m' },
  { title: 'Materiais', value: '01 | 00h 48m' },
])
</script>

<template>
  <div class="tabs-container">
    <div class="tabs">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="{ active: activeTab === index }"
      >
        {{ tab.title }} <strong> {{ tab.value }} </strong>
      </button>
    </div>
    <div class="tab-content">
      <div v-if="activeTab === 0">
        <div class="header">
          <h3>TEORIA + QUESTÕES ORIENTADAS</h3>
          <p class="summary">
            <strong>{{ aulas.length }} aulas | 00:14:19</strong>
          </p>
        </div>
        <ul class="list">
          <li v-for="aula in aulas" :key="aula.id">
            <label class="row">
              <span class="text">
                <input type="checkbox" />
                {{ aula.titulo }}
              </span>
              <span class="time">{{ aula.duracao }}</span>
            </label>
          </li>
        </ul>
      </div>

      <div v-if="activeTab === 1">
        <h3>Exercícios</h3>
        <p>Exercícios: 06 - Tempo: 02h 45m</p>
      </div>

      <div v-if="activeTab === 2">
        <h3>Materiais</h3>
        <p>Materiais: 01 - Tempo: 00h 48m</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tabs-container {
  width: 100%;
  font-family: Arial, sans-serif;
  font-size: 12px;
}

.tabs {
  border-bottom: 2px solid var(--accordion-border);
  background-color: var(--accordion-bg);
}

.tabs button {
  flex: 1;
  padding: 10px;
  margin: 0 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
  border-bottom: 3px solid transparent;
}

.tabs button.active {
  border-bottom: 3px solid #7a57d1;
}

strong {
  font-weight: bold;
}

.tab-content {
  padding: 20px;
  background: var(--background-light, #f9f9f9);
  border-radius: 0 0 5px 5px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

h3 {
  font-size: 14px;
  margin-bottom: 10px;
}

.summary {
  font-size: 12px;
  font-weight: bold;
}

.list {
  list-style: none;
  padding: 0;
}

.list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
}

.row {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.text {
  font-size: 12px;
}

.time {
  font-size: 12px;
  color: var(--text-secondary, #666);
}
</style>
