<template>
  <section id="about" class="about-page">
    <div ref="container" class="about-container">
      <div class="row">
        <div ref="content" class="twelve-columns">
          <h2 ref="title">About Me</h2>
          <p ref="textOne">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quidem soluta
            voluptas, recusandae suscipit fugiat explicabo eius nostrum illo in qui provident
            voluptatum alias natus. Nihil ad fugiat nesciunt possimus? Velit illum sint aliquid
            consequatur in veritatis amet libero ea error recusandae, nostrum possimus incidunt
            sequi officiis molestiae repellat! Quisquam officia consequatur, nulla atque et
            repudiandae porro molestias dolores voluptates!
          </p>
          <p ref="textTwo">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quidem soluta
            voluptas, recusandae suscipit fugiat explicabo eius nostrum illo in qui provident
            voluptatum alias natus. Nihil ad fugiat nesciunt possimus? Velit illum sint aliquid
            consequatur in veritatis amet libero ea error recusandae, nostrum possimus incidunt
            sequi officiis molestiae repellat! Quisquam officia consequatur, nulla atque et
            repudiandae porro molestias dolores voluptates!
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quidem soluta
            voluptas, recusandae suscipit fugiat explicabo eius nostrum illo in qui provident
            voluptatum alias natus. Nihil ad fugiat nesciunt possimus? Velit illum sint aliquid
            consequatur in veritatis amet libero ea error recusandae, nostrum possimus incidunt
            sequi officiis molestiae repellat! Quisquam officia consequatur, nulla atque et
            repudiandae porro molestias dolores voluptates!
          </p>
          <p ref="textThree">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quidem soluta
            voluptas, recusandae suscipit fugiat explicabo eius nostrum illo in qui provident
            voluptatum alias natus. Nihil ad fugiat nesciunt possimus? Velit illum sint aliquid
            consequatur in veritatis amet libero ea error recusandae, nostrum possimus incidunt
            sequi officiis molestiae repellat! Quisquam officia consequatur, nulla atque et
            repudiandae porro molestias dolores voluptates!
          </p>
          <p ref="textFour">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quidem soluta
            voluptas, recusandae suscipit fugiat explicabo eius nostrum illo in qui provident
            voluptatum alias natus. Nihil ad fugiat nesciunt possimus? Velit illum sint aliquid
            consequatur in veritatis amet libero ea error recusandae, nostrum possimus incidunt
            sequi officiis molestiae repellat! Quisquam officia consequatur, nulla atque et
            repudiandae porro molestias dolores voluptates!
          </p>
          <p ref="textFive">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quidem soluta
            voluptas, recusandae suscipit fugiat explicabo eius nostrum illo in qui provident
            voluptatum alias natus. Nihil ad fugiat nesciunt possimus? Velit illum sint aliquid
            consequatur in veritatis amet libero ea error recusandae, nostrum possimus incidunt
            sequi officiis molestiae repellat! Quisquam officia consequatur, nulla atque et
            repudiandae porro molestias dolores voluptates!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-page {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.twelve-columns {
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;
  padding: 150px 32px;
  gap: 24px;
}

h2 {
  font-size: 64px;
}
.about-container {
  display: flex;
}

@media (min-width: 768px) {
  .twelve-columns {
    max-width: 1158px;
  }
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const container = ref(null)
const content = ref(null)

onMounted(() => {
  gsap.from(content.value.children, {
    delay: 0.5,
    duration: 1,
    y: '+100',
    autoAlpha: 0,
    stagger: 0.25,
    ease: 'back.out(1.7)',
  })
})
</script>
