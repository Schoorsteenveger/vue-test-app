<template>
  <header :class="{ 'scrolled-nav': scrolledNav }" class="header__nav">
    <nav class="nav__menu">
      <div class="nav__left">
        <RouterLink to="/">
          <img class="img" src="@/assets/icon-logo.svg" alt="logo" />
        </RouterLink>
      </div>

      <ul v-show="!mobile" class="navigation-nav">
        <li><RouterLink class="link" to="/home">Home</RouterLink></li>
        <li><RouterLink class="link" to="/about">About</RouterLink></li>
        <li><RouterLink class="link" to="/services">Services</RouterLink></li>
        <li><RouterLink class="link" to="/contact">Contact</RouterLink></li>
      </ul>

      <Transition class="icon">
        <font-awesome-icon
          icon="bars"
          color="black"
          @click="toggleMobileNav"
          v-show="mobile"
          :class="{ 'icon-active': mobileNav }"
        />
      </Transition>

      <Transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><RouterLink class="link" @click="closeMobileNav" to="/home">Home</RouterLink></li>
          <li><RouterLink class="link" @click="closeMobileNav" to="/about">About</RouterLink></li>
          <li>
            <RouterLink class="link" @click="closeMobileNav" to="/services">Services</RouterLink>
          </li>
          <li>
            <RouterLink class="link" @click="closeMobileNav" to="/contact">Contact</RouterLink>
          </li>
        </ul>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrolledNav = ref(false)
const mobile = ref(false)
const mobileNav = ref(false)
const windowWidth = ref(window.innerWidth)

const toggleMobileNav = () => {
  mobileNav.value = !mobileNav.value
  console.log('Toggling', mobileNav)
}

const closeMobileNav = () => {
  mobileNav.value = false
}

const updateScroll = () => {
  scrolledNav.value = window.scrollY > 50
}

const checkScreen = () => {
  windowWidth.value = window.innerWidth
  mobile.value = windowWidth.value <= 750
  if (!mobile.value) {
    mobileNav.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', checkScreen)
  window.addEventListener('scroll', updateScroll)
  checkScreen()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreen)
  window.removeEventListener('scroll', updateScroll)
})
</script>

<style scoped>
.header__nav {
  background-color: var(--color-background);
  z-index: 99;
  margin: 0 auto;
  width: 100%;
  padding: 16px 0 32px 0;
  position: fixed;
}

.nav__menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  margin: 0 auto;
}

.nav__left {
  padding: 16px;
}

.nav__left img {
  width: 55px;
}

.nav__menu ul,
.link {
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  list-style: none;
  background-color: var(--color-background);
}

li {
  text-transform: uppercase;
  padding: 16px;
  margin-left: 16px;
}

.link {
  font-size: 14px;
  transition: 0.5s ease all;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
}

.link:hover {
  color: var(--color-primary);
  border-color: var(--color-border-hover);
}

.navigation-nav {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  background-color: transparent;
}

.nav__left {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.nav__left img {
  width: 50px;
}

.icon {
  display: flex;
  align-items: flex-start;
  position: absolute;
  top: 24px;
  right: 24px;
  width: 18px;
  height: auto;
  cursor: pointer;
  transition: transform 0.5s ease;
}

.icon-active {
  transform: rotateY(180deg);
  color: var(--color-button-active);
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 98;
}

.dropdown-nav li {
  margin-left: 0;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: transform 0.5s ease;
}

.mobile-nav-enter-from {
  transform: translateX(-100%);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}

.mobile-nav-leave-from {
  transform: translateX(0);
}

.mobile-nav-leave-to {
  transform: translateX(-100%);
}
.link {
  color: var(--color-background-dark);
}

.scrolled-nav {
  background-color: var(--color-background);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.6);
}
.scrolled-nav img {
  width: 40px;
}

@media (min-width: 750px) {
  .nav__menu {
    max-width: 1158px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
  .nav__left {
    padding: 16px;
  }
  .nav__left img {
    width: 55px;
  }
  .header__nav {
    display: flex;
    position: fixed;
    top: 0;
    padding: 0 24px;
    z-index: 99;
  }
}
</style>
