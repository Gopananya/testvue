import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Album from '../components/Album.vue'
import Picture from '../components/Picture.vue'
import Upload from '../components/Upload.vue'

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
  {
    path: '/album/:id',
    name: 'Album',
    component: Album,
    meta: {mustBeAuth: true}
  },
  {
    path: '/picture/:id',
    name: 'Picture',
    component: Picture,
    meta: {mustBeAuth: true}
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload,
    meta: {mustBeAuth: true}
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active'
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
