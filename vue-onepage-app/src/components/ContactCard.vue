<template class="css" setup>
  <section class="contact" id="contact">
    <div class="contact__container">
      <div class="contact__content-block">
        <div class="contact__text-block">
          <h2 class="contact-header">Book a call with me</h2>
          <p>
            I’d love to have a chat to see how I can help you. The best first step is for us to
            discuss your project during a free consultation. Then we can move forward from there.
          </p>
        </div>
        <span>
          <button class="btn contact-button" type="button">Free Consultation</button>
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  max-width: 1158px;
  margin: 0 auto;
  padding-top: 88px;
}

.contact__container {
  max-width: 1158px;
  margin: 0 auto;
  padding: 0 24px;
}
.contact-header {
  font-size: 24px;
  color: var(--color-primary);
  margin-bottom: 18px;
  font-weight: 800;
}
.contact__content-block {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 80px 95px 80px 64px;
  background-color: #090909;
  border-radius: 10px;
}

.contact__text-block {
  max-width: 540px;
}

.contact__content-header {
  color: #fff7f0;
  margin-bottom: 24px;
}

.contact p {
  color: #fff7f0;
}
.contact-button {
  background-color: var(--color-primary);
  cursor: pointer;
  transition: 0.3s ease all;
}
.contact-button:hover {
  background-color: var(--color-secondary);
  color: #000;
}
</style>
