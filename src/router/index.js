import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {mustBeAuth: true}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if(to.meta.mustBeAuth){
    if(store.state.auth.token){
      next();
    }else{
      next('/');
    }
  }else{
    if(store.state.auth.token && (to.path === ' /login' || to.path ==='/')){
      next('/home');
    }else{
      next();
    }
  }
})

export default router
