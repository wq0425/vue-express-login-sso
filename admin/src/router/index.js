import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index';
import Register from '../views/Register';
import Login from '../views/login';
import NotFound from '../views/404';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const isToken = localStorage.elementToken ? true : false;
  if (to.path == '/login' || to.path == '/register') {
    next();
  } else {
    isToken ? next() : next('/login');
  }
})

export default router
