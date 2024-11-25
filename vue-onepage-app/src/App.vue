<script setup>
import NavBar from './components/NavBar.vue'
import FooterCard from './components/FooterCard.vue'
</script>

<template class="page__container">
  <NavBar />
  <RouterView />
  <FooterCard />
</template>
