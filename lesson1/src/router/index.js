import Vue from 'vue';
import VueRouter from 'vue-router';
// import Dashboard from '@/views/Dashboard.vue';
// import About from '@/views/About.vue';
// import Notfound from '@/views/Notfound.vue';
// import Calc from '@/views/Calc.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      // component: Dashboard,
      component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
    },
    // {
    //   path: '/dashboard/:type',
    //   name: 'dashboard',
    //   // component: Dashboard,
    //   component: () => import(/* webpackChunkName: "dashboardPage" */ '@/views/Dashboard.vue'),
    // },
    {
      path: '/about*',
      name: 'about',
      // component: About,
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      children: [
        {
          path: '/delivery',
        },
      ],
    },
    {
      path: '/notfound',
      name: 'notfound',
      // component: Notfound,
      component: () => import(/* webpackChunkName: "404" */ '@/views/Notfound.vue'),
    },
    {
      path: '/calculator',
      name: 'calculator',
      // component: Calc,
      component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Calc.vue'),
    },
    {
      path: '*',
      redirect: {
        name: 'notfound',
      },
    },
  ],
});
const titles = {
  dashboard: 'Dashboard',
  about: 'About',
  notfound: 'Not Found',
  calc: 'Calculator',
};

router.afterEach((to) => {
  document.title = titles[to.name];
});

export default router;
