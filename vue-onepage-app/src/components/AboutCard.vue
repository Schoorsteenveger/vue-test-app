<template>
  <section class="about-us" id="about">
    <div class="about-us__container">
      <div class="about-us__wrapper">
        <img src="../assets/profile.jpg" alt="Amy graphic designer" />
        <div class="about-us__content-block">
          <h2 class="about__content-header">I’m Amy, and I’d love to work on your next project</h2>
          <p class="about__content-text">
            I love working with others to create beautiful design solutions. I’ve designed
            everything from brand illustrations to complete mobile apps. I’m also handy with a
            camera!
          </p>
          <button class="btn" href="#">Free Consultation</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-us {
  width: 100%;
  padding: 1.5rem 1em;
}

.about-us__wrapper img {
  border-radius: 100%;
}

.about__content-header {
  font-size: 2rem;
  line-height: 100%;
  font-weight: 700;
  margin-bottom: 16px;
}

.about-us__container {
  max-width: 1158px;
  padding: 0 16px;
  margin: 0 auto;
}

.about-us__wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.about-us__wrapper img {
  max-width: 275px;
  margin-left: 0;
  margin-bottom: 40px;
}
.about-us__content-block {
  padding: 0 40px;
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  text-align: left;
}

/* Boven de 768px desktop*/
@media (min-width: 783px) {
  .about-us__container {
    max-width: 1158px;
    padding: 0 40px;
  }

  .about-us__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .about-us__wrapper img {
    min-width: 375px;
    margin-left: 0;
    margin-bottom: 40px;
  }
  .about__content-header {
    font-size: 40px;
    line-height: 50px;
    color: #030303;
    text-align: left;
  }
}
</style>
