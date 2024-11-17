<template>
  <section class="projects" id="projects">
    <div class="projects__container">
      <h3 class="projects__content-header">My Projects</h3>
      <div class="slider">
        <div ref="sliderRef" class="projects-slider slider__items">
          <div class="slider__item" v-for="image in images" :key="image.id">
            <img :src="image.imageURL" :alt="image.alt" />
          </div>
        </div>
        <div class="controls">
          <div @click="scrollLeft" class="control-btn prev">
            <font-awesome-icon color="white" :icon="['fas', 'arrow-left']" />
          </div>
          <div @click="scrollRight" class="control-btn next">
            <font-awesome-icon color="white" :icon="['fas', 'arrow-right']" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  margin: 0 auto;
  max-width: 100%;
  overflow: hidden;
}

.projects__container {
  text-align: center;
  margin: 30px 0;
}

.projects__content-header {
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  margin-bottom: 32px;
  color: #030303;
}

.projects-slider {
  display: flex;
  gap: 1rem;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}

.slider__item {
  flex: 0 0 auto;
  min-width: 270px;
  /* min-width: calc(100% / 2.5); */
}

.slider__item img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.control-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #030303;
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.control-btn:hover {
  background-color: #755cde;
}

@media (max-width: 768px) {
  .slider__item img {
    width: 340px;
  }
  /* .slider__item img {
    width: 100%;
  } */
}

@media (min-width: 768px) {
  .slider__item {
    min-width: calc(100% / 5);
  }
  /* .slider__item img {
    width: 100%;
  } */
}

@media (min-width: 1200px) {
  .slider__item {
    min-width: calc(100% / 6);
  }
}
</style>

<script setup>
import { ref, onMounted } from 'vue'

// Reactive variables
const images = ref([
  {
    id: 1,
    imageURL: new URL(
      '../assets/diamond-shapes-gradient-geometric-background_23-2148820898.avif',
      import.meta.url,
    ).href,
    alt: 'Image 1',
  },
  {
    id: 2,
    imageURL: new URL('../assets/gradient-geometric-background_23-2148808999.avif', import.meta.url)
      .href,
    alt: 'Image 2',
  },
  {
    id: 3,
    imageURL: new URL('../assets/gradient-geometric-background_23-2148809781.avif', import.meta.url)
      .href,
    alt: 'Image 3',
  },
  {
    id: 4,
    imageURL: new URL(
      '../assets/gradient-geometric-shapes-dark-background_23-2148433951.avif',
      import.meta.url,
    ).href,
    alt: 'Image 4',
  },
  {
    id: 5,
    imageURL: new URL(
      '../assets/gradient-geometric-shapes-dark-background_23-2148437204.avif',
      import.meta.url,
    ).href,
    alt: 'Image 5',
  },
  {
    id: 6,
    imageURL: new URL(
      '../assets/diamond-shapes-gradient-geometric-background_23-2148820898.avif',
      import.meta.url,
    ).href,
    alt: 'Image 6',
  },
  {
    id: 7,
    imageURL: new URL('../assets/gradient-geometric-background_23-2148808999.avif', import.meta.url)
      .href,
    alt: 'Image 7',
  },
  {
    id: 8,
    imageURL: new URL('../assets/gradient-geometric-background_23-2148809781.avif', import.meta.url)
      .href,
    alt: 'Image 8',
  },
  {
    id: 9,
    imageURL: new URL(
      '../assets/gradient-geometric-shapes-dark-background_23-2148433951.avif',
      import.meta.url,
    ).href,
    alt: 'Image 9',
  },
  {
    id: 10,
    imageURL: new URL(
      '../assets/gradient-geometric-shapes-dark-background_23-2148437204.avif',
      import.meta.url,
    ).href,
    alt: 'Image 10',
  },
])

const sliderRef = ref(null)

// Draggable slider logic
const handleDrag = () => {
  const slider = sliderRef.value
  if (!slider) return

  let isDragging = false
  let startX, scrollLeft

  const startDrag = (e) => {
    isDragging = true
    startX = e.pageX || e.touches[0].pageX
    scrollLeft = slider.scrollLeft
  }

  const stopDrag = () => {
    isDragging = false
  }

  const moveDrag = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX || e.touches[0].pageX
    const distance = x - startX
    slider.scrollLeft = scrollLeft - distance
  }

  slider.addEventListener('mousedown', startDrag)
  slider.addEventListener('mouseleave', stopDrag)
  slider.addEventListener('mouseup', stopDrag)
  slider.addEventListener('mousemove', moveDrag)

  slider.addEventListener('touchstart', startDrag)
  slider.addEventListener('touchend', stopDrag)
  slider.addEventListener('touchmove', moveDrag)
}

const scrollLeft = () => {
  const slider = sliderRef.value
  if (slider) {
    const slideWidth = slider.clientWidth / 3
    slider.scrollLeft -= slideWidth
  }
}

const scrollRight = () => {
  const slider = sliderRef.value
  if (slider) {
    const slideWidth = slider.clientWidth / 3
    slider.scrollLeft += slideWidth
  }
}

onMounted(handleDrag)
</script>
