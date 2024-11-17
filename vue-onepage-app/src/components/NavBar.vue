<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header :class="{ 'scrolled-nav': scrolledNav }" class="header header__nav">
    <nav class="nav__menu">
      <div class="nav__left">
        <img class="img" src="@/assets/icon-logo.svg" alt="logo" />
        <RouterLink to="/"></RouterLink>
      </div>

      <ul v-show="!mobile" class="navigation-nav">
        <li><RouterLink class="link" to="/home">Home</RouterLink></li>
        <li><RouterLink class="link" to="/about">About</RouterLink></li>
        <li><RouterLink class="link" to="/services">Services</RouterLink></li>
        <li><RouterLink class="link" to="/contact">Contact</RouterLink></li>
      </ul>

      <div class="icon">
        <font-awesome-icon
          icon="bars"
          color="black"
          @click="toggleMobileNav"
          v-show="mobile"
          :class="{ 'icon-active': mobileNav }"
        />
      </div>

      <transition name="mobile-nav">
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
      </transition>
    </nav>
  </header>

  <RouterView />
</template>

<script>
export default {
  name: 'navigation-nav',
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: false,
      windowWidth: window.innerWidth,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreen)
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },
    closeMobileNav() {
      this.mobileNav = false
    },
    updateScroll() {
      const scrollPosition = window.scrollY
      if (scrollPosition > 50) {
        this.scrolledNav = true
        return
      }
      this.scrolledNav = false
    },
    checkScreen() {
      this.windowWidth = window.innerWidth
      this.mobile = this.windowWidth <= 750
      if (!this.mobile) {
        this.mobileNav = false
      }
    },
  },
}
</script>

<style lang="css" scoped>
/* Style as needed */
.header__nav {
  background-color: var(--color-background);
  z-index: 99;
  width: 100%;
  margin: 0 auto;
  max-width: 1158px;
  padding: 16px 0 32px 0;
  transition: 0.5s ease all;
}

.nav__menu {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  transition: 0.5s ease all;
}

.nav__menu ul,
.link {
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
  transition: 0.5s ease all;
}

.icon {
  display: flex;
  align-items: flex-start;
  position: absolute;
  top: 24px;
  right: 24px;
  height: 100%;
  cursor: pointer;
  transition: transform 0.5s ease;
}

/* To do  rotate hamburger on toggle*/
.icon-active {
  transform: rotateX(180deg);
  background-color: aquamarine;
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
    width: 100%;
    max-width: 1158px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .nav__left img {
    width: 64px;
  }
  .header__nav {
    width: 100%;
    max-width: 100%;
    position: fixed;
    top: 0;
    padding: 0 24px;
    z-index: 99;
  }
}
</style>
