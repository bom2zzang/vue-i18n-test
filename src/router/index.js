import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {nextTick} from "vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{title:'home'}
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
const DEFAULT_TITLE = 'Default Title';
router.afterEach(to => {
  const title = to.meta.title ? to.meta.title : DEFAULT_TITLE;
  nextTick(()=> document.title = title)
})

export default router
