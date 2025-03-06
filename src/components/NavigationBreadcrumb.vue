<script setup>
defineProps({
  items: Array,
})
</script>

<template>
  <nav class="breadcrumb">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <span v-if="index < items.length - 1" class="clickable">{{ item }} /</span>
        <span v-else class="highlight">{{ item }}</span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.breadcrumb {
  font-size: 0.875rem;
  color: var(--text-primary);
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 0.25rem;
}

li {
  font-weight: 400;
}

.clickable {
  cursor: pointer;
  text-decoration: none;
  color: var(--text-primary);
}

.clickable:hover {
  color: var(--primary-color);
  font-weight: bold;
}

.highlight {
  font-weight: 600;
  color: var(--primary-color);
  position: relative;
}

.highlight::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background: var(--primary-color);
}
</style>
