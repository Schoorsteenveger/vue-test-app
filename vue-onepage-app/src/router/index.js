import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ContactView from '@/views/ContactView.vue';
import AboutView from '@/views/AboutView.vue';

const router = createRouter({
  history: createWebHistory('/'), // Match this with the base setting in vite.config.js
  routes: [
    {
      path: '/',
      name: 'root',
      component: HomeView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
  ],
});

export default router;
