<template>
  <svg
    :class="{ rotated: isOpen }"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="6 15 12 9 18 15"></polyline>
  </svg>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
});
</script>

<style scoped>
svg {
  transition: transform 0.2s ease-in-out;
  stroke: #444;
}

svg.rotated {
  transform: rotate(180deg);
}
</style>
