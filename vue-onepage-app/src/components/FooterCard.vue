<template class="">
  <footer class="footer footer__grid">
    <div class="footer__container">
      <div class="footer__logo">
        <img src="@/assets/icon-logo.svg" alt="logo" />
      </div>
      <button class="btn" type="button">Free Consultation</button>
    </div>
  </footer>
</template>

<style scoped>
.footer__container {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  margin: 0 auto;
}

.footer__logo img {
  width: 40px;
}

@media (min-width: 786px) {
  .footer__container {
    max-width: 1158px;
    justify-content: space-between;
  }
}
</style>
