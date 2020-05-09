import Vue from 'vue'
import Firebase from 'firebase'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Create from '../views/Create.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'abstract',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: '404',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      meta: {
        requiresAuth: true,
      },
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    }
  ]
  
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!Firebase.auth().currentUser) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
