import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('@/views/about')
  // }
]

const router = new VueRouter({
  routes
})

export default router