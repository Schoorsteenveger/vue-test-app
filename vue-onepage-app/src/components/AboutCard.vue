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
  max-width: 1158px;
  padding: 1.5rem 1em;
  margin: 0 auto;
}

.about-us {
  background-color: transparent;
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
  padding: 0 16px;
}

.about-us__wrapper {
  flex-direction: column;
}

.about-us__wrapper img {
  max-width: 364px;
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
  text-align: center;
}

/* Boven de 768px desktop*/
@media (min-width: 768px) {
  .about-us__container {
    max-width: 1158px;
    padding: 0 40px;
  }

  .about-us__wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-box-align: center;
    -ms-flex-align: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
  }
  .about__content-header {
    font-size: 40px;
    line-height: 50px;
    color: #030303;
    text-align: left;
  }
  .about-us__content-block {
    /* padding: 0 40px 0 60px; */
  }
}
</style>
