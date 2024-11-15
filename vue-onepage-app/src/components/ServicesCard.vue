<template>
  <section class="services" id="services">
    <div class="services__container">
      <div class="services__content">
        <h2 class="services__content-header">Descisions made easy</h2>
        <p class="services__content-text">
          From generalist to specialist, can I choose between all these different options? No.
          Solutions about design, motion and code!
        </p>
      </div>
      <div class="category-services">
        <div class="category-item item-design">
          <h3 class="category-description">Graphic Design</h3>
        </div>
        <div class="category-item item-uiux">
          <h3 class="category-description">UI/UX</h3>
        </div>
        <div class="category-item item-apps">
          <h3 class="category-description">Apps</h3>
        </div>
        <div class="category-item item-photography">
          <h3 class="category-description">Photography</h3>
        </div>
        <div class="category-item item-illustration">
          <h3 class="category-description">Illustrations</h3>
        </div>
        <div class="category-item item-motion">
          <h3 class="category-description">Motion Design</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services__content {
  text-align: center;
  padding: 3em 1em;
}
.services__container {
  padding: 0 24px;
}

.services__content-header {
  font-size: 2rem;
  line-height: 100%;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
}

.services__content-text {
  font-size: 1.2em;
}

.category-services {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  gap: 24px;
}

.category-description {
  font-size: 24px;
}

.category-item {
  align-items: flex-end;
  background-position: top 24px right 24px;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 8px;
  display: flex;
  padding: 24px;
}

.item-design {
  background-color: #785ede;
  grid-column: 1 / 7;
  grid-row: auto;
  height: 384px;
  max-width: 100%;
}

.item-uiux {
  background-color: #f6a560;
  grid-column: 1 / 4;
  grid-row: auto;
  height: 182px;
  width: 100%;
}

.item-apps {
  background-color: #f39e9e;
  grid-column: 4 / 7;
  grid-row: auto;
  height: 182px;
  width: 100%;
}

.item-photography {
  background-color: #61c4b7;
  grid-column: 1 / 7;
  height: 158px;
  grid-row: auto;
}

.item-illustration {
  background-color: #eb7565;
  grid-column: 1 / 7;
  height: 182px;
  grid-row: auto;
}

.item-motion {
  background-color: #552049;
  grid-column: 1 / 7;
  height: 182px;
  grid-row: auto;
}

.services__content-text,
.about__content-text {
  font-size: 1.125rem;
  color: var(--color-text-darker);
}

.category-description {
  font-size: 1.5rem;
  color: var(--color-text);
  margin-bottom: 0;
  font-weight: bold;
  line-height: 30px;
}
.services {
  max-width: 1158px;
  border: solid 2px #68b62c;
  padding: 48px 0 32px 0;
  margin: 0 auto;
}

.category-item p {
  text-align: center;
  margin-bottom: 80px;
  font-weight: 600;
}

/* vanaf 768px tot 300px*/
@media (min-width: 670px) {
  .item-design {
    -ms-grid-column: 1;
    -ms-grid-column-span: 4;
    grid-column: 1 / 5;
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
    grid-row: 1 / 3;
    max-width: 333px;
    height: auto;
  }
  .item-uiux {
    -ms-grid-column: 5;
    -ms-grid-column-span: 1;
    grid-column: 5 / 6;
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    grid-row: 1 / 2;
    width: 155px;
  }
  .item-apps {
    grid-column: 6/7;
    grid-row: 1/2;
    width: 155px;
  }
  .item-photography {
    grid-column: 1 / 5;
    -ms-grid-row: 3;
    -ms-grid-row-span: 1;
    grid-row: 3 / 4;
    height: auto;
  }
  .item-illustration {
    grid-column: 5 / 7;
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    grid-row: 2 / 3;
  }
  .item-motion {
    grid-column: 5 / 7;
    -ms-grid-row: 3;
    -ms-grid-row-span: 1;
    grid-row: 3 / 4;
  }
}

/* Boven de 768px desktop*/
@media (min-width: 768px) {
  .services__container {
    max-width: 1158px;
    padding: 0 24px;
  }

  /* .category-services {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-row: auto;
  } */

  .services__content {
    max-width: 752px;
    margin: 0 auto;
  }

  .services__content h2 {
    font-size: 48px;
  }

  .item-design {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    height: auto;
  }

  .item-uiux {
    grid-column: 3 / 4;
    grid-row: 1/2;
  }

  .item-apps {
    grid-column: 4 / 5;
    grid-row: 1/2;
  }

  .item-photography {
    grid-column: 5 / 7;
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    grid-row: 1 / 2;
    height: auto;
  }

  .item-illustration {
    grid-column: 3 / 5;
    grid-row: 2 / 3;
  }

  .item-motion {
    grid-column: 5 / 7;
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    grid-row: 2 / 3;
  }
}
</style>
