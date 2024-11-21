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
  margin: 0 auto;
  padding-top: 88px;
}

.contact__container {
  text-align: center;
}
.contact-header {
  font-size: 24px;
  color: var(--color-primary);
  margin-bottom: 18px;
  font-weight: 800;
}
.contact__content-block {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  width: 100%;
  font-size: 18px;
  padding: 16px 24px 32px 24px;
  background-color: var(--color-background-dark);
  border-radius: 10px;
}

.contact__text-block {
  gap: 18px;
  padding-bottom: 18px;
  display: flex;
  flex-direction: column;
}

.contact__content-header {
  color: var(--color-text);
  margin-bottom: 24px;
}

.contact p {
  color: var(--color-text);
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

@media (min-width: 768px) {
  .contact__container {
    max-width: 1158px;
    margin: 0 auto;
    padding: 0 24px;
    text-align: left;
  }

  .contact__content-block {
    padding: 80px 95px 80px 64px;
    align-items: flex-start;
  }

  .contact-header {
    font-size: 40px;
    color: var(--color-primary);
    margin-bottom: 18px;
    font-weight: 800;
  }

  .contact__text-block {
    align-items: flex-start;
  }
}
</style>
