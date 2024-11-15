<template class="css" setup>
  <section class="projects-1" id="projects">
    <div class="projects__container">
      <h3 class="projects__content-header">My projects</h3>
      <div class="slider">
        <div class="projects-slider slider__items">
          <div class="slider__item">
            <img
              src="../assets/diamond-shapes-gradient-geometric-background_23-2148820898.avif"
              alt="Graphic Design"
            />
          </div>
          <div class="slider__item">
            <img src="../assets/gradient-geometric-background_23-2148808999.avif" alt="UI/UX" />
          </div>
          <div class="slider__item">
            <img src="../assets/gradient-geometric-background_23-2148809781.avif" alt="Apps" />
          </div>
          <div class="slider__item">
            <img
              src="../assets/gradient-geometric-shapes-dark-background_23-2148437204.avif"
              alt="Photography"
            />
          </div>
          <div class="slider__item">
            <img
              src="../assets/gradient-geometric-shapes-dark-background_23-2148433951.avif"
              alt="Illustrations"
            />
          </div>
        </div>
        <div class="controls" id="custom-control">
          <div class="control-btn prev"></div>
          <div class="control-btn next"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style class="css" scoped>
.projects {
  margin: 0 auto;
  max-width: 100vw;
}

.projects__container {
  max-width: 100vw;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.projects__content-header {
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  color: #030303;
}

.projects-slider {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (1fr);
  grid-template-columns: repeat(5, 1fr);
  overflow: scroll;
  -webkit-column-gap: 30px;
  column-gap: 30px;
}

/* Boven de 768px desktop*/
/* @media (min-width: 768px) {
  .category-services {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-row: auto;
  }
} */

/* .projects-slider {
  display: grid;
  grid-auto-flow: row;
  grid-auto-columns: minmax(270px, 1fr);
  column-gap: 1em;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
} */

/* .slider-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 270px; 
  scroll-snap-align: center; 
} */

.slider-item img {
  width: 100%;
  object-fit: contain;
}

.controls {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 16px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 56px;
}
.control-btn {
  background-color: #030303;
  border-radius: 64px;
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

@media (max-width: 680px) {
  .projects {
    width: 100%;
    max-width: 100vw;
    margin: 0 auto;
  }

  .projects__container {
    padding: 0 1rem; /* Add padding to prevent content from touching screen edges */
  }

  .projects__content-header {
    margin-bottom: 32px;
  }

  .projects-slider {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (1fr);
    grid-template-columns: repeat(3, 1fr);
    overflow: scroll;
    -webkit-column-gap: 15px;
    column-gap: 15px;
  }

  .slider-item {
    /* max-width: 270px; */
  }
}
</style>
