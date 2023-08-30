import { createRouter, createWebHistory } from 'vue-router'
import {nextTick, computed} from "vue";
import i18n from "../i18n";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta:{title: 'home'}
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta:{title:'about'}

    }
  ]
})

const DEFAULT_TITLE = 'TEST';
router.afterEach(to => {
  const title = to.meta.title ? i18n.global.t('route.'+to.meta.title) : DEFAULT_TITLE;
  nextTick(()=> document.title = title)
})


export default router
