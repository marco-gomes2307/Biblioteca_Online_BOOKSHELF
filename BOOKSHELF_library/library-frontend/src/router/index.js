import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';

Vue.use(Router);

const routes = [
  {
    path: '/library-frontend/src/views/Home.vue',
    name: 'Home',
    component: Home,
  },
  {
    path: '/library-frontend/src/views/Login.vue',
    name: 'Login',
    component: Login,
  },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
