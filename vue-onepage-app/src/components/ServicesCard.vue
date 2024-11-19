<template>
  <section class="services" id="services">
    <div class="services__container">
      <div class="services__content">
        <h2 class="services__content-header">Decisions made easy</h2>
        <p class="services__content-text">
          From generalist to specialist, can I choose between all these different options? No.
          Solutions about design, motion, and code!
        </p>
      </div>
      <div class="category-services">
        <div
          v-for="item in items"
          :key="item.name"
          :class="['category-item', item.className]"
          :style="{ backgroundColor: item.color }"
        >
          <h3 class="category-description">{{ item.title }}</h3>
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
  font-size: 3rem;
  line-height: 100%;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
}

.services__content-text {
  font-style: normal;
  font-size: 2em;
  line-height: 28px;
  color: #7a746e;
  margin-bottom: 32px;
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
  display: flex;
  align-items: flex-end;
  background-position: top 24px right 24px;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 8px;
  display: flex;
  padding: 24px;
}

.item-design {
  grid-column: 1 / 7;
  grid-row: auto;
  height: 384px;
  max-width: 100%;
}

.item-uiux {
  grid-column: 1 / 4;
  grid-row: auto;
  height: 182px;
  width: 100%;
}

.item-apps {
  grid-column: 4 / 7;
  grid-row: auto;
  height: 182px;
  width: 100%;
}

.item-photography {
  grid-column: 1 / 7;
  height: 158px;
  grid-row: auto;
}

.item-illustration {
  grid-column: 1 / 7;
  height: 182px;
  grid-row: auto;
}

.item-motion {
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
  padding: 48px 0 32px 0;
  margin: 0 auto;
}

.category-item p {
  text-align: center;
  margin-bottom: 80px;
  font-weight: 600;
}

/* Media Queries */
@media (min-width: 670px) {
  .category-services {
    grid-template-columns: repeat(6, 1fr);
  }

  .item-design {
    grid-column: 1 / 5;
    grid-row: 1 / 3;
    max-width: 333px;
    height: auto;
  }

  .item-uiux {
    grid-column: 5 / 6;
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

    grid-row: 3 / 4;
    height: auto;
  }

  .item-illustration {
    grid-column: 5 / 7;

    grid-row: 2 / 3;
  }
  .item-motion {
    grid-column: 5 / 7;

    grid-row: 3 / 4;
  }
}

/* Boven de 768px desktop*/
@media (min-width: 768px) {
  .services__container {
    max-width: 1158px;
    padding: 0 24px;
  }

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

    grid-row: 1 / 2;
    height: auto;
  }

  .item-illustration {
    grid-column: 3 / 5;
    grid-row: 2 / 3;
  }

  .item-motion {
    grid-column: 5 / 7;

    grid-row: 2 / 3;
  }
}
</style>

<script setup>
import { ref } from 'vue'

const items = ref([
  { name: 'Graphic Design', title: 'Graphic Design', color: '#785ede', className: 'item-design' },
  { name: 'UI/UX', title: 'UI/UX', color: '#f6a560', className: 'item-uiux' },
  { name: 'Apps', title: 'Apps', color: '#f39e9e', className: 'item-apps' },
  { name: 'Photography', title: 'Photography', color: '#61c4b7', className: 'item-photography' },
  {
    name: 'Illustrations',
    title: 'Illustrations',
    color: '#eb7565',
    className: 'item-illustration',
  },
  {
    name: 'Motion Design',
    title: 'Motion Design',
    color: '#552049',
    className: 'item-motion',
  },
])
</script>
