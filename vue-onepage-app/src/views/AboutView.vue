<script setup lang="ts">
import AboutCard from '@/components/AboutCard.vue'
</script>

<template>
  <div class="about-us-page">
    <h2>Like to Know more?</h2>
    <AboutCard />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about-us-page {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(142, 194, 123);
  }
  h2 {
    font-size: 64px;
  }
}
</style>
