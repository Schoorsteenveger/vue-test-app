<template class="css" setup>
  <section class="projects" id="projects">
    <div class="projects__container">
      <h3 class="projects__content-header">My projects</h3>
      <div class="slider">
        <div ref="sliderRef" class="projects-slider slider__items">
          <div class="slider__item" v-for="image in images" :key="image.id">
            <img :src="image.imageURL" :alt="image.alt" />
          </div>
        </div>
        <div class="controls" id="custom-control">
          <div @click="LeftSlide()" class="control-btn prev"></div>
          <div @click="RightSlide()" class="control-btn next"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style class="css" scoped>
.projects {
  margin: 0 auto;
  max-width: 100vw;
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
  color: #030303;
}

.projects-slider {
  display: flex; /* Horizontal layout for slider items */
  gap: 1em; /* Space between slider items */
  overflow-x: auto; /* Enable horizontal scrolling */
  scroll-snap-type: x mandatory; /* Smooth snap scrolling */
  padding: 1rem 0; /* Add some padding for better visuals */
}

.slider-item {
  flex: 0 0 auto; /* Prevent items from shrinking or growing */
  min-width: 270px; /* Ensure a minimum width for each slider item */
  scroll-snap-align: start; /* Snap to the start of the item */
}

.slider-item img {
  width: 100%;
  height: auto; /* Maintain aspect ratio */
  object-fit: contain; /* Ensure images fit nicely */
}

.controls {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 32px;
}

.control-btn {
  background-color: #030303;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.control-btn:hover {
  background-color: #755cde;
}

.icon-arrow-right {
  background-image: url('../assets/icon-arrow-right.svg');
}

.icon-arrow-left {
  background-image: url('../assets/icon-arrow-left.svg');
}

/* groter dan dus vanaf 786px*/

@media (min-width: 786px) {
  .projects {
    max-width: 100vw;
    margin: 0 auto;
  }

  .projects__container {
    /* padding: 0 1rem; */
  }

  .projects__content-header {
    margin-bottom: 32px;
    font-size: 36px;
  }
  .projects-slider {
    display: grid; /* Switch to grid for desktop */
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
    overflow: visible; /* Remove horizontal scroll for desktop */
    padding: 0; /* Remove extra padding for desktop view */
  }

  .slider-item {
    min-width: auto;
  }
  .controls {
    margin-top: 34px;
  }
}
</style>

<script>
import { ref, onMounted } from 'vue'

export default {
  data() {
    return {
      images: [
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
          imageURL: new URL(
            '../assets/gradient-geometric-background_23-2148808999.avif',
            import.meta.url,
          ).href,
          alt: 'Image 2',
        },
        {
          id: 3,
          imageURL: new URL(
            '../assets/gradient-geometric-background_23-2148809781.avif',
            import.meta.url,
          ).href,
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
      ],
    }
  },
}

const sliderRef = ref(null)
let isDown = false
let startX, scrollLeft

onMounted(() => {
  const slider = sliderRef.value
  console.log('mounted?', slider)

  const startDragging = (e) => {
    console.log('start', startDragging)
    isDown = true
    startX = e.pageX - slider.offsetLeft
    scrollLeft = slider.scrollLeft
  }

  const stopDragging = () => {
    isDown = false
  }

  const drag = (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - slider.offsetLeft
    const walk = x - startX
    slider.scrollLeft = scrollLeft - walk
  }

  slider.addEventListener('mousedown', startDragging)
  slider.addEventListener('mouseleave', stopDragging)
  slider.addEventListener('mouseup', stopDragging)
  slider.addEventListener('mousemove', drag)
})
</script>
