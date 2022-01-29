import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import About from '@/views/About.vue';
import Notfound from '@/views/Notfound.vue';
import Calc from '@/views/Calc.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/notfound',
      name: 'notfounfd',
      component: Notfound,
    },
    {
      path: '/calc',
      name: 'Calc',
      component: Calc,
    },
  ],
});

export default router;
