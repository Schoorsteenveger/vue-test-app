<template class="">
  <div class="contact-page">
    <h2>Get in contact</h2>
    <section>
      <div class="container-box">
        <div class="box" v-for="n in 5" :key="n"></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.box', {
    y: 100,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.container-box',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
})
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  width: 100%;
}
.container-box {
  height: 200vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.box {
  width: 50px;
  height: 50px;
  margin: 20px;
  background: teal;
}
</style>
